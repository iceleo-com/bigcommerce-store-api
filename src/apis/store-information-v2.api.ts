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
     * Returns metadata about a store.
     */
    getStore(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.GetStoreResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/store',
        });
    }

    /**
     * @deprecated Use `getStore` instead.
     */
    getStoreInformation(...args: Parameters<StoreInformationV2Api['getStore']>) {
        return this.getStore(...args);
    }

    /**
     * Get System Timestamp
     *
     * Returns the system timestamp at the time of the request. The time resource is useful for validating API authentication details and testing client connections.
     */
    getTime(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.GetTimeResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/time',
        });
    }

    /**
     * @deprecated Use `getTime` instead.
     */
    getSystemTimestamp(...args: Parameters<StoreInformationV2Api['getTime']>) {
        return this.getTime(...args);
    }
}
