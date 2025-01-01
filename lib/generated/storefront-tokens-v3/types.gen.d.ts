export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
};
export type Channel = {
    channel_id: number;
};
export type Channels = {
    channel_ids: Array<(number)>;
};
export type DetailedErrors = {
    [key: string]: (string);
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type Token_Base = {
    token?: string;
};
export type Token_Full = {
    data?: Token_Base;
    meta?: {
        [key: string]: unknown;
    };
};
export type TokenPostImpersonation = {
    expires_at: number;
} & (Channels | Channel);
export type TokenPostSimple = {
    allowed_cors_origins?: Array<(string)>;
};
export type CreateTokenData = {
    body?: (TokenPostSimple & TokenPostImpersonation);
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateTokenResponse = (Token_Full);
export type CreateTokenError = (unknown);
export type RevokeTokenData = {
    headers: {
        Accept: string;
        'Sf-Api-Token': string;
    };
};
export type RevokeTokenResponse = (unknown);
export type RevokeTokenError = (unknown);
export type CreateTokenWithCustomerImpersonationData = {
    body?: TokenPostImpersonation;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateTokenWithCustomerImpersonationResponse = (Token_Full);
export type CreateTokenWithCustomerImpersonationError = (unknown);
