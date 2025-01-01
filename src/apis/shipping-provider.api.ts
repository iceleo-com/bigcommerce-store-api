import RequestService from '../helpers/request/request-service';
import * as ShippingProviderApiSpecs from '../generated/shipping-provider';

export default class ShippingProviderApi {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Request shipping rates
     *
     * Request shipping rates. BigCommerce sends a request for shipping quotes to the shipping provider URL. The shipping provider responds with shipping quotes.

     > #### Note
     > * Substitute the host and path specific to the shipping provider for `your_app.example.com` and `rate`. 
     > * The Send a Test Request feature is not currently supported for this endpoint.  
     */
    requestShippingRates(
        requestBody: ShippingProviderApiSpecs.RequestShippingRatesData['body'],
    ) {
        return this.request.post<ShippingProviderApiSpecs.RequestShippingRatesResponse, any>({
            path: 'https://{app_domain}/rate',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Validate connection options
     *
     * Validate connection options. BigCommerce sends a request to the shipping provider URL to check a merchantʼs connection credentials. The shipping provider sends a response indicating whether a merchant has valid credentials. 

     > #### Note
     > * Substitute the host and path specific to the shipping provider for `your_app.example.com` and `check_connection_options`.  
     > * The Send a Test Request feature is not currently supported for this endpoint.
     */
    validateConnectionOptions(
        requestBody: ShippingProviderApiSpecs.ValidateConnectionOptionsData['body'],
    ) {
        return this.request.post<ShippingProviderApiSpecs.ValidateConnectionOptionsResponse, any>({
            path: 'https://{app_domain}/check_connection_options',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
