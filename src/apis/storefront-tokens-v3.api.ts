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
     * List tokens
     *
     * Returns a paginated list of the storefront API tokens your API account has issued. The token's JWT string is never returned; each entry includes a `jti` identifier that you use to revoke the token, as well as `is_revoked` and `is_expired` flags. Revoked and expired tokens are included in the list.

     **Required Scopes**
     * `Manage` `Storefront API Tokens`

     > NOTE: This endpoint only returns tokens issued by the API account making the request, and only tokens of the family named in its path segment. Tokens issued by another API account are never returned. Customer impersonation tokens require the `Storefront API Customer Impersonation Tokens` scope and are never returned here.
     */
    listTokens(
        query?: StorefrontTokensV3ApiSpecs.ListTokensData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.ListTokensResponses[200]>>,RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.ListTokensErrors[422]>>>({
            path: 'v3/storefront/api-token',
            query,
        });
    }

    /**
     * Create a token
     *
     * Creates a Storefront API token. This endpoint creates storefront tokens that support CORS via `allowed_cors_origins` and are intended for browser-based applications.

     For server-to-server integrations, you must use the [private token endpoint](/developer/api-reference/rest/admin/authentication-apis/storefront-api-tokens/private-api-token/create-private-token) instead.

     **Required Scopes**
     * `Manage` `Storefront API Tokens`

     > NOTE: While neither `channel_id` nor `channel_ids` is labelled as required, one must be included in the request body. Including neither will throw an error, and including both will result in unexpected behaviors.
     */
    createToken(
        requestBody: StorefrontTokensV3ApiSpecs.CreateTokenData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.CreateTokenResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/storefront/api-token',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Revoke a token
     *
     * Revoke access for a storefront API token or a private API token. Only revoke compromised tokens under emergency situations. Let uncompromised short-lived tokens expire naturally, as you do not need to revoke these.
     */
    revokeToken(
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.RevokeTokenResponses[200]>>,RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.RevokeTokenErrors[422]>>>({
            path: 'v3/storefront/api-token',
        });
    }

    /**
     * Revoke a token by ID
     *
     * Revokes a single storefront API token identified by its `jti`. You do not need the token's JWT string to revoke it - only the `jti` returned by the [List tokens](#operation/listTokens) endpoint.

     You can only revoke tokens that your own API account issued through this token family. Supplying a `jti` issued by a different API account, or belonging to a different token family, returns `404 Not Found`.

     Each store can hold a limited number of revoked tokens that have not yet expired. Once that limit is reached, this endpoint returns `422 Unprocessable Entity` until some revoked tokens expire. The revoke-all endpoint is not subject to this limit.

     Revocation can take up to approximately 60 seconds to fully propagate because revoked identifiers are held in a short-lived cache, so a revoked token may briefly continue to authenticate.

     **Required Scopes**
     * `Manage` `Storefront API Tokens`
     */
    revokeTokenByJti(
        jti: StorefrontTokensV3ApiSpecs.RevokeTokenByJtiData['path']['jti'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<StorefrontTokensV3ApiSpecs.RevokeTokenByJtiResponses[204]>>,(RequestErrorResponse<400, Required<StorefrontTokensV3ApiSpecs.RevokeTokenByJtiErrors[400]>> | RequestErrorResponse<404, Required<StorefrontTokensV3ApiSpecs.RevokeTokenByJtiErrors[404]>> | RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.RevokeTokenByJtiErrors[422]>>)>({
            path: `v3/storefront/api-token/${jti}`,
        });
    }

    /**
     * Revoke all tokens
     *
     * Revokes every active storefront API token that your API account has issued. Only tokens issued by the API account making the request are revoked, and only tokens in this family (matching the path segment); tokens issued by another API account and tokens of other families are unaffected.

     Revocation can take up to approximately 60 seconds to fully propagate because revoked identifiers are held in a short-lived cache, so a revoked token may briefly continue to authenticate.

     **Required Scopes**
     * `Manage` `Storefront API Tokens`
     */
    revokeAllTokens(
    ) {
        return this.request.post<RequestSuccessResponse<204, Required<StorefrontTokensV3ApiSpecs.RevokeAllTokensResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/storefront/api-token/revoke-all',
        });
    }

    /**
     * List customer impersonation tokens
     *
     * Returns a paginated list of the customer impersonation tokens your API account has issued. The token's JWT string is never returned; each entry includes a `jti` identifier that you use to revoke the token, as well as `is_revoked` and `is_expired` flags. Revoked and expired tokens are included in the list.

     **Required Scopes**
     * `Manage` `Storefront API Customer Impersonation Tokens`

     > NOTE: This endpoint only returns customer impersonation tokens issued by the API account making the request. Tokens issued by another API account are never returned. Storefront and private tokens require the `Storefront API Tokens` scope and are never returned here.
     */
    listCustomerImpersonationTokens(
        query?: StorefrontTokensV3ApiSpecs.ListCustomerImpersonationTokensData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.ListCustomerImpersonationTokensResponses[200]>>,RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.ListCustomerImpersonationTokensErrors[422]>>>({
            path: 'v3/storefront/api-token-customer-impersonation',
            query,
        });
    }

    /**
     * Create a token
     *
     * Returns a Storefront API token that allows your application to impersonate customers when making GraphQL `POST` requests. For more information on how to use the returned token, see [customer impersonation tokens](/developer/docs/storefront/guides/graphql-storefront-api/authentication#customer-impersonation-tokens).

     **Required Scopes**
     * `Manage` `Storefront API Customer Impersonation Tokens`

     > NOTE: While neither `channel_id` nor `channel_ids` is labelled as required, one must be included in the request body. Including neither will throw an error, and including both will result in unexpected behaviors.
     */
    createTokenWithCustomerImpersonation(
        requestBody: StorefrontTokensV3ApiSpecs.CreateTokenWithCustomerImpersonationData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.CreateTokenWithCustomerImpersonationResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/storefront/api-token-customer-impersonation',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Revoke a customer impersonation token by ID
     *
     * Revokes a single customer impersonation token identified by its `jti`. You do not need the token's JWT string to revoke it - only the `jti` returned by the [List customer impersonation tokens](#operation/listCustomerImpersonationTokens) endpoint.

     You can only revoke tokens that your own API account issued through this token family. Supplying a `jti` issued by a different API account, or belonging to a different token family, returns `404 Not Found`.

     Each store can hold a limited number of revoked tokens that have not yet expired. Once that limit is reached, this endpoint returns `422 Unprocessable Entity` until some revoked tokens expire. The revoke-all endpoint is not subject to this limit.

     Revocation can take up to approximately 60 seconds to fully propagate because revoked identifiers are held in a short-lived cache, so a revoked token may briefly continue to authenticate.

     **Required Scopes**
     * `Manage` `Storefront API Customer Impersonation Tokens`
     */
    revokeCustomerImpersonationTokenByJti(
        jti: StorefrontTokensV3ApiSpecs.RevokeCustomerImpersonationTokenByJtiData['path']['jti'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<StorefrontTokensV3ApiSpecs.RevokeCustomerImpersonationTokenByJtiResponses[204]>>,(RequestErrorResponse<400, Required<StorefrontTokensV3ApiSpecs.RevokeCustomerImpersonationTokenByJtiErrors[400]>> | RequestErrorResponse<404, Required<StorefrontTokensV3ApiSpecs.RevokeCustomerImpersonationTokenByJtiErrors[404]>> | RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.RevokeCustomerImpersonationTokenByJtiErrors[422]>>)>({
            path: `v3/storefront/api-token-customer-impersonation/${jti}`,
        });
    }

    /**
     * Revoke all customer impersonation tokens
     *
     * Revokes every active customer impersonation token that your API account has issued. Only tokens issued by the API account making the request are revoked, and only tokens in this family (matching the path segment); tokens issued by another API account and tokens of other families are unaffected.

     Revocation can take up to approximately 60 seconds to fully propagate because revoked identifiers are held in a short-lived cache, so a revoked token may briefly continue to authenticate.

     **Required Scopes**
     * `Manage` `Storefront API Customer Impersonation Tokens`
     */
    revokeAllCustomerImpersonationTokens(
    ) {
        return this.request.post<RequestSuccessResponse<204, Required<StorefrontTokensV3ApiSpecs.RevokeAllCustomerImpersonationTokensResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/storefront/api-token-customer-impersonation/revoke-all',
        });
    }

    /**
     * List private tokens
     *
     * Returns a paginated list of the private API tokens your API account has issued. The token's JWT string is never returned; each entry includes a `jti` identifier that you use to revoke the token, as well as `is_revoked` and `is_expired` flags. Revoked and expired tokens are included in the list.

     **Required Scopes**
     * `Manage` `Storefront API Tokens`

     > NOTE: This endpoint only returns tokens issued by the API account making the request, and only tokens of the family named in its path segment. Tokens issued by another API account are never returned. Customer impersonation tokens require the `Storefront API Customer Impersonation Tokens` scope and are never returned here.
     */
    listPrivateTokens(
        query?: StorefrontTokensV3ApiSpecs.ListPrivateTokensData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.ListPrivateTokensResponses[200]>>,RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.ListPrivateTokensErrors[422]>>>({
            path: 'v3/storefront/api-token-private',
            query,
        });
    }

    /**
     * Create a private API token
     *
     * Creates a private token for server-to-server integrations. Private tokens are always stateless (no session required) and provide better performance for server-to-server use cases. The API will reject private token-authenticated requests that originate from web browsers.

     **Required Scopes**
     * `Manage` `Storefront API Tokens`

     > NOTE: While neither `channel_id` nor `channel_ids` is labelled as required, one must be included in the request body. Including neither will throw an error, and including both will result in unexpected behaviors.
     */
    createPrivateToken(
        requestBody: StorefrontTokensV3ApiSpecs.CreatePrivateTokenData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<StorefrontTokensV3ApiSpecs.CreatePrivateTokenResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/storefront/api-token-private',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Revoke a private token by ID
     *
     * Revokes a single private API token identified by its `jti`. You do not need the token's JWT string to revoke it - only the `jti` returned by the [List private tokens](#operation/listPrivateTokens) endpoint.

     You can only revoke tokens that your own API account issued through this token family. Supplying a `jti` issued by a different API account, or belonging to a different token family, returns `404 Not Found`.

     Each store can hold a limited number of revoked tokens that have not yet expired. Once that limit is reached, this endpoint returns `422 Unprocessable Entity` until some revoked tokens expire. The revoke-all endpoint is not subject to this limit.

     Revocation can take up to approximately 60 seconds to fully propagate because revoked identifiers are held in a short-lived cache, so a revoked token may briefly continue to authenticate.

     **Required Scopes**
     * `Manage` `Storefront API Tokens`
     */
    revokePrivateTokenByJti(
        jti: StorefrontTokensV3ApiSpecs.RevokePrivateTokenByJtiData['path']['jti'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<StorefrontTokensV3ApiSpecs.RevokePrivateTokenByJtiResponses[204]>>,(RequestErrorResponse<400, Required<StorefrontTokensV3ApiSpecs.RevokePrivateTokenByJtiErrors[400]>> | RequestErrorResponse<404, Required<StorefrontTokensV3ApiSpecs.RevokePrivateTokenByJtiErrors[404]>> | RequestErrorResponse<422, Required<StorefrontTokensV3ApiSpecs.RevokePrivateTokenByJtiErrors[422]>>)>({
            path: `v3/storefront/api-token-private/${jti}`,
        });
    }

    /**
     * Revoke all private tokens
     *
     * Revokes every active private API token that your API account has issued. Only tokens issued by the API account making the request are revoked, and only tokens in this family (matching the path segment); tokens issued by another API account and tokens of other families are unaffected.

     Revocation can take up to approximately 60 seconds to fully propagate because revoked identifiers are held in a short-lived cache, so a revoked token may briefly continue to authenticate.

     **Required Scopes**
     * `Manage` `Storefront API Tokens`
     */
    revokeAllPrivateTokens(
    ) {
        return this.request.post<RequestSuccessResponse<204, Required<StorefrontTokensV3ApiSpecs.RevokeAllPrivateTokensResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/storefront/api-token-private/revoke-all',
        });
    }
}
