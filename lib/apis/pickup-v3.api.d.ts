import RequestService from '../helpers/request/request-service';
import * as PickupV3ApiSpecs from '../generated/pickup-v3';
export default class PickupV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPickup(query?: PickupV3ApiSpecs.GetPickupData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<PickupV3ApiSpecs.GetPickupResponse, any>>;
    postPickup(requestBody: PickupV3ApiSpecs.PostPickupData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<PickupV3ApiSpecs.PostPickupResponse, PickupV3ApiSpecs.ErrorResponse>>;
    putPickup(requestBody: PickupV3ApiSpecs.PutPickupData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<PickupV3ApiSpecs.PutPickupResponse, PickupV3ApiSpecs.ErrorResponse>>;
    deletePickup(query?: PickupV3ApiSpecs.DeletePickupData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
}
