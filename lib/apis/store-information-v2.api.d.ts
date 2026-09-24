import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreInformationV2ApiSpecs from '../generated/store-information-v2';
export * as StoreInformationV2ApiSpecs from '../generated/store-information-v2';
export declare class StoreInformationV2Api {
    private readonly request;
    constructor(request: RequestService);
    getStoreInformation(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.StoreInformation>>>;
    getSystemTimestamp(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.TimeStampFull>>>;
}
