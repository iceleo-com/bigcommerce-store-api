import RequestService from '../helpers/request/request-service';
import * as StoreLogsV3ApiSpecs from '../generated/store-logs-v3';

export default class StoreLogsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get System Logs
     *
     * Get system logs 
     */
    getStoreSystemLogs(
        query?: StoreLogsV3ApiSpecs.GetStoreSystemLogsData['query'],
    ) {
        return this.request.get<StoreLogsV3ApiSpecs.GetStoreSystemLogsResponse, any>({
            path: 'v3/store/systemlogs',
            query,
        });
    }
}
