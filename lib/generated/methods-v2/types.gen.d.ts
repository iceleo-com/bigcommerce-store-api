export type ParameterAccept = string;
export type ParameterLimitQuery = number;
export type ParameterPageQuery = number;
export type payment_Base = {
    code?: string;
    name?: string;
    test_mode?: boolean;
};
export type GetAllPaymentMethodsData = {
    headers: {
        Accept: string;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetAllPaymentMethodsResponse = (Array<payment_Base>);
export type GetAllPaymentMethodsError = unknown;
