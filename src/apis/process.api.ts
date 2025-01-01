import RequestService from '../helpers/request/request-service';
import * as ProcessApiSpecs from '../generated/process';

export default class ProcessApi {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Process Payments
     *
     * Process payments for an order. See [Payment Processing](/docs/store-operations/payments) for more information.
     */
    paymentsPost(
        requestBody: ProcessApiSpecs.PaymentsPostData['body'],
    ) {
        return this.request.post<any, ProcessApiSpecs.PaymentsPostError>({
            path: 'https://payments.bigcommerce.com/stores/{store_hash}/payments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
