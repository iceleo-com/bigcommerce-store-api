import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PickupOptionsV3ApiSpecs from '../generated/pickup-options-v3';
export * as PickupOptionsV3ApiSpecs from '../generated/pickup-options-v3';
export declare class PickupOptionsV3Api {
    private readonly request;
    constructor(request: RequestService);
    postPickupOptions(requestBody: PickupOptionsV3ApiSpecs.PostPickupOptionsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<PickupOptionsV3ApiSpecs.PickupOptionsResponse>>>;
}
