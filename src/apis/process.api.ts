import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProcessApiSpecs from '../generated/process';
export * as ProcessApiSpecs from '../generated/process';

export class ProcessApi {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Process Payments
     *
     * Process payments for an order. See [Payment Processing](/developer/docs/admin/checkout-and-cart/payments) for more information.
     */
    paymentsPost(
        requestBody: ProcessApiSpecs.PaymentsPostData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<202, Required<ProcessApiSpecs.PaymentsPostResponses[202]>>,(RequestErrorResponse<400, Required<ProcessApiSpecs.PaymentsPostErrors[400]>> | RequestErrorResponse<401, Required<ProcessApiSpecs.PaymentsPostErrors[401]>> | RequestErrorResponse<422, Required<ProcessApiSpecs.PaymentsPostErrors[422]>>)>({
            path: 'https://payments.bigcommerce.com/stores/{store_hash}/payments',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Attach Instrument to Customer
     *
     * Adds an instrument to customer.
     */
    createInstrument(
        requestBody: ProcessApiSpecs.CreateInstrumentData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<ProcessApiSpecs.CreateInstrumentResponses[201]>>,(RequestErrorResponse<401, Required<ProcessApiSpecs.CreateInstrumentErrors[401]>> | RequestErrorResponse<422, Required<ProcessApiSpecs.CreateInstrumentErrors[422]>>)>({
            path: 'https://payments.bigcommerce.com/stores/{store_hash}/stored-instruments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
