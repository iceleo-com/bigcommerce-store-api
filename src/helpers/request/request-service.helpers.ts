import { RequestBody, RequestContentType, RequestQuery } from './request-service.types';

// matches FormData from any realm or polyfill, not just the global one
export function isFormData(value: unknown): value is FormData {
    return typeof value === 'object'
        && value !== null
        && (value as any)[Symbol.toStringTag] === 'FormData';
}

function isBlob(value: unknown): value is Blob {
    return typeof value === 'object'
        && value !== null
        && ['Blob', 'File'].includes((value as any)[Symbol.toStringTag]);
}

// stringify a query / form value; BigCommerce expects comma separated lists (e.g. `id:in=1,2`)
function stringifyValue(value: any): string {
    if (Array.isArray(value)) {
        return value.map((item) => stringifyValue(item)).join(',');
    }

    if (value instanceof Date) {
        return value.toISOString();
    }

    if (typeof value === 'object' && value !== null) {
        return JSON.stringify(value);
    }

    return String(value);
}

// build URLSearchParams from an object, skipping undefined and null values
export function toSearchParams(values: Record<string, any>): URLSearchParams {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(values)) {
        if (value === undefined || value === null) {
            continue;
        }

        params.append(key, stringifyValue(value));
    }

    return params;
}

function toFormData(values: Record<string, any>): FormData {
    const formData = new FormData();

    for (const [key, value] of Object.entries(values)) {
        if (value === undefined || value === null) {
            continue;
        }

        const items = Array.isArray(value) && value.some((item) => isBlob(item)) ? value : [value];
        for (const item of items) {
            formData.append(key, isBlob(item) ? item : stringifyValue(item));
        }
    }

    return formData;
}

export function parseBody(body: RequestBody, contentType: RequestContentType): FormData | URLSearchParams | string | undefined {
    if (body === undefined || body === null) {
        return undefined;
    }

    if (isFormData(body)) {
        return body;
    }

    // already serialized by the caller
    if (typeof body === 'string') {
        return body;
    }

    if (contentType === 'multipart/form-data') {
        return toFormData(body);
    }

    if (contentType === 'application/x-www-form-urlencoded') {
        return toSearchParams(body);
    }

    return JSON.stringify(body);
}

export function buildPath(path: string, query?: RequestQuery) {
    let normalizedQuery = '';

    if (query instanceof URLSearchParams) {
        normalizedQuery = query.toString();
    } else if (typeof query === 'object' && query !== null) {
        normalizedQuery = toSearchParams(query).toString();
    } else if (typeof query === 'string' && query) {
        normalizedQuery = query.replace(/^\?/, '');
    }

    const queryString = normalizedQuery ? `?${normalizedQuery}` : '';

    return `${path.replace(/^[\s\/]+/, '')}${queryString}`;
}
