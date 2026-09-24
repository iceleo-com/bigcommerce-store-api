"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const undici_1 = require("undici");
const request_service_helpers_1 = require("./request-service.helpers");
const apiHost = 'api.bigcommerce.com';
const apiEndpoint = `https://${apiHost}/stores`;
function normalizeDomain(domain) {
    return (domain || '').replace(/^https?:\/\//i, '').replace(/\/+$/, '');
}
class RequestService {
    constructor(config) {
        this.get = (options) => this.request('GET', options);
        this.post = (options) => this.request('POST', options);
        this.put = (options) => this.request('PUT', options);
        this.delete = (options) => this.request('DELETE', options);
        this.options = (options) => this.request('OPTIONS', options);
        this.head = (options) => this.request('HEAD', options);
        this.patch = (options) => this.request('PATCH', options);
        this.trace = (options) => this.request('TRACE', options);
        this.config = config;
    }
    resolveUrl(normalizedPath) {
        if (!/^https?:\/\//i.test(normalizedPath)) {
            return `${apiEndpoint}/${this.config.storeHash}/${normalizedPath}`;
        }
        const placeholders = {
            store_hash: this.config.storeHash,
            store_domain: normalizeDomain(this.config.storeDomain),
            app_domain: normalizeDomain(this.config.appDomain),
        };
        const url = normalizedPath.replace(/\{(\w+)\}/g, (match, name) => placeholders[name] || match);
        const unresolved = url.split('?')[0].match(/\{(\w+)\}/);
        if (unresolved) {
            throw new Error(`Cannot resolve {${unresolved[1]}} in ${normalizedPath}, check the client config`);
        }
        return url;
    }
    request(method, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { path, contentType, body, query, } = options;
            let responseHeaders = {};
            let responseText = '';
            let statusCode;
            try {
                const url = this.resolveUrl((0, request_service_helpers_1.buildPath)(path, query));
                const headers = {
                    'Accept': 'application/json',
                };
                if (new URL(url).host === apiHost) {
                    headers['X-Auth-Token'] = this.config.accessToken;
                }
                const requestBody = (0, request_service_helpers_1.parseBody)(body, contentType || 'application/json');
                if (requestBody !== undefined && !(0, request_service_helpers_1.isFormData)(requestBody)) {
                    headers['Content-Type'] = contentType || 'application/json';
                }
                const response = yield (0, undici_1.request)(url, {
                    method,
                    headers,
                    body: requestBody instanceof URLSearchParams ? requestBody.toString() : requestBody,
                });
                statusCode = response.statusCode;
                responseHeaders = response.headers;
                responseText = yield response.body.text();
            }
            catch (error) {
                return {
                    status: 'error',
                    http_status: 500,
                    errors: {
                        status: 500,
                        title: 'Internal Server Error',
                        type: 'internal_server_error',
                        errors: {
                            message: error instanceof Error ? error.message : String(error),
                        },
                    },
                    headers: responseHeaders,
                    response_text: responseText,
                };
            }
            let result = {};
            let isJson = true;
            if (responseText.trim() !== '') {
                try {
                    result = JSON.parse(responseText);
                }
                catch (_a) {
                    isJson = false;
                    result = responseText;
                }
            }
            const isObject = typeof result === 'object' && result !== null && !Array.isArray(result);
            if (statusCode >= 400) {
                return {
                    status: 'error',
                    http_status: statusCode,
                    errors: isJson && result !== null && typeof result === 'object' ? result : {
                        status: statusCode,
                        title: responseText,
                        type: 'http_error',
                    },
                    headers: responseHeaders,
                    response_text: responseText,
                };
            }
            return {
                status: 'success',
                http_status: statusCode,
                data: isObject && 'data' in result ? result.data : result,
                meta: isObject ? result.meta : undefined,
                headers: responseHeaders,
                response_text: responseText,
            };
        });
    }
}
exports.default = RequestService;
