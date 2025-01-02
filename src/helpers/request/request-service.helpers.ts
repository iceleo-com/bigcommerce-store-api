import { RequestBody, RequestContentType } from './request-service.types';

export function parseBody(body: RequestBody, contentType: RequestContentType): FormData | URLSearchParams | string | undefined {
    if (body instanceof FormData) {
        return body;
    }

    if (contentType === 'application/json') {
        return JSON.stringify(body);
    }

    if (contentType === 'application/x-www-form-urlencoded') {
        return new URLSearchParams(body as Record<string, any>);
    }

    return undefined;
}

export function buildPath(path: string, query?: Record<string, any> | URLSearchParams | string) {
    let normalizedQuery = '';

    if (query instanceof URLSearchParams) {
        normalizedQuery = query.toString();
    } else if (typeof query === 'object') {
        normalizedQuery = new URLSearchParams(query).toString();
    } else if (typeof query === 'string' && query) {
        normalizedQuery = query;
    }

    const queryString = normalizedQuery ? `?${normalizedQuery}` : '';

    return `${path.replace(/^[\s\/]+/, '')}${queryString}`;
}
