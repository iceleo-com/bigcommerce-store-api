import RequestService from '../helpers/request/request-service';
import * as CurrenciesV2ApiSpecs from '../generated/currencies-v2';

export default class CurrenciesV2Api {
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
        return this.request.get<CurrenciesV2ApiSpecs.GetCurrenciesResponse, any>({
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
     * date_created
     * date_modified

     The `is_default` property can only be set to true. The value of `is_default` cannot be unset, only overridden. To change the storeʼs default currency in the BigCommerce control panel, please see [Managing Currencies (Help Center)](https://support.bigcommerce.com/s/article/Managing-Currencies-Beta).
     */
    createCurrency(
        requestBody: CurrenciesV2ApiSpecs.CreateCurrencyData['body'],
    ) {
        return this.request.post<CurrenciesV2ApiSpecs.CreateCurrencyResponse, any>({
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
        return this.request.delete<any, any>({
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
        return this.request.get<CurrenciesV2ApiSpecs.GetCurrencyResponse, any>({
            path: `v2/currencies/${id}`,
        });
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
    updateCurrency(
        id: CurrenciesV2ApiSpecs.UpdateCurrencyData['path']['id'],
        requestBody: CurrenciesV2ApiSpecs.UpdateCurrencyData['body'],
    ) {
        return this.request.put<CurrenciesV2ApiSpecs.UpdateCurrencyResponse, any>({
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
        return this.request.delete<any, any>({
            path: `v2/currencies/${id}`,
        });
    }
}
