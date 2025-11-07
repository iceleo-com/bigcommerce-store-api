import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CurrenciesV2ApiSpecs from '../generated/currencies-v2';
export * as CurrenciesV2ApiSpecs from '../generated/currencies-v2';
export declare class CurrenciesV2Api {
    private readonly request;
    constructor(request: RequestService);
    getCurrencies(query?: CurrenciesV2ApiSpecs.GetCurrenciesData['query']): Promise<RequestSuccessResponse<200, CurrenciesV2ApiSpecs.CurrencyFull[]> | RequestErrorResponse<400, void>>;
    createCurrency(requestBody: CurrenciesV2ApiSpecs.CreateCurrencyData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.CurrencyFull>>>;
    deleteCurrencies(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getCurrency(id: CurrenciesV2ApiSpecs.GetCurrencyData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.CurrencyFull>>>;
    updateCurrency(id: CurrenciesV2ApiSpecs.UpdateCurrencyData['path']['id'], requestBody: CurrenciesV2ApiSpecs.UpdateCurrencyData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.CurrencyFull>>>;
    deleteCurrency(id: CurrenciesV2ApiSpecs.DeleteCurrencyData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
