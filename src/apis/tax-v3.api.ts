import RequestService from '../helpers/request/request-service';
import * as TaxV3ApiSpecs from '../generated/tax-v3';

export default class TaxV3Api {
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
    getTaxProviderConnection(
        providerId: TaxV3ApiSpecs.GetTaxProviderConnectionData['path']['provider_id'],
    ) {
        return this.request.get<TaxV3ApiSpecs.GetTaxProviderConnectionResponse, TaxV3ApiSpecs.GetTaxProviderConnectionError>({
            path: `v3/tax/providers/${providerId}/connection`,
        });
    }

    /**
     * Update a Connection
     *
     * Set authentication information associated with a merchant's account on the tax provider's infrastructure:
     - [HTTP Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) (developer.mozilla.org) credentials
     - (optional) Tax provider profile used in customized endpoint urls for tax provider calls. This is only available for tax providers that support this feature.

     The configured `username`, `password`, and `profile` (if available) are used to authenticate each API request to the Tax Provider from the associated store. 
     The tax provider's `profile` will be included in the URL for [Tax Provider API](/docs/rest-contracts/tax) endpoints. 

     > #### Note
     > * This operation will be logged in [Store Logs](https://support.bigcommerce.com/s/article/Using-Store-Logs) under **Staff Actions**.
     > * Requires **write** permissions on the **Information and Settings** [scope](/docs/start/authentication/api-accounts#oauth-scopes).
     */
    updateTaxProviderConnection(
        providerId: TaxV3ApiSpecs.UpdateTaxProviderConnectionData['path']['provider_id'],
        requestBody: TaxV3ApiSpecs.UpdateTaxProviderConnectionData['body'],
    ) {
        return this.request.put<TaxV3ApiSpecs.UpdateTaxProviderConnectionResponse, TaxV3ApiSpecs.UpdateTaxProviderConnectionError>({
            path: `v3/tax/providers/${providerId}/connection`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Connection
     *
     * Remove any previously set basic connection credentials for the specified provider. If the specified provider is the active tax provider on the store, the store's active tax provider will be reset to BigCommerce Manual Tax. It is suggested to call this endpoint during a single-click app [uninstall callback](/docs/integrations/apps/guide/callbacks#uninstall-callback).

     > #### Note
     > * This operation will be logged in [Store Logs](https://support.bigcommerce.com/s/article/Using-Store-Logs) under **Staff Actions**.
     > * Requires **write** permissions on the **Information and Settings** [scope](/docs/start/authentication/api-accounts#oauth-scopes).

     */
    deleteTaxProviderConnection(
        providerId: TaxV3ApiSpecs.DeleteTaxProviderConnectionData['path']['provider_id'],
    ) {
        return this.request.delete<TaxV3ApiSpecs.DeleteTaxProviderConnectionResponse, TaxV3ApiSpecs.DeleteTaxProviderConnectionError>({
            path: `v3/tax/providers/${providerId}/connection`,
        });
    }
}
