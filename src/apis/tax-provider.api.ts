import RequestService from '../helpers/request/request-service';
import * as TaxProviderApiSpecs from '../generated/tax-provider';

export default class TaxProviderApi {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Estimate taxes
     *
     * Submit the quote request to retrieve an estimate from the enabled third-party tax provider. Estimates are not expected to be persisted by the tax provider.

     > Server URL
     > - For supporting tax providers, the server URL contains the tax providerʼs profile field; for example, `your_profile.example.com`.
     > - The Try it feature is not currently supported for this endpoint.

     The following actions can trigger tax estimate requests multiple times during a standard checkout on a BigCommerce storefront, depending on the BigCommerce merchant’s settings.

     - After selecting a Shipping Method during the “Estimate Shipping & Tax” facility on the Cart page.
     - After specifying a Shipping Address during a Checkout.
     - After selecting a Shipping Method during a Checkout.
     - After specifying a Billing Address during a Checkout.

     The following actions are not expected to trigger estimate requests.

     - While anonymously browsing a store’s product catalog.
     - On the Cart page prior to a Shopper selecting a Shipping Method via “Estimate Shipping & Tax”.
     - On the Checkout page prior to specifying a Shipping Address.
     - On the Checkout page, when toggling any option related to using the shopper’s Shipping Address as their Billing Address.

     The following control panel actions can also trigger tax estimate requests.

     - Order refund.
     - Edit order.
     - Test connection feature in Tax Settings.
     */
    estimateTaxes(
        requestBody: TaxProviderApiSpecs.EstimateTaxesData['body'],
    ) {
        return this.request.post<TaxProviderApiSpecs.EstimateTaxesResponse, TaxProviderApiSpecs.EstimateTaxesError>({
            path: 'https://{app_domain}/estimate',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Void tax quote
     *
     * Invalidate the persisted tax quote as identified by the given unique ID. Relevant to order cancellations, full refunds, or moving an order from a paid status to an unpaid status.

     > Server URL
     > - For supporting tax providers, the server URL contains the tax providerʼs profile field; for example, `your_profile.example.com`.
     > - The Try it feature is not currently supported for this endpoint.
     */
    voidTaxQuote(
        query?: TaxProviderApiSpecs.VoidTaxQuoteData['query'],
    ) {
        return this.request.post<any, TaxProviderApiSpecs.VoidTaxQuoteError>({
            path: 'https://{app_domain}/void',
            query,
        });
    }

    /**
     * Commit Tax Quote
     *
     * Submit the quote request to be persisted by the enabled third-party tax provider. A commit operation is intended to be submitted once only, when the Order has been confirmed and paid.

     > Server URL
     > - For supporting tax providers, the server URL contains the tax providerʼs profile field; for example, `your_profile.example.com`.
     > - The Try it feature is not currently supported for this endpoint.
     */
    commitTaxQuote(
        requestBody: TaxProviderApiSpecs.CommitTaxQuoteData['body'],
    ) {
        return this.request.post<TaxProviderApiSpecs.CommitTaxQuoteResponse, TaxProviderApiSpecs.CommitTaxQuoteError>({
            path: 'https://{app_domain}/commit',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Adjust Tax Quote
     *
     * Replace the persisted tax quote (identified by the given unique ID) with the provided quote request (represented by the **AdjustRequest**).

     Relevant for returns, partial refunds, and other Order modifications where there have been changes to the tax liabilities.

     The returned **Tax Quote** response is expected to be the same to a response returned by an equivalent response to **estimate** or **commit** methods.

     > Server URL
     > - For supporting tax providers, the server URL contains the tax providerʼs profile field; for example, `your_profile.example.com`.
     > - The Try it feature is not currently supported for this endpoint.
     */
    adjustTaxQuote(
        requestBody: TaxProviderApiSpecs.AdjustTaxQuoteData['body'],
        query?: TaxProviderApiSpecs.AdjustTaxQuoteData['query'],
    ) {
        return this.request.post<TaxProviderApiSpecs.AdjustTaxQuoteResponse, TaxProviderApiSpecs.AdjustTaxQuoteError>({
            path: 'https://{app_domain}/adjust',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
}
