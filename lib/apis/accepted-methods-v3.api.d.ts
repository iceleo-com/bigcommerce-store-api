import RequestService from '../helpers/request/request-service';
import * as AcceptedMethodsV3ApiSpecs from '../generated/accepted-methods-v3';
export default class AcceptedMethodsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPaymentMethods(query?: AcceptedMethodsV3ApiSpecs.GetPaymentMethodsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, AcceptedMethodsV3ApiSpecs.GetPaymentMethodsError>>;
}
