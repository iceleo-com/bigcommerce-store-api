import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PickupOptionsV3ApiSpecs from '../generated/pickup-options-v3';
export * as PickupOptionsV3ApiSpecs from '../generated/pickup-options-v3';

export class PickupOptionsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Find Available Pickup Options
     *
     * Returns up to 10 available pickup options for the requested items around a radius of the provided search coordinates. 

     The pickup options returned only include options where all requested items are available and can be picked up from a single location.
     */
    postPickupOptions(
        requestBody: PickupOptionsV3ApiSpecs.PostPickupOptionsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<PickupOptionsV3ApiSpecs.PostPickupOptionsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/pickup/options',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
