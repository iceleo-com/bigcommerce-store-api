import RequestService from '../helpers/request/request-service';
import * as PickupOptionsV3ApiSpecs from '../generated/pickup-options-v3';
export default class PickupOptionsV3Api {
    private readonly request;
    constructor(request: RequestService);
    postPickupOptions(requestBody: PickupOptionsV3ApiSpecs.PostPickupOptionsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<PickupOptionsV3ApiSpecs.PickupOptionsResponse, any>>;
}
