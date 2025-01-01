export type Order = {
    id: number;
    is_recurring?: boolean;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type CreatePaymentAccessTokenData = {
    body: {
        order: Order;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreatePaymentAccessTokenResponse = ({
    data?: {
        id: string;
    };
    meta?: {
        [key: string]: unknown;
    };
});
export type CreatePaymentAccessTokenError = ({
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: {
        [key: string]: (string);
    };
});
