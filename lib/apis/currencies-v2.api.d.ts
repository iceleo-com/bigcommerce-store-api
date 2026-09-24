import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CurrenciesV2ApiSpecs from '../generated/currencies-v2';
export * as CurrenciesV2ApiSpecs from '../generated/currencies-v2';
export declare class CurrenciesV2Api {
    private readonly request;
    constructor(request: RequestService);
    getAllCurrencies(query?: CurrenciesV2ApiSpecs.GetAllCurrenciesData['query']): Promise<RequestSuccessResponse<200, CurrenciesV2ApiSpecs.CurrencyFull[]> | RequestErrorResponse<400, void>>;
    getCurrencies(...args: Parameters<CurrenciesV2Api['getAllCurrencies']>): Promise<RequestSuccessResponse<200, CurrenciesV2ApiSpecs.CurrencyFull[]> | RequestErrorResponse<400, void>>;
    createAcurrency(requestBody: CurrenciesV2ApiSpecs.CreateACurrencyData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.CurrencyFull>>>;
    createCurrency(...args: Parameters<CurrenciesV2Api['createAcurrency']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.CurrencyFull>>>;
    deleteAllCurrencies(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    deleteCurrencies(...args: Parameters<CurrenciesV2Api['deleteAllCurrencies']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getAcurrency(id: CurrenciesV2ApiSpecs.GetACurrencyData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.CurrencyFull>>>;
    getCurrency(...args: Parameters<CurrenciesV2Api['getAcurrency']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.CurrencyFull>>>;
    updateAcurrency(id: CurrenciesV2ApiSpecs.UpdateACurrencyData['path']['id'], requestBody: CurrenciesV2ApiSpecs.UpdateACurrencyData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.CurrencyFull>>>;
    updateCurrency(...args: Parameters<CurrenciesV2Api['updateAcurrency']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CurrenciesV2ApiSpecs.CurrencyFull>>>;
    deleteAcurrency(id: CurrenciesV2ApiSpecs.DeleteACurrencyData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    deleteCurrency(...args: Parameters<CurrenciesV2Api['deleteAcurrency']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
