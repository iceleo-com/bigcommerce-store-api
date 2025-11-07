import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as MethodsV2ApiSpecs from '../generated/methods-v2';
export * as MethodsV2ApiSpecs from '../generated/methods-v2';
export declare class MethodsV2Api {
    private readonly request;
    constructor(request: RequestService);
    getAllPaymentMethods(query?: MethodsV2ApiSpecs.GetAllPaymentMethodsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, MethodsV2ApiSpecs.PaymentBase[]>>;
}
