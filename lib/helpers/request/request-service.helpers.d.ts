import { FormData } from 'undici';
import { RequestBody, RequestContentType, RequestQuery } from './request-service.types';
export declare function isFormData(value: unknown): value is FormData;
export declare function toSearchParams(values: Record<string, any>): URLSearchParams;
export declare function parseBody(body: RequestBody, contentType: RequestContentType): FormData | URLSearchParams | string | undefined;
export declare function buildPath(path: string, query?: RequestQuery): string;
