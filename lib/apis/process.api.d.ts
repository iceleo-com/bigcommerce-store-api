import RequestService from '../helpers/request/request-service';
import * as ProcessApiSpecs from '../generated/process';
export * as ProcessApiSpecs from '../generated/process';
export declare class ProcessApi {
    private readonly request;
    constructor(request: RequestService);
    paymentsPost(requestBody: ProcessApiSpecs.PaymentsPostData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, ProcessApiSpecs.PaymentsPostError>>;
}
