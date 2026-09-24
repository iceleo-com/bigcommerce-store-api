import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProcessApiSpecs from '../generated/process';
export * as ProcessApiSpecs from '../generated/process';
export declare class ProcessApi {
    private readonly request;
    constructor(request: RequestService);
    paymentsPost(requestBody: ProcessApiSpecs.PaymentsPostData['body']): Promise<RequestSuccessResponse<202, Required<ProcessApiSpecs.ProcessingPaymentsPostResponse202>> | RequestErrorResponse<400, Required<ProcessApiSpecs.PaymentsPostRequestBadRequestError>> | RequestErrorResponse<401, Required<ProcessApiSpecs.PaymentsPostRequestUnauthorizedError>> | RequestErrorResponse<422, Required<ProcessApiSpecs.PaymentsPostRequestUnprocessableEntityError>>>;
    createInstrument(requestBody: ProcessApiSpecs.CreateInstrumentData['body']): Promise<RequestSuccessResponse<201, Required<ProcessApiSpecs.CreateInstrumentResponseBody>> | RequestErrorResponse<401, Required<ProcessApiSpecs.BaseErrorResponse>> | RequestErrorResponse<422, Required<ProcessApiSpecs.BaseErrorResponse>>>;
}
