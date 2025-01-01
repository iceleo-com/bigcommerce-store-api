import RequestService from '../helpers/request/request-service';
import * as CurrenciesV2ApiSpecs from '../generated/currencies-v2';
export default class CurrenciesV2Api {
    private readonly request;
    constructor(request: RequestService);
    getCurrencies(query?: CurrenciesV2ApiSpecs.GetCurrenciesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<CurrenciesV2ApiSpecs.GetCurrenciesResponse, any>>;
    createCurrency(requestBody: CurrenciesV2ApiSpecs.CreateCurrencyData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<CurrenciesV2ApiSpecs.currency_Full, any>>;
    deleteCurrencies(): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getCurrency(id: CurrenciesV2ApiSpecs.GetCurrencyData['path']['id']): Promise<import("../helpers/request/request-service.type").RequestResponse<CurrenciesV2ApiSpecs.currency_Full, any>>;
    updateCurrency(id: CurrenciesV2ApiSpecs.UpdateCurrencyData['path']['id'], requestBody: CurrenciesV2ApiSpecs.UpdateCurrencyData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<CurrenciesV2ApiSpecs.currency_Full, any>>;
    deleteCurrency(id: CurrenciesV2ApiSpecs.DeleteCurrencyData['path']['id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
}
