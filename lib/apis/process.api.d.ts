import RequestService from '../helpers/request/request-service';
import * as ProcessApiSpecs from '../generated/process';
export default class ProcessApi {
    private readonly request;
    constructor(request: RequestService);
    paymentsPost(requestBody: ProcessApiSpecs.PaymentsPostData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, ProcessApiSpecs.PaymentsPostError>>;
}
