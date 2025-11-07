import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProcessApiSpecs from '../generated/process';
export * as ProcessApiSpecs from '../generated/process';
export declare class ProcessApi {
    private readonly request;
    constructor(request: RequestService);
    paymentsPost(requestBody: ProcessApiSpecs.PaymentsPostData['body']): Promise<RequestSuccessResponse<202, Required<{
        id?: string;
        transaction_type?: "authorization" | "purchase";
        status?: "success" | "pending";
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
