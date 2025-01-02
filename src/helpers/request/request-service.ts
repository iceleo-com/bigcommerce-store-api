import { BigCommerceStoreApiConfig } from '../../index.types';
import {
    RequestMethod,
    RequestOptions,
    RequestResponse,
} from './request-service.types';
import { buildPath, parseBody } from './request-service.helpers';

const apiEndpoint = 'https://api.bigcommerce.com/stores';

class RequestService {
    config: BigCommerceStoreApiConfig;

    constructor(config: BigCommerceStoreApiConfig) {
        this.config = config;
    }

    private async request<T_Success = any, T_Error = any>(
        method: RequestMethod,
        options: RequestOptions,
        // path: string,
        // method: RequestMethod,
        // contentType: RequestContentType,
        // body?: RequestBody,
    ): Promise<RequestResponse<T_Success, T_Error>> {
        const {
            path,
            contentType,
            body,
            query,
        } = options;

        // build the full URL
        const normalizedPath = buildPath(path, query);
        const url = `${apiEndpoint}/${this.config.storeHash}/${normalizedPath}`;

        // set the headers
        const headers = {
            'X-Auth-Token': this.config.accessToken,
            'Accept': 'application/json',
        };

        if (!(body instanceof FormData) && contentType) {
            headers['Content-Type'] = contentType;
        }

        // make the request
        let responseError = '';

        const response = await fetch(url, {
            method,
            headers,
            body: parseBody(
                body,
                (contentType || 'application/json'),
            ),
        })
            .catch((error) => {
                responseError = error.message;
            });

        // handle the error
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
                } as any,
            }
        }

        // parse the response
        const responseBodyContents = await response.text();

        let result: any = {};

        if (responseBodyContents.trim() !== '') {
            try {
                result = JSON.parse(responseBodyContents);
            } catch (error) {
                console.error(error);
            }
        }

        if (response.status >= 400) {
            // handle the 4xx - 5xx error
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
    }

    get = <T_Success = any, T_Error = any>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'GET',
        options,
    );

    post = <T_Success = any, T_Error = any>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'POST',
        options,
    );

    put = <T_Success = any, T_Error = any>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'PUT',
        options,
    );

    delete = <T_Success = any, T_Error = any>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'DELETE',
        options,
    );

    options = <T_Success = any, T_Error = any>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'OPTIONS',
        options,
    );

    head = <T_Success = any, T_Error = any>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'HEAD',
        options,
    );

    patch = <T_Success = any, T_Error = any>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'PATCH',
        options,
    );

    trace = <T_Success = any, T_Error = any>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'TRACE',
        options,
    );
}

export default RequestService;
