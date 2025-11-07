import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as AcceptedMethodsV3ApiSpecs from '../generated/accepted-methods-v3';
export * as AcceptedMethodsV3ApiSpecs from '../generated/accepted-methods-v3';
export declare class AcceptedMethodsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPaymentMethods(query?: AcceptedMethodsV3ApiSpecs.GetPaymentMethodsData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<AcceptedMethodsV3ApiSpecs.PaymentMethodFull>;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<400, Required<{
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    }>> | RequestErrorResponse<401, Required<{
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    }>> | RequestErrorResponse<404, Required<{
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    }>> | RequestErrorResponse<422, Required<{
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    }>>>;
}
