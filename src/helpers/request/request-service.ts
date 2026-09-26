import axios, { AxiosResponseHeaders } from 'axios';
import { BigCommerceStoreApiConfig } from '../../index.types';
import {
    RequestErrorResponse,
    RequestMethod,
    RequestOptions,
    RequestSuccessResponse,
    ResponseHeaders,
} from './request-service.types';
import { buildPath, isFormData, parseBody } from './request-service.helpers';

const apiHost = 'api.bigcommerce.com';
const apiEndpoint = `https://${apiHost}/stores`;

// strip the scheme and trailing slashes, so `https://example.com/` works as a domain too
function normalizeDomain(domain?: string) {
    return (domain || '').replace(/^https?:\/\//i, '').replace(/\/+$/, '');
}

class RequestService {
    config: BigCommerceStoreApiConfig;

    constructor(config: BigCommerceStoreApiConfig) {
        this.config = config;
    }

    // relative paths go to the API gateway, absolute URLs (payments, storefront, provider apps) are used as they are
    private resolveUrl(normalizedPath: string): string {
        if (!/^https?:\/\//i.test(normalizedPath)) {
            return `${apiEndpoint}/${this.config.storeHash}/${normalizedPath}`;
        }

        const placeholders: Record<string, string> = {
            store_hash: this.config.storeHash,
            store_domain: normalizeDomain(this.config.storeDomain),
            app_domain: normalizeDomain(this.config.appDomain),
        };

        const url = normalizedPath.replace(/\{(\w+)\}/g, (match, name) => placeholders[name] || match);

        const unresolved = url.split('?')[0]!.match(/\{(\w+)\}/);
        if (unresolved) {
            throw new Error(`Cannot resolve {${unresolved[1]}} in ${normalizedPath}, check the client config`);
        }

        return url;
    }

    // the raw body is opt-in, it can be large and is only useful for debugging
    private responseText(responseText: string): { response_text?: string } {
        return this.config.includeResponseText ? { response_text: responseText } : {};
    }

    private async request<T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(
        method: RequestMethod,
        options: RequestOptions,
    ): Promise<T_Success | T_Error> {
        const {
            path,
            contentType,
            body,
            query,
        } = options;

        let responseHeaders: ResponseHeaders = {};
        let responseText = '';
        let statusCode: number;

        try {
            // build the full URL
            const url = this.resolveUrl(buildPath(path, query));

            // set the headers
            const headers: Record<string, string> = {
                'Accept': 'application/json',
            };

            // only send the access token to the API gateway, never to storefront or app domains
            if (new URL(url).host === apiHost) {
                headers['X-Auth-Token'] = this.config.accessToken;
            }

            const requestBody = parseBody(body, contentType || 'application/json');

            // axios sets the multipart boundary itself
            if (requestBody !== undefined && !isFormData(requestBody)) {
                headers['Content-Type'] = contentType || 'application/json';
            }

            // make the request
            const response = await axios.request<string>({
                url,
                method,
                headers,
                data: requestBody instanceof URLSearchParams ? requestBody.toString() : requestBody,
                // keep the raw body, it's parsed below
                responseType: 'text',
                transformResponse: [(data) => data],
                // error statuses are handled below, not thrown
                validateStatus: () => true,
                // don't forward the access token to wherever a redirect points
                maxRedirects: 0,
            });

            statusCode = response.status;
            // always an AxiosHeaders instance at runtime, the union type is for the browser adapter
            responseHeaders = (response.headers as AxiosResponseHeaders).toJSON() as ResponseHeaders;
            responseText = typeof response.data === 'string' ? response.data : '';
        } catch (error) {
            // network errors, unresolved URLs, interrupted responses
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
                ...this.responseText(responseText),
            } as T_Error;
        }

        // parse the response
        let result: any = {};
        let isJson = true;

        if (responseText.trim() !== '') {
            try {
                result = JSON.parse(responseText);
            } catch {
                isJson = false;
                result = responseText;
            }
        }

        const isObject = typeof result === 'object' && result !== null && !Array.isArray(result);

        if (statusCode >= 400) {
            // handle the 4xx - 5xx error
            return {
                status: 'error',
                http_status: statusCode,
                errors: isJson && result !== null && typeof result === 'object' ? result : {
                    status: statusCode,
                    title: responseText,
                    type: 'http_error',
                },
                headers: responseHeaders,
                ...this.responseText(responseText),
            } as T_Error;
        }

        return {
            status: 'success',
            http_status: statusCode,
            data: isObject && 'data' in result ? result.data : result,
            meta: isObject ? result.meta : undefined,
            headers: responseHeaders,
            ...this.responseText(responseText),
        } as T_Success;
    }

    get = <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'GET',
        options,
    );

    post = <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'POST',
        options,
    );

    put = <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'PUT',
        options,
    );

    delete = <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'DELETE',
        options,
    );

    options = <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'OPTIONS',
        options,
    );

    head = <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'HEAD',
        options,
    );

    patch = <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'PATCH',
        options,
    );

    trace = <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(
        options: RequestOptions,
    ) => this.request<T_Success, T_Error>(
        'TRACE',
        options,
    );
}

export default RequestService;
