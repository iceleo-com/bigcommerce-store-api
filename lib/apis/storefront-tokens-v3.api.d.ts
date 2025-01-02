import RequestService from '../helpers/request/request-service';
import * as StorefrontTokensV3ApiSpecs from '../generated/storefront-tokens-v3';
export default class StorefrontTokensV3Api {
    private readonly request;
    constructor(request: RequestService);
    createToken(requestBody: StorefrontTokensV3ApiSpecs.CreateTokenData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<StorefrontTokensV3ApiSpecs.Token_Full, unknown>>;
    revokeToken(): Promise<import("../helpers/request/request-service.types").RequestResponse<any, unknown>>;
    createTokenWithCustomerImpersonation(requestBody: StorefrontTokensV3ApiSpecs.CreateTokenWithCustomerImpersonationData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<StorefrontTokensV3ApiSpecs.Token_Full, unknown>>;
}
