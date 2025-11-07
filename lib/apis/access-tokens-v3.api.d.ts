import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as AccessTokensV3ApiSpecs from '../generated/access-tokens-v3';
export * as AccessTokensV3ApiSpecs from '../generated/access-tokens-v3';
export declare class AccessTokensV3Api {
    private readonly request;
    constructor(request: RequestService);
    createPaymentAccessToken(requestBody: AccessTokensV3ApiSpecs.CreatePaymentAccessTokenData['body']): Promise<RequestSuccessResponse<201, Required<{
        data?: {
            id: string;
        };
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<400, Required<{
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    }>> | RequestErrorResponse<401, Required<{
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    }>> | RequestErrorResponse<404, Required<{
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    }>> | RequestErrorResponse<409, Required<{
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    }>> | RequestErrorResponse<422, Required<{
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    }>>>;
}
