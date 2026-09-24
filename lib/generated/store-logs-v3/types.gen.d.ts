export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type StoreSystemlogsGetParametersType = 'general' | 'payment' | 'shipping' | 'tax' | 'notification' | 'emailintegration' | 'ordersettings' | 'design';
export type StoreSystemlogsGetParametersModule = 'export+only' | 'email+message' | 'theme+download' | 'order+status' | 'optimized+checkout';
export type StoreSystemlogsGetParametersSeverity = '1' | '2' | '3' | '4';
export type StoreSystemlogsGetParametersSort = 'date_created' | 'type';
export type StoreSystemlogsGetParametersDirection = 'asc' | 'desc';
export type SystemLog = {
    id?: number;
    type?: string;
    module?: string;
    severity?: string;
    summary?: string;
    message?: string;
    date_created?: string;
};
export type IndexMetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type IndexMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: IndexMetaPaginationLinks;
};
export type IndexMeta = {
    pagination?: IndexMetaPagination;
};
export type SystemLogsGetStoreSystemLogsResponse200 = {
    data?: Array<SystemLog>;
    meta?: IndexMeta;
};
export type GetStoreSystemLogsData = {
    body?: never;
    path?: never;
    query?: {
        limit?: number;
        page?: number;
        type?: StoreSystemlogsGetParametersType;
        'type:not'?: string;
        module?: StoreSystemlogsGetParametersModule;
        'module:not'?: string;
        severity?: StoreSystemlogsGetParametersSeverity;
        'severity:min'?: number;
        'severity:max'?: number;
        'id:in'?: Array<number>;
        sort?: StoreSystemlogsGetParametersSort;
        direction?: StoreSystemlogsGetParametersDirection;
    };
    url: '/store/systemlogs';
};
export type GetStoreSystemLogsResponses = {
    200: SystemLogsGetStoreSystemLogsResponse200;
};
export type GetStoreSystemLogsResponse = GetStoreSystemLogsResponses[keyof GetStoreSystemLogsResponses];
