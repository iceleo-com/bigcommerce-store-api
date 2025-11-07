import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as AccessTokensV3ApiSpecs from '../generated/access-tokens-v3';
export * as AccessTokensV3ApiSpecs from '../generated/access-tokens-v3';

export class AccessTokensV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Create Payment Access Token
     *
     * Use this endpoint to create a payment access token. A payment access token is required to process payments with the BigCommerce API.

     **Required Fields**
     * order_id
     */
    createPaymentAccessToken(
        requestBody: AccessTokensV3ApiSpecs.CreatePaymentAccessTokenData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenResponses[201]>>,(RequestErrorResponse<400, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenErrors[400]>> | RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenErrors[401]>> | RequestErrorResponse<404, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenErrors[404]>> | RequestErrorResponse<409, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenErrors[409]>> | RequestErrorResponse<422, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenErrors[422]>>)>({
            path: 'v3/payments/access_tokens',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
