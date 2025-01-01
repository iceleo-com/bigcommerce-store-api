import { RequestBody, RequestContentType } from './request-service.type';
export declare function parseBody(body: RequestBody, contentType: RequestContentType): FormData | URLSearchParams | string | undefined;
export declare function buildPath(path: string, query?: Record<string, any> | URLSearchParams | string): string;
