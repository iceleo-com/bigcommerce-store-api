export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH' | 'TRACE';
export type RequestContentType = 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data';
export type RequestBody = FormData | Record<string, any> | string | undefined;
export type RequestQuery = Record<string, any> | URLSearchParams | string | undefined;
export type ResponseHeaders = Record<string, string | string[] | undefined>;

type RequiredFields<T> = T extends void
    ? T :
    T extends Array<Record<PropertyKey, any>>
        ? Array<Required<{ [K in keyof T[number]]: T[number][K] }>>
        : T extends Record<PropertyKey, any>
            ? Required<{ [K in keyof T]: T[K] }>
            : T;

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

export type RequestSuccessResponse<T_Status extends number, T_Data> = {
    status: 'success';
    http_status: T_Status;
    data: T_Data extends BigCommerceApiSuccessResponse ? RequiredFields<T_Data['data']> : RequiredFields<T_Data>;
    meta?: T_Data extends BigCommerceApiSuccessResponse ? T_Data['meta'] : any;
    /** response headers, for debugging */
    headers: ResponseHeaders;
    /** raw response body, for debugging */
    response_text: string;
};

export type RequestErrorResponse<T_Status extends number, T_Errors> = {
    status: 'error';
    http_status: T_Status;
    errors: T_Errors;
    /** response headers, for debugging */
    headers: ResponseHeaders;
    /** raw response body, for debugging */
    response_text: string;
};
