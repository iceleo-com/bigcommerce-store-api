import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreInformationV2ApiSpecs from '../generated/store-information-v2';
export * as StoreInformationV2ApiSpecs from '../generated/store-information-v2';
export declare class StoreInformationV2Api {
    private readonly request;
    constructor(request: RequestService);
    getStore(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<unknown>>>;
    getStoreInformation(...args: Parameters<StoreInformationV2Api['getStore']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<unknown>>>;
    getTime(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.TimeStampFull>>>;
    getSystemTimestamp(...args: Parameters<StoreInformationV2Api['getTime']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.TimeStampFull>>>;
}
