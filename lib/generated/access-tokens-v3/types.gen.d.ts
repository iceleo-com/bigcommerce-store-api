export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type Order = {
    id: number;
    is_recurring?: boolean;
};
export type Accept = string;
export type ContentType = string;
export type PaymentsAccessTokensPostData = {
    body: {
        order: Order;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/payments/access_tokens';
};
export type PaymentsAccessTokensPostErrors = {
    400: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
    401: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
    404: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
    409: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
    422: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
    default: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
};
export type PaymentsAccessTokensPostError = PaymentsAccessTokensPostErrors[keyof PaymentsAccessTokensPostErrors];
export type PaymentsAccessTokensPostResponses = {
    201: {
        data?: {
            id: string;
        };
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type PaymentsAccessTokensPostResponse = PaymentsAccessTokensPostResponses[keyof PaymentsAccessTokensPostResponses];
