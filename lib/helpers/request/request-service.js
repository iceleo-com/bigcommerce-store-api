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
const request_service_helpers_1 = require("./request-service.helpers");
const apiEndpoint = 'https://api.bigcommerce.com/stores';
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
    request(method, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { path, contentType, body, query, } = options;
            const normalizedPath = (0, request_service_helpers_1.buildPath)(path, query);
            const url = `${apiEndpoint}/${this.config.storeHash}/${normalizedPath}`;
            const headers = {
                'X-Auth-Token': this.config.accessToken,
                'Accept': 'application/json',
            };
            if (!(body instanceof FormData) && contentType) {
                headers['Content-Type'] = contentType;
            }
            let responseError = '';
            const response = yield fetch(url, {
                method,
                headers,
                body: (0, request_service_helpers_1.parseBody)(body, (contentType || 'application/json')),
            })
                .catch((error) => {
                responseError = error.message;
            });
            if (!response) {
                return {
                    status: 'error',
                    http_status: 500,
                    errors: {
                        status: 500,
                        title: 'Internal Server Error',
                        type: 'internal_server_error',
                        errors: {
                            message: responseError,
                        },
                    },
                };
            }
            const responseBodyContents = yield response.text();
            let result = {};
            if (responseBodyContents.trim() !== '') {
                try {
                    result = JSON.parse(responseBodyContents);
                }
                catch (error) {
                    console.error(error);
                }
            }
            if (response.status >= 400) {
                return {
                    status: 'error',
                    http_status: response.status,
                    errors: typeof result === 'object' && result !== null ? result : {
                        status: response.status,
                        title: responseBodyContents,
                        type: 'internal_server_error',
                    },
                };
            }
            return {
                status: 'success',
                http_status: response.status,
                data: result.data ? result.data : result,
                meta: result.meta,
            };
        });
    }
}
exports.default = RequestService;
