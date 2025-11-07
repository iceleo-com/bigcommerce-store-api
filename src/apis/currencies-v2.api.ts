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
    getCurrencies(
        query?: CurrenciesV2ApiSpecs.GetCurrenciesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.GetCurrenciesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/currencies',
            query,
        });
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
     * last_updated

     The `is_default` property can only be set to true. The value of `is_default` cannot be unset, only overridden. To change the storeʼs default currency in the BigCommerce control panel, please see [Managing Currencies (Help Center)](https://support.bigcommerce.com/s/article/Managing-Currencies-Beta).
     */
    createCurrency(
        requestBody: CurrenciesV2ApiSpecs.CreateCurrencyData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.CreateCurrencyResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/currencies',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete All Currencies
     *
     * Deletes all non-default store currencies.
     */
    deleteCurrencies(
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CurrenciesV2ApiSpecs.DeleteCurrenciesResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v2/currencies',
        });
    }

    /**
     * Get a Currency
     *
     * Returns a single *Currency*.
     */
    getCurrency(
        id: CurrenciesV2ApiSpecs.GetCurrencyData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.GetCurrencyResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/currencies/${id}`,
        });
    }

    /**
     * Update a Currency
     *
     * Updates a *Currency*.

     **Read-Only Fields**

     * id
     * last_updated
     * currency_code

     The `is_default` property can only be set to true. The value of `is_default` cannot be unset, only overridden. 
     */
    updateCurrency(
        id: CurrenciesV2ApiSpecs.UpdateCurrencyData['path']['id'],
        requestBody: CurrenciesV2ApiSpecs.UpdateCurrencyData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.UpdateCurrencyResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/currencies/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Currency
     *
     * Deletes a *Currency*.

     If a currencyʼs `is_default` property is set to true, this currency cannot be deleted. 
     */
    deleteCurrency(
        id: CurrenciesV2ApiSpecs.DeleteCurrencyData['path']['id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CurrenciesV2ApiSpecs.DeleteCurrencyResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/currencies/${id}`,
        });
    }
}
