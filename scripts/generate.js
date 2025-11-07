const fs = require('fs');
const path = require('path');
const yaml = require('yaml');
const Handlebars = require('handlebars');
const handlebarsHelper = require('handlebars-helpers');
const { createClient } = require('@hey-api/openapi-ts');
const util = require('util');
const _ = require('lodash');

const defaultEndpoint = 'https://api.bigcommerce.com/stores/{store_hash}/v3';

const validHttpMethods = [
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

        const results = await createClient({
            client: '@hey-api/client-fetch',
            input: file,
            output: {
                path: generatedOutput,
                clean: true,
                importFileExtension: '.ts',
            },
            plugins: [
                {
                    name: '@hey-api/typescript',
                    propertiesRequired: true,
                }
            ],
        });

        if (fileName === 'carts-v3') {
            // fs.writeFileSync(
            //     path.join(generatedOutput, 'index.log'),
            //     util.inspect(results[0].ir, { depth: 20 }),
            // );
            // process.exit(1);
        }

        if (fs.existsSync(path.join(generatedOutput, 'index.ts'))) {
            const indexContents = fs.readFileSync(path.join(generatedOutput, 'index.ts'), 'utf8');

            fs.writeFileSync(
                path.join(generatedOutput, 'index.ts'),
                indexContents
                    // .replace(/\.[jt]s(['"])/, '$1')
                    .replace(/export[^\n]+sdk.gen[^\n]+\n/, ''),
            );
        }

        // if (fs.existsSync(path.join(generatedOutput, 'sdk.gen.ts'))) {
        //     fs.rmSync(path.join(generatedOutput, 'sdk.gen.ts'));
        // }

        // generate api client

        const properties = [];

        results.forEach((result) => {
            if (typeof result !== 'object' || result === null) {
                return;
            }

            const specs = result.spec || {};
            const endpoint = specs.servers && specs.servers[0] && specs.servers[0].url
                ? result.spec.servers[0].url
                : defaultEndpoint;

            const generatedValues = [...result.gen.symbols.values.values()];

            const paths = result.ir.paths;
            for (const [path, pathDetails] of Object.entries(paths)) {
                for (const httpMethod of validHttpMethods) {
                    if (typeof pathDetails[httpMethod] !== 'object') {
                        continue;
                    }

                    const httpMethodDetails = pathDetails[httpMethod];

                    if (fileName === 'carts-v3') {
                        console.log(httpMethodDetails);
                    }

                    if (typeof httpMethodDetails.operationId !== 'string') {
                        continue;
                    }

                    const methodSpecs = specs.paths[path][httpMethod] || {};

                    const operationId = camelCase(httpMethodDetails.operationId);

                    console.log(`  - ${operationId}`);

                    let requestTypeName = '';
                    const successResponses = [];
                    const errorResponses = [];

                    generatedValues.forEach((generatedValue) => {
                        // if (fileName === 'checkouts-v3' && operationId === 'getChannelCheckoutSettings') {
                        //     console.log(generatedValue.name, generatedValue.selector, operationId);
                        // }

                        if (generatedValue.selector.map((v) => v.toLowerCase()).includes(operationId.toLowerCase())) {
                            if (generatedValue.selector.includes('data')) {
                                requestTypeName = generatedValue.name;
                            }

                            if (generatedValue.selector.includes('responses')) {
                                for (const [status, responseDetails] of Object.entries(methodSpecs.responses)) {
                                    const httpStatusCode = Number(status);
                                    if (httpStatusCode >= 200 && httpStatusCode < 300) {
                                        successResponses.push({
                                            type : `${generatedValue.name}[${httpStatusCode}]`,
                                            status: httpStatusCode,
                                        });
                                    }
                                }
                            }

                            if (generatedValue.selector.includes('errors')) {
                                for (const [status, responseDetails] of Object.entries(methodSpecs.responses)) {
                                    const httpStatusCode = Number(status);
                                    if (httpStatusCode >= 400) {
                                        errorResponses.push({
                                            type: `${generatedValue.name}[${httpStatusCode}]`,
                                            status: httpStatusCode,
                                        });
                                    }
                                }
                            }
                        }
                    });

                    const pathParams = [];
                    if (_.isObject(httpMethodDetails.parameters)
                        && _.isObject(httpMethodDetails.parameters.path)
                    ) {
                        for (const [pathParam, pathParamDetails] of Object.entries(httpMethodDetails.parameters.path)) {
                            if (pathParamDetails.schema.type === 'integer'
                                || pathParamDetails.schema.type === 'float'
                            ) {
                                pathParamDetails.schema.type = 'number';
                            }

                            pathParams.push({
                                ...pathParamDetails,
                                normalizedName: camelCase(pathParamDetails.name),
                                type: `${namespace}ApiSpecs.${requestTypeName}['path']['${pathParamDetails.name}']`,
                            });
                        }
                    }

                    const queries = [];
                    if (_.isObject(httpMethodDetails.parameters)
                        && _.isObject(httpMethodDetails.parameters.query)
                    ) {
                        for (const [query, queryDetails] of Object.entries(httpMethodDetails.parameters.query)) {
                            queries.push({
                                ...queryDetails,
                            });
                        }
                    }

                    let requestBody = null;
                    if (_.isObject(httpMethodDetails.body)) {
                        requestBody = {...httpMethodDetails.body};
                    }

                    // if (fileName === 'checkouts-v3' && operationId === 'getChannelCheckoutSettings') {
                    //     process.exit(1);
                    // }

                    let methodPath = `${endpoint}${path}`.replace(/^.+\/v(2|3)/, 'v$1');
                    if (pathParams.length > 0) {
                        methodPath = ('`' + methodPath.replace(/\{/g, '${') + '`')
                            .replace(/\{([^\}]+)\}/g, (_, p1) => {
                                const pathParam = camelCase(p1);

                                const match = pathParams.find((param) => param.normalizedName === pathParam);
                                if (!match) {
                                    pathParams.unshift({
                                        name: pathParam,
                                        normalizedName: pathParam,
                                        type: 'string',
                                    });
                                }

                                return `{${pathParam}}`;
                            });
                    } else {
                        methodPath = `'${methodPath}'`;
                    }

                    properties.push({
                        name: operationId,
                        summary: httpMethodDetails.summary
                            .replace(/[\r\n]/gm, "\n     ")
                            .replace(/[\r\n]\s+$/gm, "\n")
                            .replace(/\*\//g, '*\\/'),
                        description: httpMethodDetails.description
                            .replace(/[\r\n]/gm, "\n     ")
                            .replace(/[\r\n]\s+$/gm, "\n")
                            .replace(/\*\//g, '*\\/'),
                        path: methodPath,
                        method: httpMethod,
                        parameters: pathParams,
                        queries,
                        requestBody,
                        requestTypeName,
                        successResponses,
                        errorResponses,
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
        });

        // const specs = yaml.parse(fs.readFileSync(file, 'utf8'));
        // const paths = typeof specs.paths === 'object' ? specs.paths : {};

        // for (const path in paths) {
        //     if (Object.prototype.hasOwnProperty.call(paths, path)) {
        //         const pathDetails = paths[path];

        //         const pathParams = [];

        //         if (Array.isArray(pathDetails.parameters)) {
        //             pathDetails.parameters.forEach((parameter) => {
        //                 if (typeof parameter.name === 'string'
        //                     && typeof parameter.in === 'string'
        //                     && parameter.in === 'path'
        //                 ) {
        //                     pathParams.push({
        //                         ...parameter,
        //                         normalizedName: camelCase(parameter.name),
        //                     });
        //                 } else if (typeof parameter['$ref'] === 'string') {
        //                     const refPaths = parameter['$ref'].replace('#/', '').split('/');

        //                     let currentNode = specs;
        //                     while (refPaths.length > 0) {
        //                         const refPath = refPaths.shift();
        //                         currentNode = currentNode[refPath] || {};
        //                     }

        //                     if (typeof currentNode.name === 'string'
        //                         && typeof currentNode.in === 'string'
        //                         && currentNode.in === 'path'
        //                     ) {
        //                         pathParams.push({
        //                             ...currentNode,
        //                             normalizedName: camelCase(currentNode.name),
        //                             ref: parameter['$ref'].replace('#/', '').replace(/\/([^\/]+)/g, "['$1']"),
        //                         });
        //                     }
        //                 }
        //             });
        //         }

        //         validHttpMethods.forEach((method) => {
        //             if (typeof pathDetails[method] === 'undefined') {
        //                 return;
        //             }

        //             const httpMethodDetails = pathDetails[method];

        //             if (typeof httpMethodDetails.operationId !== 'string') {
        //                 return;
        //             }

        //             httpMethodDetails.operationId = camelCase(httpMethodDetails.operationId);

        //             let methodPath = `${endpoint}${path}`.replace(/^.+\/v(2|3)/, 'v$1');
        //             if (pathParams.length > 0) {
        //                 methodPath = ('`' + methodPath.replace(/\{/g, '${') + '`')
        //                     .replace(/\{([^\}]+)\}/g, (_, p1) => {
        //                         return `{${camelCase(p1)}}`;
        //                     });
        //             } else {
        //                 methodPath = `'${methodPath}'`;
        //             }

        //             const query = [];

        //             if (Array.isArray(httpMethodDetails.parameters)) {
        //                 httpMethodDetails.parameters.forEach((parameter) => {
        //                     if (typeof parameter['$ref'] === 'string') {
        //                         const refPaths = parameter['$ref'].replace('#/', '').split('/');

        //                         let currentNode = specs;
        //                         while (refPaths.length > 0) {
        //                             const refPath = refPaths.shift();
        //                             currentNode = currentNode[refPath] || {};
        //                         }

        //                         if (typeof currentNode.name === 'string'
        //                             && typeof currentNode.in === 'string'
        //                         ) {
        //                             if (currentNode.in === 'query') {
        //                                 query.push({
        //                                     ...currentNode,
        //                                     ref: parameter['$ref'].replace('#/', '').replace(/\/([^\/]+)/g, "['$1']"),
        //                                 });
        //                             }
        //                         }
        //                     } else if (typeof parameter.name === 'string'
        //                         && typeof parameter.in === 'string'
        //                     ) {
        //                         if (parameter.in === 'query') {
        //                             query.push(parameter);
        //                         }
        //                     }
        //                 });
        //             }

        //             let methodRequestBody = null;

        //             if (typeof httpMethodDetails.requestBody === 'object') {
        //                 const requestBody = httpMethodDetails.requestBody;
        //                 const requestBodyContent = requestBody.content || {};

        //                 const requestBodyParam = {
        //                     name: 'requestBody',
        //                     in: 'body',
        //                 };

        //                 for (let i = 0; i < contentTypes.length; i++) {
        //                     const contentType = contentTypes[i];

        //                     if (typeof requestBodyContent[contentType] === 'object') {
        //                         const requestBodyContentSchema = requestBodyContent[contentType].schema || {};

        //                         requestBodyParam.contentType = contentType;

        //                         if (typeof requestBodyContentSchema['$ref'] === 'string') {
        //                             requestBodyParam.ref = requestBodyContentSchema['$ref'].replace('#/', '').replace(/\/([^\/]+)/g, "['$1']");
        //                         }

        //                         break;
        //                     }
        //                 }

        //                 methodRequestBody = { ...requestBodyParam };
        //             }

        //             let methodSuccessResponse = null;
        //             let methodErrorResponse = null;

        //             if (typeof httpMethodDetails.responses === 'object') {
        //                 for (const key in httpMethodDetails.responses) {
        //                     if (Object.prototype.hasOwnProperty.call(httpMethodDetails.responses, key)) {
        //                         if (/^\d+$/.test(String(key))) {
        //                             if (methodSuccessResponse === null && Number(key) >= 200 && Number(key) < 300) {
        //                                 if (typeof httpMethodDetails.responses[key] === 'object') {
        //                                     if (typeof httpMethodDetails.responses[key].content === 'object'
        //                                         && typeof httpMethodDetails.responses[key].content['application/json'] === 'object') {
        //                                         methodSuccessResponse = httpMethodDetails.responses[key].content['application/json'];
        //                                     } else if (typeof httpMethodDetails.responses[key].$ref === 'string') {
        //                                     }
        //                                 }
        //                             }

        //                             if (methodErrorResponse === null && Number(key) >= 400) {
        //                                 methodErrorResponse = httpMethodDetails.responses[key];
        //                             }
        //                         }
        //                     }

        //                     if (methodSuccessResponse !== null && methodErrorResponse !== null) {
        //                         break;
        //                     }
        //                 }
        //             }

        //             const responseTypes = [];

        //             if (methodSuccessResponse && methodErrorResponse) {
        //                 responseTypes.push(
        //                     `${namespace}ApiSpecs.${uppercaseFirstChar(httpMethodDetails.operationId)}Response`,
        //                     `${namespace}ApiSpecs.${uppercaseFirstChar(httpMethodDetails.operationId)}Error`,
        //                 );
        //             } else if (methodErrorResponse) {
        //                 responseTypes.push(
        //                     'any',
        //                     `${namespace}ApiSpecs.${uppercaseFirstChar(httpMethodDetails.operationId)}Error`,
        //                 );
        //             } else if (methodSuccessResponse) {
        //                 responseTypes.push(
        //                     `${namespace}ApiSpecs.${uppercaseFirstChar(httpMethodDetails.operationId)}Response`,
        //                     'any',
        //                 );
        //             } else {
        //                 responseTypes.push(
        //                     'any',
        //                     'any',
        //                 );
        //             }

        //             if (httpMethodDetails.operationId === 'createCart') {
        //                 console.log(httpMethodDetails, methodSuccessResponse, methodErrorResponse, responseTypes);
        //                 process.exit(1);
        //             }

        //             properties.push({
        //                 name: httpMethodDetails.operationId,
        //                 summary: httpMethodDetails.summary
        //                     .replace(/[\r\n]/gm, "\n     ")
        //                     .replace(/[\r\n]\s+$/gm, "\n")
        //                     .replace(/\*\//g, '*\\/'),
        //                 description: httpMethodDetails.description
        //                     .replace(/[\r\n]/gm, "\n     ")
        //                     .replace(/[\r\n]\s+$/gm, "\n")
        //                     .replace(/\*\//g, '*\\/'),
        //                 path: methodPath,
        //                 method: method,
        //                 parameters: pathParams,
        //                 query,
        //                 requestBody: methodRequestBody,
        //                 response: methodSuccessResponse,
        //                 requestTypeName: `${namespace}ApiSpecs.${uppercaseFirstChar(httpMethodDetails.operationId)}Data`,
        //                 responseTypeName: `${namespace}ApiSpecs.${uppercaseFirstChar(httpMethodDetails.operationId)}Response`,
        //                 errorTypeName: `${namespace}ApiSpecs.${uppercaseFirstChar(httpMethodDetails.operationId)}Error`,
        //                 responseTypes,
        //             });
        //         });
        //     }
        // }

        // const apiTemplate = fs.readFileSync(path.join(basePath, 'templates/api.hbs'), 'utf8');

        // fs.writeFileSync(
        //     path.join(apisPath, `${fileName}.api.ts`),
        //     Handlebars.compile(apiTemplate)({
        //         className: `${namespace}Api`,
        //         fileName,
        //         properties,
        //     }).replace(/\n\s+$/gm, ''),
        // );
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
