import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxV3ApiSpecs from '../generated/tax-v3';
export * as TaxV3ApiSpecs from '../generated/tax-v3';

export class TaxV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Connection Status
     *
     * Retrieve the connection status of the specified tax provider in the context of a store.

     > #### Note
     > * Requires **read** permissions on the **Information and Settings** scope.

     */
    providerConnectionGet(
        providerId: TaxV3ApiSpecs.ProviderConnectionGetData['path']['provider_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<TaxV3ApiSpecs.ProviderConnectionGetResponses[200]>>,RequestErrorResponse<404, Required<TaxV3ApiSpecs.ProviderConnectionGetErrors[404]>>>({
            path: `v3/tax/providers/${providerId}/connection`,
        });
    }

    /**
     * @deprecated Use `providerConnectionGet` instead.
     */
    getTaxProviderConnection(...args: Parameters<TaxV3Api['providerConnectionGet']>) {
        return this.providerConnectionGet(...args);
    }

    /**
     * Update a Connection
     *
     * Set authentication information associated with a merchant's account on the tax provider's infrastructure:
     - [HTTP Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) (developer.mozilla.org) credentials
     - (optional) Tax provider profile used in customized endpoint urls for tax provider calls. This is only available for tax providers that support this feature.

     The configured `username`, `password`, and `profile` (if available) is used to authenticate each API request to the Tax Provider from the associated store. 
     The tax provider's `profile` will be included in the url for [Tax Provider API](/docs/rest-contracts/tax) endpoints. 

     > #### Note
     > * This operation will be logged in [Store Logs](https://support.bigcommerce.com/s/article/Using-Store-Logs) under **Staff Actions**.
     > * Requires **write** permissions on the **Information and Settings** [scope](/docs/start/authentication/api-accounts#oauth-scopes).
     */
    providerConnectionPut(
        providerId: TaxV3ApiSpecs.ProviderConnectionPutData['path']['provider_id'],
        requestBody: TaxV3ApiSpecs.ProviderConnectionPutData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<TaxV3ApiSpecs.ProviderConnectionPutResponses[200]>>,(RequestErrorResponse<404, Required<TaxV3ApiSpecs.ProviderConnectionPutErrors[404]>> | RequestErrorResponse<422, Required<TaxV3ApiSpecs.ProviderConnectionPutErrors[422]>>)>({
            path: `v3/tax/providers/${providerId}/connection`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `providerConnectionPut` instead.
     */
    updateTaxProviderConnection(...args: Parameters<TaxV3Api['providerConnectionPut']>) {
        return this.providerConnectionPut(...args);
    }

    /**
     * Delete a Connection
     *
     * Remove any previously set basic connection credentials for the specified provider. If the specified provider is the active tax provider on the store, the store's active tax provider will be reset to BigCommerce Manual Tax. It is suggested to call this endpoint during a single-click app [uninstall callback](/docs/integrations/apps/guide/callbacks#uninstall-callback).

     > #### Note
     > * This operation will be logged in [Store Logs](https://support.bigcommerce.com/s/article/Using-Store-Logs) under **Staff Actions**.
     > * Requires **write** permissions on the **Information and Settings** [scope](/docs/start/authentication/api-accounts#oauth-scopes).

     */
    providerConnectionDelete(
        providerId: TaxV3ApiSpecs.ProviderConnectionDeleteData['path']['provider_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<TaxV3ApiSpecs.ProviderConnectionDeleteResponses[200]>>,RequestErrorResponse<404, Required<TaxV3ApiSpecs.ProviderConnectionDeleteErrors[404]>>>({
            path: `v3/tax/providers/${providerId}/connection`,
        });
    }

    /**
     * @deprecated Use `providerConnectionDelete` instead.
     */
    deleteTaxProviderConnection(...args: Parameters<TaxV3Api['providerConnectionDelete']>) {
        return this.providerConnectionDelete(...args);
    }
}
