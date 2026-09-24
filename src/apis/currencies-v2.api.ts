import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CurrenciesV2ApiSpecs from '../generated/currencies-v2';
export * as CurrenciesV2ApiSpecs from '../generated/currencies-v2';

export class CurrenciesV2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Currencies
     *
     * Returns a list of all store *Currency*.
     */
    getAllCurrencies(
        query?: CurrenciesV2ApiSpecs.GetAllCurrenciesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.GetAllCurrenciesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/currencies',
            query,
        });
    }

    /**
     * @deprecated Use `getAllCurrencies` instead.
     */
    getCurrencies(...args: Parameters<CurrenciesV2Api['getAllCurrencies']>) {
        return this.getAllCurrencies(...args);
    }

    /**
     * Create a Currency
     *
     * Creates *Currency*.

     **Required Fields** 

     * name
     * currency_code
     * currency_exchange_rate
     * token_location
     * token
     * decimal_token
     * thousands_token
     * decimal_places

     **Read-Only Fields**
     * id
     * date_created
     * date_modified

     The `is_default` property can only be set to true. The value of `is_default` cannot be unset, only overridden. To change the storeʼs default currency in the BigCommerce control panel, please see [Managing Currencies (Help Center)](https://support.bigcommerce.com/s/article/Managing-Currencies-Beta).
     */
    createAcurrency(
        requestBody: CurrenciesV2ApiSpecs.CreateACurrencyData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.CreateACurrencyResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/currencies',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createAcurrency` instead.
     */
    createCurrency(...args: Parameters<CurrenciesV2Api['createAcurrency']>) {
        return this.createAcurrency(...args);
    }

    /**
     * Delete All Currencies
     *
     * Deletes all non-default store currencies.
     */
    deleteAllCurrencies(
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CurrenciesV2ApiSpecs.DeleteAllCurrenciesResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v2/currencies',
        });
    }

    /**
     * @deprecated Use `deleteAllCurrencies` instead.
     */
    deleteCurrencies(...args: Parameters<CurrenciesV2Api['deleteAllCurrencies']>) {
        return this.deleteAllCurrencies(...args);
    }

    /**
     * Get a Currency
     *
     * Returns a single *Currency*.
     */
    getAcurrency(
        id: CurrenciesV2ApiSpecs.GetACurrencyData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.GetACurrencyResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/currencies/${id}`,
        });
    }

    /**
     * @deprecated Use `getAcurrency` instead.
     */
    getCurrency(...args: Parameters<CurrenciesV2Api['getAcurrency']>) {
        return this.getAcurrency(...args);
    }

    /**
     * Update a Currency
     *
     * Updates a *Currency*.

     **Read-Only Fields**

     * id
     * date_created
     * date_modified
     * currency_code

     The `is_default` property can only be set to true. The value of `is_default` cannot be unset, only overridden. 
     */
    updateAcurrency(
        id: CurrenciesV2ApiSpecs.UpdateACurrencyData['path']['id'],
        requestBody: CurrenciesV2ApiSpecs.UpdateACurrencyData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.UpdateACurrencyResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/currencies/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateAcurrency` instead.
     */
    updateCurrency(...args: Parameters<CurrenciesV2Api['updateAcurrency']>) {
        return this.updateAcurrency(...args);
    }

    /**
     * Delete a Currency
     *
     * Deletes a *Currency*.

     If a currencyʼs `is_default` property is set to true, this currency cannot be deleted. 
     */
    deleteAcurrency(
        id: CurrenciesV2ApiSpecs.DeleteACurrencyData['path']['id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CurrenciesV2ApiSpecs.DeleteACurrencyResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/currencies/${id}`,
        });
    }

    /**
     * @deprecated Use `deleteAcurrency` instead.
     */
    deleteCurrency(...args: Parameters<CurrenciesV2Api['deleteAcurrency']>) {
        return this.deleteAcurrency(...args);
    }
}
