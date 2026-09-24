export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2' | (string & {});
};
export type PaymentBase = {
    code?: string;
    name?: string;
    test_mode?: boolean;
};
export type Accept = string;
export type GetAllPaymentMethodsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/payments/methods';
};
export type GetAllPaymentMethodsResponses = {
    200: Array<PaymentBase>;
};
export type GetAllPaymentMethodsResponse = GetAllPaymentMethodsResponses[keyof GetAllPaymentMethodsResponses];
