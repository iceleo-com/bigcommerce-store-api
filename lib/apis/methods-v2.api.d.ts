import RequestService from '../helpers/request/request-service';
import * as MethodsV2ApiSpecs from '../generated/methods-v2';
export * as MethodsV2ApiSpecs from '../generated/methods-v2';
export declare class MethodsV2Api {
    private readonly request;
    constructor(request: RequestService);
    getAllPaymentMethods(query?: MethodsV2ApiSpecs.GetAllPaymentMethodsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<MethodsV2ApiSpecs.GetAllPaymentMethodsResponse, any>>;
}
