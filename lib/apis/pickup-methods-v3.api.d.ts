import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PickupMethodsV3ApiSpecs from '../generated/pickup-methods-v3';
export * as PickupMethodsV3ApiSpecs from '../generated/pickup-methods-v3';
export declare class PickupMethodsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPickupMethods(query?: PickupMethodsV3ApiSpecs.GetPickupMethodsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<PickupMethodsV3ApiSpecs.PickupMethodResponse>;
        meta?: PickupMethodsV3ApiSpecs.MetaCollection;
    }>>>;
    postPickupMethods(requestBody: PickupMethodsV3ApiSpecs.PostPickupMethodsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<PickupMethodsV3ApiSpecs.PickupMethodResponse>;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    putPickupMethods(requestBody: PickupMethodsV3ApiSpecs.PutPickupMethodsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<PickupMethodsV3ApiSpecs.PickupMethodResponse>;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    deletePickupMethods(query?: PickupMethodsV3ApiSpecs.DeletePickupMethodsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
}
