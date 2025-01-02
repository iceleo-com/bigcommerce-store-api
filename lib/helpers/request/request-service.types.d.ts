export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH' | 'TRACE';
export type RequestContentType = 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data';
export type RequestBody = FormData | Record<string, any> | string | undefined;
export type RequestQuery = Record<string, any> | URLSearchParams | string | undefined;
type RequiredFields<T> = T extends Record<string, any>[] ? Required<T[number]>[] : Required<T>;
export interface BigCommerceApiSuccessResponse {
    data?: any;
    meta?: any;
}
export type RequestOptions = {
    path: string;
    contentType?: RequestContentType;
    body?: RequestBody;
    query?: RequestQuery;
};
export type RequestSuccessResponse<T> = {
    status: 'success';
    http_status: number;
    data: T extends BigCommerceApiSuccessResponse ? RequiredFields<T['data']> : RequiredFields<T>;
    meta?: T extends BigCommerceApiSuccessResponse ? T['meta'] : any;
};
export type RequestErrorResponse<T> = {
    status: 'error';
    http_status: number;
    errors: T;
};
export type RequestResponse<T_Success, T_Error> = RequestSuccessResponse<T_Success> | RequestErrorResponse<T_Error>;
export {};
