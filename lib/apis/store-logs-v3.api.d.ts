import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreLogsV3ApiSpecs from '../generated/store-logs-v3';
export * as StoreLogsV3ApiSpecs from '../generated/store-logs-v3';
export declare class StoreLogsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getSites(query?: StoreLogsV3ApiSpecs.GetSitesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<StoreLogsV3ApiSpecs.SystemLog>;
        meta?: StoreLogsV3ApiSpecs.IndexMeta;
    }>>>;
    getStoreSystemLogs(...args: Parameters<StoreLogsV3Api['getSites']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<StoreLogsV3ApiSpecs.SystemLog>;
        meta?: StoreLogsV3ApiSpecs.IndexMeta;
    }>>>;
}
