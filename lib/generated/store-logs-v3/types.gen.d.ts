export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type IndexMeta = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            previous?: string;
            current?: string;
            next?: string;
        };
    };
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DetailedErrors = {
    [key: string]: string;
};
export type SystemLog = {
    id?: number;
    type?: string;
    module?: string;
    severity?: string;
    summary?: string;
    message?: string;
    date_created?: string;
};
export type GetSitesData = {
    body?: never;
    path?: never;
    query?: {
        limit?: number;
        page?: number;
        type?: 'general' | 'payment' | 'shipping' | 'tax' | 'notification' | 'emailintegration' | 'ordersettings' | 'design';
        'type:not'?: string;
        module?: 'export+only' | 'email+message' | 'theme+download' | 'order+status' | 'optimized+checkout';
        'module:not'?: string;
        severity?: 1 | 2 | 3 | 4;
        'severity:min'?: number;
        'severity:max'?: number;
        'id:in'?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
    };
    url: '/store/systemlogs';
};
export type GetSitesResponses = {
    200: {
        data?: Array<SystemLog>;
        meta?: IndexMeta;
    };
};
export type GetSitesResponse = GetSitesResponses[keyof GetSitesResponses];
