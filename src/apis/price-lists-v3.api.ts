import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PriceListsV3ApiSpecs from '../generated/price-lists-v3';
export * as PriceListsV3ApiSpecs from '../generated/price-lists-v3';

export class PriceListsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * List Price Lists
     *
     * Returns a list of *Price Lists*. Optional parameters can be passed in.
     */
    getPriceLists(
        query?: PriceListsV3ApiSpecs.GetPriceListsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.GetPriceListsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/pricelists',
            query,
        });
    }

    /**
     * Create Price List
     *
     * Creates a *Price List*.

     **Required Fields**
     * name
     */
    createPriceList(
        requestBody: PriceListsV3ApiSpecs.CreatePriceListData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.CreatePriceListResponses[200]>>,(RequestErrorResponse<409, Required<PriceListsV3ApiSpecs.CreatePriceListErrors[409]>> | RequestErrorResponse<422, Required<PriceListsV3ApiSpecs.CreatePriceListErrors[422]>>)>({
            path: 'v3/pricelists',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete All Price Lists
     *
     * Deletes a *Price List*. All associated price records are also removed. Optional parameters can be passed in.
     */
    deletePriceLists(
        query?: PriceListsV3ApiSpecs.DeletePriceListsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<PriceListsV3ApiSpecs.DeletePriceListsResponses[204]>>,RequestErrorResponse<503, Required<PriceListsV3ApiSpecs.DeletePriceListsErrors[503]>>>({
            path: 'v3/pricelists',
            query,
        });
    }

    /**
     * Get Price List
     *
     *  Returns a single *Price List*.
     */
    getPriceList(
        priceListId: PriceListsV3ApiSpecs.GetPriceListData['path']['price_list_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.GetPriceListResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/pricelists/${priceListId}`,
        });
    }

    /**
     * Update Price List
     *
     * Updates a *Price List*.
     */
    updatePriceList(
        priceListId: PriceListsV3ApiSpecs.UpdatePriceListData['path']['price_list_id'],
        requestBody: PriceListsV3ApiSpecs.UpdatePriceListData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.UpdatePriceListResponses[200]>>,(RequestErrorResponse<404, Required<PriceListsV3ApiSpecs.UpdatePriceListErrors[404]>> | RequestErrorResponse<409, Required<PriceListsV3ApiSpecs.UpdatePriceListErrors[409]>> | RequestErrorResponse<422, Required<PriceListsV3ApiSpecs.UpdatePriceListErrors[422]>>)>({
            path: `v3/pricelists/${priceListId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Price List
     *
     * Deletes a *Price List*. All associated price records are also removed.
     **Limits**
     * Limit of 1 concurrent request.
     */
    deletePriceList(
        priceListId: PriceListsV3ApiSpecs.DeletePriceListData['path']['price_list_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<PriceListsV3ApiSpecs.DeletePriceListResponses[204]>>,RequestErrorResponse<503, Required<PriceListsV3ApiSpecs.DeletePriceListErrors[503]>>>({
            path: `v3/pricelists/${priceListId}`,
        });
    }

    /**
     * Get Price List Assignments
     *
     * Fetches an array of `Price List Assignments` matching a particular Customer Group and Price List and Channel.
     */
    getListOfPriceListAssignments(
        query?: PriceListsV3ApiSpecs.GetListOfPriceListAssignmentsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.GetListOfPriceListAssignmentsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/pricelists/assignments',
            query,
        });
    }

    /**
     * Create Price List Assignments
     *
     * Creates a batch of `Price List Assignments`. 
     **Note:** The batch limit for `Price List Assignments` is 25.
     */
    createPriceListAssignments(
        requestBody: PriceListsV3ApiSpecs.CreatePriceListAssignmentsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.CreatePriceListAssignmentsResponses[200]>>,RequestErrorResponse<422, Required<PriceListsV3ApiSpecs.CreatePriceListAssignmentsErrors[422]>>>({
            path: 'v3/pricelists/assignments',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Price List Assignments
     *
     * Deletes one or more `Price List Assignments` objects from BigCommerce using a query parameter. You must use at least one query parameter.

     **Note:** Although each of the query parameters below is individually optional, you must provide at least one of them to identify which assignments to delete.
     */
    deletePriceListAssignments(
        query?: PriceListsV3ApiSpecs.DeletePriceListAssignmentsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<PriceListsV3ApiSpecs.DeletePriceListAssignmentsResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/pricelists/assignments',
            query,
        });
    }

    /**
     * Upsert Price List Assignment
     *
     * Upsert a single `Price List Assignment` for a `Price List`.
     **Note:**
     * Supports up to 25 simultaneous PUT requests. Running more than the allowed number of requests concurrently on the same store will result in a `429` status error and your additional requests will fail.        
     */
    upsertPriceListAssignment(
        priceListId: PriceListsV3ApiSpecs.UpsertPriceListAssignmentData['path']['price_list_id'],
        requestBody: PriceListsV3ApiSpecs.UpsertPriceListAssignmentData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.UpsertPriceListAssignmentResponses[200]>>,RequestErrorResponse<404, Required<PriceListsV3ApiSpecs.UpsertPriceListAssignmentErrors[404]>>>({
            path: `v3/pricelists/${priceListId}/assignments`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Create Batch of Price Lists Records
     *
     * Creates a batch of `Price Lists Records`; may include price list records from more than one price list. Concurrency limit of 10, batch size of 100. Use `PUT` instead to update records that already exist.

     Per-item validation failures — items referencing an unknown price list, unresolved `variant_id` or `sku`, items missing `price`, and items that duplicate another item in the same request — are rejected individually; the remaining valid items are saved, and `meta.saved_records` reflects the saved count.

     If any otherwise-valid item collides with an existing price record (same `price_list_id` + variant + `currency`), the entire batch is rolled back. `meta.saved_records` returns `0`, and the response identifies both the conflicting items and the items that would have been saved so you can fix the conflicts and resend the rest. See the `422` response for details.
     */
    createPriceListsRecords(
        requestBody: PriceListsV3ApiSpecs.CreatePriceListsRecordsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.CreatePriceListsRecordsResponses[200]>>,RequestErrorResponse<422, Required<PriceListsV3ApiSpecs.CreatePriceListsRecordsErrors[422]>>>({
            path: 'v3/pricelists/records',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Create or Update Batch of Price Lists Records
     *
     * Creates or updates a batch of `Price Lists Records`; may include price list records from more than one price list. Concurrency limit of 1. It is advised to use POST to get better performance when creating price records.

     <Note>
       Each request must include `price_list_id` and `currency`, plus either `variant_id` or `sku` to identify the variant.
     </Note>
     */
    upsertPriceListsRecords(
        requestBody: PriceListsV3ApiSpecs.UpsertPriceListsRecordsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.UpsertPriceListsRecordsResponses[200]>>,RequestErrorResponse<422, Required<PriceListsV3ApiSpecs.UpsertPriceListsRecordsErrors[422]>>>({
            path: 'v3/pricelists/records',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * List Price List Records
     *
     * Returns a list of *Price List Records* associated with a *Price List*.

     **Notes**
     * Supports up to 10 simultaneous GET requests. Running more than the allowed number of requests concurrently on the same store will result in a `429` status error and your additional requests will fail.
     * Store Pricelist Records data to reduce the number of calls and maximize performance.
     */
    getPriceListRecords(
        priceListId: PriceListsV3ApiSpecs.GetPriceListRecordsData['path']['price_list_id'],
        query?: PriceListsV3ApiSpecs.GetPriceListRecordsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.GetPriceListRecordsResponses[200]>>,RequestErrorResponse<429, Required<PriceListsV3ApiSpecs.GetPriceListRecordsErrors[429]>>>({
            path: `v3/pricelists/${priceListId}/records`,
            query,
        });
    }

    /**
     * Create Price List Records
     *
     * Creates *Price List Records*. 

     **Required Fields**
     * currency
     * one of `variant_id` or `sku`

     **Notes**
     * Batch requests support up to 100 items per request.
     * Up to 10 concurrent batch create requests are supported with this API. Running more than the allowed concurrent requests in parallel on the **same store** will cause a `429` error, and your additional requests will fail. You are encouraged to run requests sequentially with as many records per request as possible to maximize performance.
     * When creating a product with variants, or multiple SKUs, don't include records for the parent product SKU.
     */
    createPriceListRecords(
        priceListId: PriceListsV3ApiSpecs.CreatePriceListRecordsData['path']['price_list_id'],
        requestBody: PriceListsV3ApiSpecs.CreatePriceListRecordsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.CreatePriceListRecordsResponses[200]>>,(RequestErrorResponse<422, Required<PriceListsV3ApiSpecs.CreatePriceListRecordsErrors[422]>> | RequestErrorResponse<429, Required<PriceListsV3ApiSpecs.CreatePriceListRecordsErrors[429]>>)>({
            path: `v3/pricelists/${priceListId}/records`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Upsert Price List Records
     *
     * Creates or updates *Price List Records*. 

     **Required Fields**
     * currency

     **Notes**
     * Batch requests support up to 1,000 items per request.
     * Up to 2 concurrent batch upsert requests are supported with this API. Running more than the allowed concurrent requests in parallel on the **same store** will cause a `429` error, and your additional requests will fail. You are encouraged to run requests sequentially with as many records per request as possible to maximize performance.
     * When updating a product with variants, or multiple SKUs, don't include records for the parent product SKU.
     */
    upsertPriceListRecords(
        priceListId: PriceListsV3ApiSpecs.UpsertPriceListRecordsData['path']['price_list_id'],
        requestBody: PriceListsV3ApiSpecs.UpsertPriceListRecordsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.UpsertPriceListRecordsResponses[200]>>,(RequestErrorResponse<422, Required<PriceListsV3ApiSpecs.UpsertPriceListRecordsErrors[422]>> | RequestErrorResponse<429, Required<PriceListsV3ApiSpecs.UpsertPriceListRecordsErrors[429]>>)>({
            path: `v3/pricelists/${priceListId}/records`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Price List Record
     *
     * Deletes a *Price List Record*. Deleting the records does not delete the Price List. Optional parameters can be passed in.
     */
    deletePriceListRecords(
        priceListId: PriceListsV3ApiSpecs.DeletePriceListRecordsData['path']['price_list_id'],
        query?: PriceListsV3ApiSpecs.DeletePriceListRecordsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<PriceListsV3ApiSpecs.DeletePriceListRecordsResponses[204]>>,RequestErrorResponse<503, Required<PriceListsV3ApiSpecs.DeletePriceListRecordsErrors[503]>>>({
            path: `v3/pricelists/${priceListId}/records`,
            query,
        });
    }

    /**
     * List Price Records by Variant
     *
     * Returns *Price List Records* using the variant ID. Will also contain currency records.

     **Notes**
     * Supports up to 40 simultaneous GET requests. Running more than the allowed number of requests concurrently on the same store will result in a `429` status error, and your additional requests will fail.
     * Store Pricelist Records data to reduce the number of calls and maximize performance.

     */
    getPriceListRecordsByVariantId(
        priceListId: PriceListsV3ApiSpecs.GetPriceListRecordsByVariantIdData['path']['price_list_id'],
        variantId: PriceListsV3ApiSpecs.GetPriceListRecordsByVariantIdData['path']['variant_id'],
        query?: PriceListsV3ApiSpecs.GetPriceListRecordsByVariantIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.GetPriceListRecordsByVariantIdResponses[200]>>,RequestErrorResponse<429, Required<PriceListsV3ApiSpecs.GetPriceListRecordsByVariantIdErrors[429]>>>({
            path: `v3/pricelists/${priceListId}/records/${variantId}`,
            query,
        });
    }

    /**
     * Get Price Record by Currency Code
     *
     * Returns a *Price List Record* using the currency code. You can use optional parameters.
     **Notes**
     * Supports up to 50 simultaneous GET requests. Running more than the allowed number of requests concurrently on the same store will result in a `429` status error, and your additional requests will fail.
     */
    getPriceListRecord(
        priceListId: PriceListsV3ApiSpecs.GetPriceListRecordData['path']['price_list_id'],
        variantId: PriceListsV3ApiSpecs.GetPriceListRecordData['path']['variant_id'],
        currencyCode: PriceListsV3ApiSpecs.GetPriceListRecordData['path']['currency_code'],
        query?: PriceListsV3ApiSpecs.GetPriceListRecordData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.GetPriceListRecordResponses[200]>>,RequestErrorResponse<429, Required<PriceListsV3ApiSpecs.GetPriceListRecordErrors[429]>>>({
            path: `v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`,
            query,
        });
    }

    /**
     * Set Price List Record by Currency Code
     *
     * Creates or updates a *Price List Record* using the currency code.
     **Notes**
     * Supports up to 40 simultaneous PUT requests. Running more than the allowed number of requests concurrently on the same store will result in a `429` status error, and your additional requests will fail.
     */
    setPriceListRecord(
        priceListId: PriceListsV3ApiSpecs.SetPriceListRecordData['path']['price_list_id'],
        variantId: PriceListsV3ApiSpecs.SetPriceListRecordData['path']['variant_id'],
        currencyCode: PriceListsV3ApiSpecs.SetPriceListRecordData['path']['currency_code'],
        requestBody: PriceListsV3ApiSpecs.SetPriceListRecordData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.SetPriceListRecordResponses[200]>>,(RequestErrorResponse<404, Required<PriceListsV3ApiSpecs.SetPriceListRecordErrors[404]>> | RequestErrorResponse<409, Required<PriceListsV3ApiSpecs.SetPriceListRecordErrors[409]>> | RequestErrorResponse<422, Required<PriceListsV3ApiSpecs.SetPriceListRecordErrors[422]>> | RequestErrorResponse<429, Required<PriceListsV3ApiSpecs.SetPriceListRecordErrors[429]>>)>({
            path: `v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Price Record by Currency Code
     *
     * Deletes a *Price List Record* using the currency code.
     **Note:**
     * Supports up to 25 simultaneous DELETE requests. Running more than the allowed number of requests concurrently on the same store will result in a `429` status error, and your additional requests will fail.
     */
    deletePriceListRecord(
        priceListId: PriceListsV3ApiSpecs.DeletePriceListRecordData['path']['price_list_id'],
        variantId: PriceListsV3ApiSpecs.DeletePriceListRecordData['path']['variant_id'],
        currencyCode: PriceListsV3ApiSpecs.DeletePriceListRecordData['path']['currency_code'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<PriceListsV3ApiSpecs.DeletePriceListRecordResponses[204]>>,RequestErrorResponse<503, Required<PriceListsV3ApiSpecs.DeletePriceListRecordErrors[503]>>>({
            path: `v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`,
        });
    }
}
