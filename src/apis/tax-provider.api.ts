import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxProviderApiSpecs from '../generated/tax-provider';
export * as TaxProviderApiSpecs from '../generated/tax-provider';

export class TaxProviderApi {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Estimate Taxes
     *
     * Submit the quote request to retrieve an estimate from the enabled third-party tax provider. Estimates are not expected to be persisted by the tax provider.

     > Server URL
     > - For supporting tax providers, the server URL contains the tax provider's profile field; for example, `your_profile.example.com`.
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
    estimate(
        requestBody: TaxProviderApiSpecs.EstimateData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<TaxProviderApiSpecs.EstimateResponses[200]>>,(RequestErrorResponse<400, Required<TaxProviderApiSpecs.EstimateErrors[400]>> | RequestErrorResponse<401, Required<TaxProviderApiSpecs.EstimateErrors[401]>> | RequestErrorResponse<500, Required<TaxProviderApiSpecs.EstimateErrors[500]>>)>({
            path: 'https://{app_domain}/estimate',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `estimate` instead.
     */
    estimateTaxes(...args: Parameters<TaxProviderApi['estimate']>) {
        return this.estimate(...args);
    }

    /**
     * Void Tax Quote
     *
     * Invalidate the persisted tax quote as identified by the given unique ID. Relevant to order cancellations or when moving an order from a paid status to an unpaid status.

     > Server URL
     > - For supporting tax providers, the server URL contains the tax provider's profile field; for example, `your_profile.example.com`.
     > - The Try it feature is not currently supported for this endpoint.
     */
    void(
        query?: TaxProviderApiSpecs.VoidData['query'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<TaxProviderApiSpecs.VoidResponses[200]>>,(RequestErrorResponse<400, Required<TaxProviderApiSpecs.VoidErrors[400]>> | RequestErrorResponse<401, Required<TaxProviderApiSpecs.VoidErrors[401]>> | RequestErrorResponse<500, Required<TaxProviderApiSpecs.VoidErrors[500]>>)>({
            path: 'https://{app_domain}/void',
            query,
        });
    }

    /**
     * @deprecated Use `void` instead.
     */
    voidTaxQuote(...args: Parameters<TaxProviderApi['void']>) {
        return this.void(...args);
    }

    /**
     * Commit Tax Quote
     *
     * Submit the quote request to be persisted by the enabled third-party tax provider. A commit operation is intended to be submitted once only, when the Order has been confirmed and paid.

     > Server URL
     > - For supporting tax providers, the server URL contains the tax provider's profile field; for example, `your_profile.example.com`.
     > - The Try it feature is not currently supported for this endpoint.
     */
    commit(
        requestBody: TaxProviderApiSpecs.CommitData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<TaxProviderApiSpecs.CommitResponses[200]>>,(RequestErrorResponse<400, Required<TaxProviderApiSpecs.CommitErrors[400]>> | RequestErrorResponse<401, Required<TaxProviderApiSpecs.CommitErrors[401]>> | RequestErrorResponse<500, Required<TaxProviderApiSpecs.CommitErrors[500]>>)>({
            path: 'https://{app_domain}/commit',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `commit` instead.
     */
    commitTaxQuote(...args: Parameters<TaxProviderApi['commit']>) {
        return this.commit(...args);
    }

    /**
     * Adjust Tax Quote
     *
     * Replace the persisted tax quote (identified by the given unique ID) with the provided quote request (represented by the **AdjustRequest**).

     Relevant for partial refunds, full refunds, returns, and other Order modifications where there have been changes to the tax liabilities.

     The returned **Tax Quote** response is expected to be the same to a response returned by an equivalent response to **estimate** or **commit** methods.

     > Server URL
     > - For supporting tax providers, the server URL contains the tax provider's profile field; for example, `your_profile.example.com`.
     > - The Try it feature is not currently supported for this endpoint.
     */
    adjust(
        requestBody: TaxProviderApiSpecs.AdjustData['body'],
        query?: TaxProviderApiSpecs.AdjustData['query'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<TaxProviderApiSpecs.AdjustResponses[200]>>,(RequestErrorResponse<400, Required<TaxProviderApiSpecs.AdjustErrors[400]>> | RequestErrorResponse<401, Required<TaxProviderApiSpecs.AdjustErrors[401]>> | RequestErrorResponse<500, Required<TaxProviderApiSpecs.AdjustErrors[500]>>)>({
            path: 'https://{app_domain}/adjust',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `adjust` instead.
     */
    adjustTaxQuote(...args: Parameters<TaxProviderApi['adjust']>) {
        return this.adjust(...args);
    }
}
