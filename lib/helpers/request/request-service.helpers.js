"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBody = parseBody;
exports.buildPath = buildPath;
function parseBody(body, contentType) {
    if (body instanceof FormData) {
        return body;
    }
    if (contentType === 'application/json') {
        return JSON.stringify(body);
    }
    if (contentType === 'application/x-www-form-urlencoded') {
        return new URLSearchParams(body);
    }
    return undefined;
}
function buildPath(path, query) {
    let normalizedQuery = '';
    if (query instanceof URLSearchParams) {
        normalizedQuery = query.toString();
    }
    else if (typeof query === 'object') {
        normalizedQuery = new URLSearchParams(query).toString();
    }
    else if (typeof query === 'string' && query) {
        normalizedQuery = query;
    }
    const queryString = normalizedQuery ? `?${normalizedQuery}` : '';
    return `${path.replace(/^[\s\/]+/, '')}${queryString}`;
}
