import RequestService from '../helpers/request/request-service';
import * as AccessTokensV3ApiSpecs from '../generated/access-tokens-v3';
export * as AccessTokensV3ApiSpecs from '../generated/access-tokens-v3';
export declare class AccessTokensV3Api {
    private readonly request;
    constructor(request: RequestService);
    createPaymentAccessToken(requestBody: AccessTokensV3ApiSpecs.CreatePaymentAccessTokenData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, AccessTokensV3ApiSpecs.CreatePaymentAccessTokenError>>;
}
