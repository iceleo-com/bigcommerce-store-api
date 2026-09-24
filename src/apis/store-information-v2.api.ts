import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreInformationV2ApiSpecs from '../generated/store-information-v2';
export * as StoreInformationV2ApiSpecs from '../generated/store-information-v2';

export class StoreInformationV2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Store Information
     *
     * Returns metadata about the global settings for a store. Some of these values are independently configurable on a per-storefront or per-channel basis. For channel overrides, see [Store Settings](/developer/api-reference/rest/admin/management/settings).
     */
    getStoreInformation(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.GetStoreInformationResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/store',
        });
    }

    /**
     * Get System Timestamp
     *
     * Returns the system timestamp at the time of the request. The time resource is useful for validating API authentication details and testing client connections.
     */
    getSystemTimestamp(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.GetSystemTimestampResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/time',
        });
    }
}
