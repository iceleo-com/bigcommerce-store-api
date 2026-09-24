import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StorefrontTokensV3ApiSpecs from '../generated/storefront-tokens-v3';
export * as StorefrontTokensV3ApiSpecs from '../generated/storefront-tokens-v3';
export declare class StorefrontTokensV3Api {
    private readonly request;
    constructor(request: RequestService);
    createToken(requestBody: StorefrontTokensV3ApiSpecs.CreateTokenData['body']): Promise<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.TokenFull>> | RequestErrorResponse<401, Required<unknown>> | RequestErrorResponse<403, Required<unknown>> | RequestErrorResponse<422, Required<unknown>>>;
    revokeToken(): Promise<RequestSuccessResponse<200, Required<unknown>> | RequestErrorResponse<401, Required<unknown>> | RequestErrorResponse<403, Required<unknown>> | RequestErrorResponse<422, Required<unknown>>>;
    createTokenWithCustomerImpersonation(requestBody: StorefrontTokensV3ApiSpecs.CreateTokenWithCustomerImpersonationData['body']): Promise<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.TokenFull>> | RequestErrorResponse<401, Required<unknown>> | RequestErrorResponse<403, Required<unknown>> | RequestErrorResponse<422, Required<unknown>>>;
}
