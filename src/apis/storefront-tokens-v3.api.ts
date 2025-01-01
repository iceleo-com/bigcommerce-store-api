import RequestService from '../helpers/request/request-service';
import * as StorefrontTokensV3ApiSpecs from '../generated/storefront-tokens-v3';

export default class StorefrontTokensV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Create a Token
     *
     * Creates a Storefront API token.

     **Required Scopes**
     * `Manage` `Storefront API Tokens`
     */
    createToken(
        requestBody: StorefrontTokensV3ApiSpecs.CreateTokenData['body'],
    ) {
        return this.request.post<StorefrontTokensV3ApiSpecs.CreateTokenResponse, StorefrontTokensV3ApiSpecs.CreateTokenError>({
            path: 'v3/storefront/api-token',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Revoke a Token
     *
     * Revoke access for a Storefront API token. Only revoke compromised tokens under emergency situations. Let uncompromised short-lived tokens expire naturally, as you do not need to revoke these.
     */
    revokeToken(
    ) {
        return this.request.delete<any, StorefrontTokensV3ApiSpecs.RevokeTokenError>({
            path: 'v3/storefront/api-token',
        });
    }

    /**
     * Create a Token
     *
     * Returns a Storefront API token that allows your application to impersonate customers when making GraphQL `POST` requests. For more information on how to use the returned token, see [customer impersonation tokens](/docs/rest-authentication/tokens/customer-impersonation-token#create-a-token).

     **Required Scopes**
     * `Manage` `Storefront API Customer Impersonation Tokens`
     */
    createTokenWithCustomerImpersonation(
        requestBody: StorefrontTokensV3ApiSpecs.CreateTokenWithCustomerImpersonationData['body'],
    ) {
        return this.request.post<StorefrontTokensV3ApiSpecs.CreateTokenWithCustomerImpersonationResponse, StorefrontTokensV3ApiSpecs.CreateTokenWithCustomerImpersonationError>({
            path: 'v3/storefront/api-token-customer-impersonation',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
