import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as AcceptedMethodsV3ApiSpecs from '../generated/accepted-methods-v3';
export * as AcceptedMethodsV3ApiSpecs from '../generated/accepted-methods-v3';
export declare class AcceptedMethodsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPaymentMethods(query?: AcceptedMethodsV3ApiSpecs.GetPaymentMethodsData['query']): Promise<RequestSuccessResponse<200, Required<AcceptedMethodsV3ApiSpecs.MethodsGetPaymentMethodsResponse200>> | RequestErrorResponse<400, Required<AcceptedMethodsV3ApiSpecs.GetPaymentMethodsRequestBadRequestError>> | RequestErrorResponse<401, Required<AcceptedMethodsV3ApiSpecs.GetPaymentMethodsRequestUnauthorizedError>> | RequestErrorResponse<404, Required<AcceptedMethodsV3ApiSpecs.GetPaymentMethodsRequestNotFoundError>> | RequestErrorResponse<422, Required<AcceptedMethodsV3ApiSpecs.GetPaymentMethodsRequestUnprocessableEntityError>>>;
}
