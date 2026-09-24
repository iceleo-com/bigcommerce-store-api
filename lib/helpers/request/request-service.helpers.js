"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFormData = isFormData;
exports.toSearchParams = toSearchParams;
exports.parseBody = parseBody;
exports.buildPath = buildPath;
const undici_1 = require("undici");
function isFormData(value) {
    return typeof value === 'object'
        && value !== null
        && value[Symbol.toStringTag] === 'FormData';
}
function isBlob(value) {
    return typeof value === 'object'
        && value !== null
        && ['Blob', 'File'].includes(value[Symbol.toStringTag]);
}
function stringifyValue(value) {
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
function toSearchParams(values) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(values)) {
        if (value === undefined || value === null) {
            continue;
        }
        params.append(key, stringifyValue(value));
    }
    return params;
}
function toFormData(values) {
    const formData = new undici_1.FormData();
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
function parseBody(body, contentType) {
    if (body === undefined || body === null) {
        return undefined;
    }
    if (body instanceof undici_1.FormData) {
        return body;
    }
    if (isFormData(body)) {
        const formData = new undici_1.FormData();
        for (const [key, value] of body.entries()) {
            formData.append(key, value);
        }
        return formData;
    }
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
function buildPath(path, query) {
    let normalizedQuery = '';
    if (query instanceof URLSearchParams) {
        normalizedQuery = query.toString();
    }
    else if (typeof query === 'object' && query !== null) {
        normalizedQuery = toSearchParams(query).toString();
    }
    else if (typeof query === 'string' && query) {
        normalizedQuery = query.replace(/^\?/, '');
    }
    const queryString = normalizedQuery ? `?${normalizedQuery}` : '';
    return `${path.replace(/^[\s\/]+/, '')}${queryString}`;
}
