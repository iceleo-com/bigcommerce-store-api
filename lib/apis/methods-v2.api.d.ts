import RequestService from '../helpers/request/request-service';
import * as MethodsV2ApiSpecs from '../generated/methods-v2';
export default class MethodsV2Api {
    private readonly request;
    constructor(request: RequestService);
    getAllPaymentMethods(query?: MethodsV2ApiSpecs.GetAllPaymentMethodsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<MethodsV2ApiSpecs.GetAllPaymentMethodsResponse, any>>;
}
