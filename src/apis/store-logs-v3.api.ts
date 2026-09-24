import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreLogsV3ApiSpecs from '../generated/store-logs-v3';
export * as StoreLogsV3ApiSpecs from '../generated/store-logs-v3';

export class StoreLogsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get System Logs
     *
     * Get system logs 
     */
    getSites(
        query?: StoreLogsV3ApiSpecs.GetSitesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreLogsV3ApiSpecs.GetSitesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/store/systemlogs',
            query,
        });
    }

    /**
     * @deprecated Use `getSites` instead.
     */
    getStoreSystemLogs(...args: Parameters<StoreLogsV3Api['getSites']>) {
        return this.getSites(...args);
    }
}
