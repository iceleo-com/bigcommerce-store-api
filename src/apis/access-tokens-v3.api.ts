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

     You can also generate a payment access token during checkout by using the `completeCheckout` mutation in the [GraphQL Storefront API](/docs/storefront/cart-checkout/guide/graphql-storefront#handling-payments).

     After the token is created, use the token to [Process a payment](/docs/rest-payments/processing#process-payment).

     **Required Fields**
     * order_id
     */
    paymentsAccessTokensPost(
        requestBody: AccessTokensV3ApiSpecs.PaymentsAccessTokensPostData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<AccessTokensV3ApiSpecs.PaymentsAccessTokensPostResponses[201]>>,(RequestErrorResponse<400, Required<AccessTokensV3ApiSpecs.PaymentsAccessTokensPostErrors[400]>> | RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.PaymentsAccessTokensPostErrors[401]>> | RequestErrorResponse<404, Required<AccessTokensV3ApiSpecs.PaymentsAccessTokensPostErrors[404]>> | RequestErrorResponse<409, Required<AccessTokensV3ApiSpecs.PaymentsAccessTokensPostErrors[409]>> | RequestErrorResponse<422, Required<AccessTokensV3ApiSpecs.PaymentsAccessTokensPostErrors[422]>>)>({
            path: 'v3/payments/access_tokens',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `paymentsAccessTokensPost` instead.
     */
    createPaymentAccessToken(...args: Parameters<AccessTokensV3Api['paymentsAccessTokensPost']>) {
        return this.paymentsAccessTokensPost(...args);
    }
}
