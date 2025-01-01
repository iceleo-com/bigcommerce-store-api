import RequestService from '../helpers/request/request-service';
import * as PriceListsV3ApiSpecs from '../generated/price-lists-v3';

export default class PriceListsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Price Lists
     *
     * Returns a list of *Price Lists*. Optional parameters can be passed in.
     */
    getPriceLists(
        query?: PriceListsV3ApiSpecs.GetPriceListsData['query'],
    ) {
        return this.request.get<PriceListsV3ApiSpecs.GetPriceListsResponse, any>({
            path: 'v3/pricelists',
            query,
        });
    }

    /**
     * Create a Price List
     *
     * Creates a *Price List*.

     **Required Fields**
     * name
     */
    createPriceList(
        requestBody: PriceListsV3ApiSpecs.CreatePriceListData['body'],
    ) {
        return this.request.post<PriceListsV3ApiSpecs.CreatePriceListResponse, PriceListsV3ApiSpecs.CreatePriceListError>({
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
        return this.request.delete<any, any>({
            path: 'v3/pricelists',
            query,
        });
    }

    /**
     * Get a Price List
     *
     *  Returns a single *Price List*.
     */
    getPriceList(
    ) {
        return this.request.get<PriceListsV3ApiSpecs.GetPriceListResponse, any>({
            path: 'v3/pricelists/{price_list_id}',
        });
    }

    /**
     * Update a Price List
     *
     * Updates a *Price List*.
     */
    updatePriceList(
        requestBody: PriceListsV3ApiSpecs.UpdatePriceListData['body'],
    ) {
        return this.request.put<PriceListsV3ApiSpecs.UpdatePriceListResponse, PriceListsV3ApiSpecs.UpdatePriceListError>({
            path: 'v3/pricelists/{price_list_id}',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Price List
     *
     * Deletes a *Price List*. All associated price records are also removed.
     **Limits**
     * Limit of 1 concurrent request.
     */
    deletePriceList(
    ) {
        return this.request.delete<any, any>({
            path: 'v3/pricelists/{price_list_id}',
        });
    }

    /**
     * Create Batch of Price Lists Records
     *
     * Creates a batch of `Price Lists Records`; may include price list records from more than one price list.  Concurrency limit of 1.
     */
    upsertPriceListsRecords(
        requestBody: PriceListsV3ApiSpecs.UpsertPriceListsRecordsData['body'],
    ) {
        return this.request.put<PriceListsV3ApiSpecs.UpsertPriceListsRecordsResponse, PriceListsV3ApiSpecs.UpsertPriceListsRecordsError>({
            path: 'v3/pricelists/records',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get All Price List Records
     *
     * Returns a list of *Price List Records* associated with a *Price List*.

     **Notes**
     * Supports up to 10 simultaneous GET requests. Running more than the allowed number of requests concurrently on the same store will result in a `429` status error and your additional requests will fail.
     * Store Pricelist Records data to reduce the number of calls and maximize performance.
     */
    getPriceListRecords(
        query?: PriceListsV3ApiSpecs.GetPriceListRecordsData['query'],
    ) {
        return this.request.get<PriceListsV3ApiSpecs.GetPriceListRecordsResponse, PriceListsV3ApiSpecs.GetPriceListRecordsError>({
            path: 'v3/pricelists/{price_list_id}/records',
            query,
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
        requestBody: PriceListsV3ApiSpecs.UpsertPriceListRecordsData['body'],
    ) {
        return this.request.put<PriceListsV3ApiSpecs.UpsertPriceListRecordsResponse, PriceListsV3ApiSpecs.UpsertPriceListRecordsError>({
            path: 'v3/pricelists/{price_list_id}/records',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Price List Record
     *
     * Deletes a *Price List Record*. Deleting the records does not delete the Price List. Optional parameters can be passed in.
     */
    deletePriceListRecords(
        query?: PriceListsV3ApiSpecs.DeletePriceListRecordsData['query'],
    ) {
        return this.request.delete<any, any>({
            path: 'v3/pricelists/{price_list_id}/records',
            query,
        });
    }

    /**
     * Get Price Records by Variant
     *
     * Returns *Price List Records* using the variant ID. Will also contain currency records.

     **Notes**
     * Supports up to 40 simultaneous GET requests. Running more than the allowed number of requests concurrently on the same store will result in a `429` status error, and your additional requests will fail.
     * Store Pricelist Records data to reduce the number of calls and maximize performance.

     */
    getPriceListRecordsByVariantId(
        query?: PriceListsV3ApiSpecs.GetPriceListRecordsByVariantIdData['query'],
    ) {
        return this.request.get<PriceListsV3ApiSpecs.GetPriceListRecordsByVariantIdResponse, PriceListsV3ApiSpecs.GetPriceListRecordsByVariantIdError>({
            path: 'v3/pricelists/{price_list_id}/records/{variant_id}',
            query,
        });
    }

    /**
     * Get a Price Record by Currency Code
     *
     * Returns a *Price List Record* using the currency code. You can use optional parameters.
     **Notes**
     * Supports up to 50 simultaneous GET requests. Running more than the allowed number of requests concurrently on the same store will result in a `429` status error, and your additional requests will fail.
     */
    getPriceListRecord(
        query?: PriceListsV3ApiSpecs.GetPriceListRecordData['query'],
    ) {
        return this.request.get<PriceListsV3ApiSpecs.GetPriceListRecordResponse, PriceListsV3ApiSpecs.GetPriceListRecordError>({
            path: 'v3/pricelists/{price_list_id}/records/{variant_id}/{currency_code}',
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
        requestBody: PriceListsV3ApiSpecs.SetPriceListRecordData['body'],
    ) {
        return this.request.put<PriceListsV3ApiSpecs.SetPriceListRecordResponse, PriceListsV3ApiSpecs.SetPriceListRecordError>({
            path: 'v3/pricelists/{price_list_id}/records/{variant_id}/{currency_code}',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Price Record by Currency Code
     *
     * Deletes a *Price List Record* using the currency code.
     **Note:**
     * Supports up to 25 simultaneous DELETE requests. Running more than the allowed number of requests concurrently on the same store will result in a `429` status error, and your additional requests will fail.
     */
    deletePriceListRecord(
    ) {
        return this.request.delete<any, any>({
            path: 'v3/pricelists/{price_list_id}/records/{variant_id}/{currency_code}',
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
        return this.request.get<PriceListsV3ApiSpecs.GetListOfPriceListAssignmentsResponse, any>({
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
        return this.request.post<any, PriceListsV3ApiSpecs.CreatePriceListAssignmentsError>({
            path: 'v3/pricelists/assignments',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Price List Assignments
     *
     * Deletes one or more `Price List Assignments` objects from BigCommerce using a query parameter. You must use at least one query parameter. 
     */
    deletePriceListAssignments(
        query?: PriceListsV3ApiSpecs.DeletePriceListAssignmentsData['query'],
    ) {
        return this.request.delete<any, any>({
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
        requestBody: PriceListsV3ApiSpecs.UpsertPriceListAssignmentData['body'],
    ) {
        return this.request.put<PriceListsV3ApiSpecs.UpsertPriceListAssignmentResponse, PriceListsV3ApiSpecs.UpsertPriceListAssignmentError>({
            path: 'v3/pricelists/{price_list_id}/assignments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
