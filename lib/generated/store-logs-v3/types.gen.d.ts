export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DetailedErrors = {
    [key: string]: (string);
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
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
export type SystemLog = {
    id?: number;
    type?: string;
    module?: string;
    severity?: string;
    summary?: string;
    message?: string;
    date_created?: string;
};
export type GetStoreSystemLogsData = {
    query?: {
        'id:in'?: Array<(number)>;
        limit?: number;
        module?: 'export+only' | 'email+message' | 'theme+download' | 'order+status' | 'optimized+checkout';
        'module:not'?: string;
        page?: number;
        severity?: 1 | 2 | 3 | 4;
        'severity:max'?: number;
        'severity:min'?: number;
        type?: 'general' | 'payment' | 'shipping' | 'tax' | 'notification' | 'emailintegration' | 'ordersettings' | 'design';
        'type:not'?: string;
    };
};
export type GetStoreSystemLogsResponse = ({
    data?: Array<SystemLog>;
    meta?: IndexMeta;
});
export type GetStoreSystemLogsError = unknown;
