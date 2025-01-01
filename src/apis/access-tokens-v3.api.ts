import RequestService from '../helpers/request/request-service';
import * as AccessTokensV3ApiSpecs from '../generated/access-tokens-v3';

export default class AccessTokensV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Create Payment Access Token
     *
     * Use this endpoint to create a payment access token. A payment access token is required to process payments with the BigCommerce API.

     You can also generate a payment access token during checkout by using the `completeCheckout` mutation in the [GraphQL Storefront API](/docs/storefront/cart-checkout/guide/graphql-storefront#handling-payments).

     After the token is created, use the token to [Process a payment](/docs/rest-payments/processing#process-payment). The token is valid for one hour.

     **Required Fields**
     * order_id
     */
    createPaymentAccessToken(
        requestBody: AccessTokensV3ApiSpecs.CreatePaymentAccessTokenData['body'],
    ) {
        return this.request.post<any, AccessTokensV3ApiSpecs.CreatePaymentAccessTokenError>({
            path: 'v3/payments/access_tokens',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
