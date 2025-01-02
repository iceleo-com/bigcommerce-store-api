const fs = require('fs');
const path = require('path');
const yaml = require('yaml');
const Handlebars = require('handlebars');
const handlebarsHelper = require('handlebars-helpers');
const { createClient } = require('@hey-api/openapi-ts');

const defaultEndpoint = 'https://api.bigcommerce.com/stores/{store_hash}/v3';

const validMethods = [
    'get',
    'post',
    'put',
    'delete',
    'patch',
    'head',
    'options',
    'trace',
];

const contentTypes = [
    'application/json',
    'multipart/form-data',
    'application/x-www-form-urlencoded',
];

handlebarsHelper({
    handlebars: Handlebars,
});

function getFilesRecursive(dir) {
    const files = [];

    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            files.push(...getFilesRecursive(filePath));
        } else {
            files.push(filePath);
        }
    });

    return files;
}

function uppercaseFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function lowercaseFirstChar(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function camelCase(str) {
    return lowercaseFirstChar(
        str
        .replace(/[_\W](\w)/g, (match, p1) => {
            return p1.toUpperCase();
        })
        .replace(/[A-Z]([A-Z]+)/g, (match, p1) => {
            return uppercaseFirstChar(match.toLowerCase());
        })
    );
}

function snakeCase(str) {
    return str
        .replace(/([A-Z])/g, (match, p1) => {
            return `_${p1.toLowerCase()}`;
        })
        .replace(/[\W_]+/g, '_');
}

async function main() {
    const basePath = process.cwd();
    const referencePath = path.join(basePath, 'reference');
    const generatedPath = path.join(basePath, 'src/generated');
    const apisPath = path.join(basePath, 'src/apis');

    const v2Apis = [];
    const v3Apis = [];

    const files = getFilesRecursive(referencePath);

    for (let index = 0; index < files.length; index++) {
        const file = files[index];

        const basename = path.basename(file);
        if (basename.startsWith('.')
            || !/\.yml$/i.test(basename)
            || /\.sf.yml$/i.test(basename)
        ) {
            continue;
        }

        console.log(file);

        const fileName = basename
            .replace(/\.yml$/i, '')
            .replace(/[_\W]+/g, '-')
            .replace(/\-(catalog|payments)/i, '')
            .toLowerCase();

        const namespace = fileName
            .split('-')
            .map((word) => uppercaseFirstChar(word))
            .join('');

        const propertyName = camelCase(fileName.replace(/-v(2|3)$/i, ''));

        if (/\-v2/i.test(fileName)) {
            v2Apis.push({
                className: `${namespace}Api`,
                fileName,
                propertyName,
            });
        } else {
            v3Apis.push({
                className: `${namespace}Api`,
                fileName,
                propertyName,
            });
        }

        // generate model types / interfaces
        const generatedOutput = path.join(generatedPath, fileName);

        fs.mkdirSync(
            generatedOutput,
            { recursive: true },
        );

        await createClient({
            client: '@hey-api/client-fetch',
            input: file,
            output: generatedOutput,
        });


        if (fs.existsSync(path.join(generatedOutput, 'index.ts'))) {
            const indexContents = fs.readFileSync(path.join(generatedOutput, 'index.ts'), 'utf8');

            fs.writeFileSync(
                path.join(generatedOutput, 'index.ts'),
                indexContents.replace("export * from './sdk.gen';\n", ''),
            );
        }

        if (fs.existsSync(path.join(generatedOutput, 'sdk.gen.ts'))) {
            fs.rmSync(path.join(generatedOutput, 'sdk.gen.ts'));
        }

        // generate api client
        const specs = yaml.parse(fs.readFileSync(file, 'utf8'));

        const endpoint = specs.servers && specs.servers[0] && specs.servers[0].url
            ? specs.servers[0].url
            : defaultEndpoint;

        const properties = [];

        const paths = typeof specs.paths === 'object' ? specs.paths : {};

        for (const path in paths) {
            if (Object.prototype.hasOwnProperty.call(paths, path)) {
                const pathDetails = paths[path];

                const pathParams = [];

                if (Array.isArray(pathDetails.parameters)) {
                    pathDetails.parameters.forEach((parameter) => {
                        if (typeof parameter.name === 'string'
                            && typeof parameter.in === 'string'
                            && parameter.in === 'path'
                        ) {
                            pathParams.push({
                                ...parameter,
                                normalizedName: camelCase(parameter.name),
                            });
                        } else if (typeof parameter['$ref'] === 'string') {
                            const refPaths = parameter['$ref'].replace('#/', '').split('/');

                            let currentNode = specs;
                            while (refPaths.length > 0) {
                                const refPath = refPaths.shift();
                                currentNode = currentNode[refPath] || {};
                            }

                            if (typeof currentNode.name === 'string'
                                && typeof currentNode.in === 'string'
                                && currentNode.in === 'path'
                            ) {
                                pathParams.push({
                                    ...currentNode,
                                    normalizedName: camelCase(currentNode.name),
                                    ref: parameter['$ref'].replace('#/', '').replace(/\/([^\/]+)/g, "['$1']"),
                                });
                            }
                        }
                    });
                }

                validMethods.forEach((method) => {
                    if (typeof pathDetails[method] === 'undefined') {
                        return;
                    }

                    const methodDetails = pathDetails[method];

                    if (typeof methodDetails.operationId !== 'string') {
                        return;
                    }

                    methodDetails.operationId = camelCase(methodDetails.operationId);

                    let methodPath = `${endpoint}${path}`.replace(/^.+\/v(2|3)/, 'v$1');
                    if (pathParams.length > 0) {
                        methodPath = ('`' + methodPath.replace(/\{/g, '${') + '`')
                            .replace(/\{([^\}]+)\}/g, (_, p1) => {
                                return `{${camelCase(p1)}}`;
                            });
                    } else {
                        methodPath = `'${methodPath}'`;
                    }

                    const query = [];

                    if (Array.isArray(methodDetails.parameters)) {
                        methodDetails.parameters.forEach((parameter) => {
                            if (typeof parameter['$ref'] === 'string') {
                                const refPaths = parameter['$ref'].replace('#/', '').split('/');

                                let currentNode = specs;
                                while (refPaths.length > 0) {
                                    const refPath = refPaths.shift();
                                    currentNode = currentNode[refPath] || {};
                                }

                                if (typeof currentNode.name === 'string'
                                    && typeof currentNode.in === 'string'
                                ) {
                                    if (currentNode.in === 'query') {
                                        query.push({
                                            ...currentNode,
                                            ref: parameter['$ref'].replace('#/', '').replace(/\/([^\/]+)/g, "['$1']"),
                                        });
                                    }
                                }
                            } else if (typeof parameter.name === 'string'
                                && typeof parameter.in === 'string'
                            ) {
                                if (parameter.in === 'query') {
                                    query.push(parameter);
                                }
                            }
                        });
                    }


                    let methodRequestBody = null;

                    if (typeof methodDetails.requestBody === 'object') {
                        const requestBody = methodDetails.requestBody;
                        const requestBodyContent = requestBody.content || {};

                        const requestBodyParam = {
                            name: 'requestBody',
                            in: 'body',
                        };

                        for (let i = 0; i < contentTypes.length; i++) {
                            const contentType = contentTypes[i];

                            if (typeof requestBodyContent[contentType] === 'object') {
                                const requestBodyContentSchema = requestBodyContent[contentType].schema || {};

                                requestBodyParam.contentType = contentType;

                                if (typeof requestBodyContentSchema['$ref'] === 'string') {
                                    requestBodyParam.ref = requestBodyContentSchema['$ref'].replace('#/', '').replace(/\/([^\/]+)/g, "['$1']");
                                }

                                break;
                            }
                        }

                        methodRequestBody = { ...requestBodyParam };
                    }

                    let methodSuccessResponse = null;
                    let methodErrorResponse = null;

                    if (typeof methodDetails.responses === 'object') {
                        if (typeof methodDetails.responses['200'] === 'object'
                            && typeof methodDetails.responses['200'].content === 'object'
                            && typeof methodDetails.responses['200'].content['application/json'] === 'object'
                        ) {
                            methodSuccessResponse = methodDetails.responses['200'].content['application/json'];
                        }

                        for (const key in methodDetails.responses) {
                            if (Object.prototype.hasOwnProperty.call(methodDetails.responses, key)) {
                                if (/^\d+$/.test(String(key))
                                    && Number(key) >= 400
                                ) {
                                    methodErrorResponse = methodDetails.responses[key];
                                    break;
                                }
                            }
                        }
                    }

                    const responseTypes = [];

                    if (methodSuccessResponse && methodErrorResponse) {
                        responseTypes.push(
                            `${namespace}ApiSpecs.${uppercaseFirstChar(methodDetails.operationId)}Response`,
                            `${namespace}ApiSpecs.${uppercaseFirstChar(methodDetails.operationId)}Error`,
                        );
                    } else if (methodErrorResponse) {
                        responseTypes.push(
                            'any',
                            `${namespace}ApiSpecs.${uppercaseFirstChar(methodDetails.operationId)}Error`,
                        );
                    } else if (methodSuccessResponse) {
                        responseTypes.push(
                            `${namespace}ApiSpecs.${uppercaseFirstChar(methodDetails.operationId)}Response`,
                            'any',
                        );
                    } else {
                        responseTypes.push(
                            'any',
                            'any',
                        );
                    }

                    properties.push({
                        name: methodDetails.operationId,
                        summary: methodDetails.summary
                            .replace(/[\r\n]/gm, "\n     ")
                            .replace(/[\r\n]\s+$/gm, "\n")
                            .replace(/\*\//g, '*\\/'),
                        description: methodDetails.description
                            .replace(/[\r\n]/gm, "\n     ")
                            .replace(/[\r\n]\s+$/gm, "\n")
                            .replace(/\*\//g, '*\\/'),
                        path: methodPath,
                        method: method,
                        parameters: pathParams,
                        query,
                        requestBody: methodRequestBody,
                        response: methodSuccessResponse,
                        requestTypeName: `${namespace}ApiSpecs.${uppercaseFirstChar(methodDetails.operationId)}Data`,
                        responseTypeName: `${namespace}ApiSpecs.${uppercaseFirstChar(methodDetails.operationId)}Response`,
                        errorTypeName: `${namespace}ApiSpecs.${uppercaseFirstChar(methodDetails.operationId)}Error`,
                        responseTypes,
                    });
                });
            }
        }

        const apiTemplate = fs.readFileSync(path.join(basePath, 'templates/api.hbs'), 'utf8');

        fs.writeFileSync(
            path.join(apisPath, `${fileName}.api.ts`),
            Handlebars.compile(apiTemplate)({
                className: `${namespace}Api`,
                fileName,
                properties,
            }).replace(/\n\s+$/gm, ''),
        );
    }

    const indexTemplate = fs.readFileSync(path.join(basePath, 'templates/index.hbs'), 'utf8');

    fs.writeFileSync(
        path.join(basePath, 'src/index.ts'),
        Handlebars.compile(indexTemplate)({
            v2Apis,
            v3Apis,
        }),
    );
}

main();
