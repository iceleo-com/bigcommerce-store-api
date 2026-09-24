import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreLogsV3ApiSpecs from '../generated/store-logs-v3';
export * as StoreLogsV3ApiSpecs from '../generated/store-logs-v3';
export declare class StoreLogsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getStoreSystemLogs(query?: StoreLogsV3ApiSpecs.GetStoreSystemLogsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreLogsV3ApiSpecs.SystemLogsGetStoreSystemLogsResponse200>>>;
}
