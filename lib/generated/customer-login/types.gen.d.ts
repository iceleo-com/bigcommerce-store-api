export type customerLoginSSO = {
    iss?: string;
    iat?: number;
    jti?: string;
    operation?: string;
    store_hash?: string;
    customer_id?: number;
    redirect_to?: string;
    request_ip?: string;
};
export type GetCustomerLoginData = {
    path: {
        jwt_token: string;
    };
};
export type GetCustomerLoginResponse = ({
    [key: string]: unknown;
});
export type GetCustomerLoginError = unknown;
