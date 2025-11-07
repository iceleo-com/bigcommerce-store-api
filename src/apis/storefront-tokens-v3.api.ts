import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StorefrontTokensV3ApiSpecs from '../generated/storefront-tokens-v3';
export * as StorefrontTokensV3ApiSpecs from '../generated/storefront-tokens-v3';

export class StorefrontTokensV3Api {
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

     > NOTE: While neither `channel_id` nor `channel_ids` is labelled as required, one must be included in the request body. Including neither will throw an error, and including both will result in unexpected behaviors.
     */
    createToken(
        requestBody: StorefrontTokensV3ApiSpecs.CreateTokenData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.CreateTokenResponses[200]>>,(RequestErrorResponse<401, Required<StorefrontTokensV3ApiSpecs.CreateTokenErrors[401]>> | RequestErrorResponse<403, Required<StorefrontTokensV3ApiSpecs.CreateTokenErrors[403]>> | RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.CreateTokenErrors[422]>>)>({
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
        return this.request.delete<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.RevokeTokenResponses[200]>>,(RequestErrorResponse<401, Required<StorefrontTokensV3ApiSpecs.RevokeTokenErrors[401]>> | RequestErrorResponse<403, Required<StorefrontTokensV3ApiSpecs.RevokeTokenErrors[403]>> | RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.RevokeTokenErrors[422]>>)>({
            path: 'v3/storefront/api-token',
        });
    }

    /**
     * Create a Token
     *
     * Returns a Storefront API token that allows your application to impersonate customers when making GraphQL `POST` requests. For more information on how to use the returned token, see [customer impersonation tokens](/docs/rest-authentication/tokens/customer-impersonation-token#create-a-token).

     **Required Scopes**
     * `Manage` `Storefront API Customer Impersonation Tokens`

     > NOTE: While neither `channel_id` nor `channel_ids` is labelled as required, one must be included in the request body. Including neither will throw an error, and including both will result in unexpected behaviors.
     */
    createTokenWithCustomerImpersonation(
        requestBody: StorefrontTokensV3ApiSpecs.CreateTokenWithCustomerImpersonationData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.CreateTokenWithCustomerImpersonationResponses[200]>>,(RequestErrorResponse<401, Required<StorefrontTokensV3ApiSpecs.CreateTokenWithCustomerImpersonationErrors[401]>> | RequestErrorResponse<403, Required<StorefrontTokensV3ApiSpecs.CreateTokenWithCustomerImpersonationErrors[403]>> | RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.CreateTokenWithCustomerImpersonationErrors[422]>>)>({
            path: 'v3/storefront/api-token-customer-impersonation',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
