import RequestService from '../helpers/request/request-service';
import * as PickupMethodsV3ApiSpecs from '../generated/pickup-methods-v3';
export default class PickupMethodsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPickupMethods(query?: PickupMethodsV3ApiSpecs.GetPickupMethodsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<PickupMethodsV3ApiSpecs.GetPickupMethodsResponse, any>>;
    postPickupMethods(requestBody: PickupMethodsV3ApiSpecs.PostPickupMethodsData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<PickupMethodsV3ApiSpecs.PostPickupMethodsResponse, any>>;
    putPickupMethods(requestBody: PickupMethodsV3ApiSpecs.PutPickupMethodsData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<PickupMethodsV3ApiSpecs.PutPickupMethodsResponse, any>>;
    deletePickupMethods(query?: PickupMethodsV3ApiSpecs.DeletePickupMethodsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
}
