import RequestService from '../helpers/request/request-service';
import * as StoreLogsV3ApiSpecs from '../generated/store-logs-v3';
export default class StoreLogsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getStoreSystemLogs(query?: StoreLogsV3ApiSpecs.GetStoreSystemLogsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreLogsV3ApiSpecs.GetStoreSystemLogsResponse, any>>;
}
