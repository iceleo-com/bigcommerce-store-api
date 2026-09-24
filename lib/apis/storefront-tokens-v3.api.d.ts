import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StorefrontTokensV3ApiSpecs from '../generated/storefront-tokens-v3';
export * as StorefrontTokensV3ApiSpecs from '../generated/storefront-tokens-v3';
export declare class StorefrontTokensV3Api {
    private readonly request;
    constructor(request: RequestService);
    listTokens(query?: StorefrontTokensV3ApiSpecs.ListTokensData['query']): Promise<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.IssuedTokensResponse>> | RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.ErrorResponse>>>;
    createToken(requestBody: StorefrontTokensV3ApiSpecs.CreateTokenData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.TokenFull>>>;
    revokeToken(): Promise<RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.ApiTokenRevokeTokenResponse200>>>;
    revokeTokenByJti(jti: StorefrontTokensV3ApiSpecs.RevokeTokenByJtiData['path']['jti']): Promise<RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<400, Required<StorefrontTokensV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<404, Required<StorefrontTokensV3ApiSpecs.ErrorResponse>>>;
    revokeAllTokens(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    listCustomerImpersonationTokens(query?: StorefrontTokensV3ApiSpecs.ListCustomerImpersonationTokensData['query']): Promise<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.IssuedTokensResponse>> | RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.ErrorResponse>>>;
    createTokenWithCustomerImpersonation(requestBody: StorefrontTokensV3ApiSpecs.CreateTokenWithCustomerImpersonationData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.TokenFull>>>;
    revokeCustomerImpersonationTokenByJti(jti: StorefrontTokensV3ApiSpecs.RevokeCustomerImpersonationTokenByJtiData['path']['jti']): Promise<RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<400, Required<StorefrontTokensV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<404, Required<StorefrontTokensV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    revokeAllCustomerImpersonationTokens(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    listPrivateTokens(query?: StorefrontTokensV3ApiSpecs.ListPrivateTokensData['query']): Promise<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.IssuedTokensResponse>> | RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.ErrorResponse>>>;
    createPrivateToken(requestBody: StorefrontTokensV3ApiSpecs.CreatePrivateTokenData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.TokenFull>>>;
    revokePrivateTokenByJti(jti: StorefrontTokensV3ApiSpecs.RevokePrivateTokenByJtiData['path']['jti']): Promise<RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<400, Required<StorefrontTokensV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<404, Required<StorefrontTokensV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    revokeAllPrivateTokens(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
