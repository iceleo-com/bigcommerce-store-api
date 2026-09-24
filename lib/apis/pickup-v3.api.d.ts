import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PickupV3ApiSpecs from '../generated/pickup-v3';
export * as PickupV3ApiSpecs from '../generated/pickup-v3';
export declare class PickupV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPickup(query?: PickupV3ApiSpecs.GetPickupData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<PickupV3ApiSpecs.PickupGetPickupResponse200>>>;
    postPickup(requestBody: PickupV3ApiSpecs.PostPickupData['body']): Promise<RequestSuccessResponse<200, Required<PickupV3ApiSpecs.PickupPostPickupResponse200>> | RequestErrorResponse<422, Required<PickupV3ApiSpecs.ErrorResponse>>>;
    putPickup(requestBody: PickupV3ApiSpecs.PutPickupData['body']): Promise<RequestErrorResponse<422, Required<PickupV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<PickupV3ApiSpecs.PickupPutPickupResponse200>>>;
    deletePickup(query?: PickupV3ApiSpecs.DeletePickupData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
