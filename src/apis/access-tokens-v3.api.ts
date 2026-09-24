import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as AccessTokensV3ApiSpecs from '../generated/access-tokens-v3';
export * as AccessTokensV3ApiSpecs from '../generated/access-tokens-v3';

export class AccessTokensV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Create Payment Access Token
     *
     * Use this endpoint to create a payment access token. A payment access token is required to process payments with the BigCommerce API.

     **Required Fields**
     * order_id
     */
    createPaymentAccessToken(
        requestBody: AccessTokensV3ApiSpecs.CreatePaymentAccessTokenData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenResponses[201]>>,(RequestErrorResponse<400, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenErrors[400]>> | RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenErrors[401]>> | RequestErrorResponse<404, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenErrors[404]>> | RequestErrorResponse<409, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenErrors[409]>> | RequestErrorResponse<422, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenErrors[422]>>)>({
            path: 'v3/payments/access_tokens',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Create Instrument Access Token
     *
     * Creates a token.
     */
    createToken(
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<AccessTokensV3ApiSpecs.CreateTokenResponses[201]>>,RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.CreateTokenErrors[401]>>>({
            path: 'v3/payments/stored-instruments/access-tokens',
        });
    }

    /**
     * List Instruments
     *
     * Lists all available stored instruments for a store. This list will include all types of stored instruments namely card, account, and bank_account instruments.
     */
    listInstrumentsForStore(
        query?: AccessTokensV3ApiSpecs.ListInstrumentsForStoreData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<AccessTokensV3ApiSpecs.ListInstrumentsForStoreResponses[200]>>,RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.ListInstrumentsForStoreErrors[401]>>>({
            path: 'v3/payments/stored-instruments',
            query,
        });
    }

    /**
     * Bulk Import Instruments
     *
     * Imports instruments that were vaulted outside the store.
     */
    bulkImportInstruments(
        requestBody: AccessTokensV3ApiSpecs.BulkImportInstrumentsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<AccessTokensV3ApiSpecs.BulkImportInstrumentsResponses[200]>>,(RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.BulkImportInstrumentsErrors[401]>> | RequestErrorResponse<422, Required<AccessTokensV3ApiSpecs.BulkImportInstrumentsErrors[422]>>)>({
            path: 'v3/payments/stored-instruments',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Instrument
     *
     * Updates an instrument in store and can update billing address in the provider's vault.
     As of this writing, only the Braintree gateway supports updating customer billing addresses.
     If billing_address is included in the request, an attempt will be made to update the billing address at provider's vault.

     */
    updateInstrument(
        requestBody: AccessTokensV3ApiSpecs.UpdateInstrumentData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<AccessTokensV3ApiSpecs.UpdateInstrumentResponses[200]>>,(RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.UpdateInstrumentErrors[401]>> | RequestErrorResponse<404, Required<AccessTokensV3ApiSpecs.UpdateInstrumentErrors[404]>> | RequestErrorResponse<422, Required<AccessTokensV3ApiSpecs.UpdateInstrumentErrors[422]>>)>({
            path: 'v3/payments/stored-instruments',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Bulk Delete Instruments
     *
     * Deletes instruments from the store without triggering deletion on the provider side.
     */
    bulkDeleteInstruments(
        query?: AccessTokensV3ApiSpecs.BulkDeleteInstrumentsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<AccessTokensV3ApiSpecs.BulkDeleteInstrumentsResponses[204]>>,(RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.BulkDeleteInstrumentsErrors[401]>> | RequestErrorResponse<404, Required<AccessTokensV3ApiSpecs.BulkDeleteInstrumentsErrors[404]>>)>({
            path: 'v3/payments/stored-instruments',
            query,
        });
    }

    /**
     * Remove Instrument from Store and Gateway
     *
     * Deletes instrument from store and provider's vault.
     */
    unvaultInstrument(
        instrumentToken: AccessTokensV3ApiSpecs.UnvaultInstrumentData['path']['instrument_token'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<AccessTokensV3ApiSpecs.UnvaultInstrumentResponses[204]>>,(RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.UnvaultInstrumentErrors[401]>> | RequestErrorResponse<404, Required<AccessTokensV3ApiSpecs.UnvaultInstrumentErrors[404]>> | RequestErrorResponse<422, Required<AccessTokensV3ApiSpecs.UnvaultInstrumentErrors[422]>>)>({
            path: `v3/payments/stored-instruments/${instrumentToken}`,
        });
    }

    /**
     * List Available Payment Method Ids
     *
     * Lists all available payment method IDs that support stored instruments. This list will include all types of stored instruments namely card, account, and bank_account instruments.
     */
    listMethodsForStore(
        query?: AccessTokensV3ApiSpecs.ListMethodsForStoreData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<AccessTokensV3ApiSpecs.ListMethodsForStoreResponses[200]>>,RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.ListMethodsForStoreErrors[401]>>>({
            path: 'v3/payments/stored-instruments/methods',
            query,
        });
    }
}
