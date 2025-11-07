import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PriceListsV3ApiSpecs from '../generated/price-lists-v3';
export * as PriceListsV3ApiSpecs from '../generated/price-lists-v3';
export declare class PriceListsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPriceLists(query?: PriceListsV3ApiSpecs.GetPriceListsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            id?: number;
            date_created?: string;
            date_modified?: string;
        } & {
            name: string;
            active?: boolean;
        }>;
        meta?: {
            pagination?: {
                total?: number;
                count?: number;
                per_page?: number;
                current_page?: number;
                total_pages?: number;
            };
            cursor_pagination?: {
                count?: number;
                per_page?: number;
                start_cursor?: string;
                end_cursor?: string;
                links?: {
                    previous?: string;
                    current?: string;
                    next?: string;
                };
            };
        };
    }>>>;
    createPriceList(requestBody: PriceListsV3ApiSpecs.CreatePriceListData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            date_created?: string;
            date_modified?: string;
        } & {
            name: string;
            active?: boolean;
        };
        meta?: PriceListsV3ApiSpecs.Meta;
    }>> | RequestErrorResponse<409, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deletePriceLists(query?: PriceListsV3ApiSpecs.DeletePriceListsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    } | null>>>;
    getPriceList(priceListId: PriceListsV3ApiSpecs.GetPriceListData['path']['price_list_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            date_created?: string;
            date_modified?: string;
            name: string;
            active?: boolean;
        };
        meta?: PriceListsV3ApiSpecs.Meta;
    }>>>;
    updatePriceList(priceListId: PriceListsV3ApiSpecs.UpdatePriceListData['path']['price_list_id'], requestBody: PriceListsV3ApiSpecs.UpdatePriceListData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            date_created?: string;
            date_modified?: string;
        } & {
            name: string;
            active?: boolean;
        };
        meta?: PriceListsV3ApiSpecs.Meta;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>> | RequestErrorResponse<409, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deletePriceList(priceListId: PriceListsV3ApiSpecs.DeletePriceListData['path']['price_list_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    upsertPriceListsRecords(requestBody: PriceListsV3ApiSpecs.UpsertPriceListsRecordsData['body']): Promise<RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.SuccessBatchResponse>> | RequestErrorResponse<422, Required<PriceListsV3ApiSpecs.PriceRecordBatchErrorResponse>>>;
    getPriceListRecords(priceListId: PriceListsV3ApiSpecs.GetPriceListRecordsData['path']['price_list_id'], query?: PriceListsV3ApiSpecs.GetPriceListRecordsData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<{
            readonly calculated_price?: number;
            date_created?: string;
            date_modified?: string;
            readonly product_id?: number;
        } & {
            price_list_id?: number;
            variant_id?: number;
            sku?: string;
            currency?: string;
        } & {
            price?: number;
            sale_price?: number;
            retail_price?: number;
            map_price?: number;
            bulk_pricing_tiers?: Array<{
                quantity_min?: number;
                quantity_max?: number | null;
                type?: "fixed" | "price" | "percent";
                amount?: number;
            }>;
            sku?: string;
        }>;
        meta?: {
            pagination?: {
                total?: number;
                count?: number;
                per_page?: number;
                current_page?: number;
                total_pages?: number;
            };
            cursor_pagination?: {
                count?: number;
                per_page?: number;
                start_cursor?: string;
                end_cursor?: string;
                links?: {
                    previous?: string;
                    current?: string;
                    next?: string;
                };
            };
        };
    }>> | RequestErrorResponse<429, Required<PriceListsV3ApiSpecs.ErrorResponse>>>;
    upsertPriceListRecords(priceListId: PriceListsV3ApiSpecs.UpsertPriceListRecordsData['path']['price_list_id'], requestBody: PriceListsV3ApiSpecs.UpsertPriceListRecordsData['body']): Promise<RequestErrorResponse<429, Required<PriceListsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: {
            [key: string]: unknown;
        };
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<422, Required<{
        batch_errors?: Array<{
            data?: {
                price_list_id?: number;
                variant_id?: number;
                sku?: string;
                currency?: string;
            };
            field_errors?: {
                [key: string]: unknown;
            };
        }>;
    }>>>;
    deletePriceListRecords(priceListId: PriceListsV3ApiSpecs.DeletePriceListRecordsData['path']['price_list_id'], query?: PriceListsV3ApiSpecs.DeletePriceListRecordsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getPriceListRecordsByVariantId(priceListId: PriceListsV3ApiSpecs.GetPriceListRecordsByVariantIdData['path']['price_list_id'], variantId: PriceListsV3ApiSpecs.GetPriceListRecordsByVariantIdData['path']['variant_id'], query?: PriceListsV3ApiSpecs.GetPriceListRecordsByVariantIdData['query']): Promise<RequestErrorResponse<429, Required<PriceListsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            readonly calculated_price?: number;
            date_created?: string;
            date_modified?: string;
            readonly product_id?: number;
        } & {
            price_list_id?: number;
            variant_id?: number;
            sku?: string;
            currency?: string;
        } & {
            price?: number;
            sale_price?: number;
            retail_price?: number;
            map_price?: number;
            bulk_pricing_tiers?: Array<{
                quantity_min?: number;
                quantity_max?: number;
                type?: "fixed" | "price" | "percent";
                amount?: number;
            }>;
            sku?: string;
        }>;
        meta?: {
            pagination?: {
                total?: number;
                count?: number;
                per_page?: number;
                current_page?: number;
                total_pages?: number;
            };
            cursor_pagination?: {
                count?: number;
                per_page?: number;
                start_cursor?: string;
                end_cursor?: string;
                links?: {
                    previous?: string;
                    current?: string;
                    next?: string;
                };
            };
        };
    }>>>;
    getPriceListRecord(priceListId: PriceListsV3ApiSpecs.GetPriceListRecordData['path']['price_list_id'], variantId: PriceListsV3ApiSpecs.GetPriceListRecordData['path']['variant_id'], currencyCode: PriceListsV3ApiSpecs.GetPriceListRecordData['path']['currency_code'], query?: PriceListsV3ApiSpecs.GetPriceListRecordData['query']): Promise<RequestErrorResponse<429, Required<PriceListsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: {
            readonly calculated_price?: number;
            date_created?: string;
            date_modified?: string;
            readonly product_id?: number;
        } & {
            price_list_id?: number;
            variant_id?: number;
            sku?: string;
            currency?: string;
        } & {
            price?: number;
            sale_price?: number;
            retail_price?: number;
            map_price?: number;
            bulk_pricing_tiers?: Array<{
                quantity_min?: number;
                quantity_max?: number;
                type?: "fixed" | "price" | "percent";
                amount?: number;
            }>;
            sku?: string;
        };
        meta?: PriceListsV3ApiSpecs.Meta;
    }>>>;
    setPriceListRecord(priceListId: PriceListsV3ApiSpecs.SetPriceListRecordData['path']['price_list_id'], variantId: PriceListsV3ApiSpecs.SetPriceListRecordData['path']['variant_id'], currencyCode: PriceListsV3ApiSpecs.SetPriceListRecordData['path']['currency_code'], requestBody: PriceListsV3ApiSpecs.SetPriceListRecordData['body']): Promise<RequestErrorResponse<429, Required<PriceListsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: {
            readonly calculated_price?: number;
            date_created?: string;
            date_modified?: string;
            readonly product_id?: number;
        } & {
            price_list_id?: number;
            variant_id?: number;
            currency?: string;
        } & {
            price?: number;
            sale_price?: number;
            retail_price?: number;
            map_price?: number;
            bulk_pricing_tiers?: Array<{
                quantity_min?: number;
                quantity_max?: number;
                type?: "fixed" | "price" | "percent";
                amount?: number;
            }>;
        };
        meta?: PriceListsV3ApiSpecs.Meta;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>> | RequestErrorResponse<409, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deletePriceListRecord(priceListId: PriceListsV3ApiSpecs.DeletePriceListRecordData['path']['price_list_id'], variantId: PriceListsV3ApiSpecs.DeletePriceListRecordData['path']['variant_id'], currencyCode: PriceListsV3ApiSpecs.DeletePriceListRecordData['path']['currency_code']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getListOfPriceListAssignments(query?: PriceListsV3ApiSpecs.GetListOfPriceListAssignmentsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.AssignmentsForGetResponse>>>;
    createPriceListAssignments(requestBody: PriceListsV3ApiSpecs.CreatePriceListAssignmentsData['body']): Promise<RequestSuccessResponse<200, Required<unknown>> | RequestErrorResponse<422, Required<PriceListsV3ApiSpecs.PriceListAssignmentsBatchErrorResponse>>>;
    deletePriceListAssignments(query?: PriceListsV3ApiSpecs.DeletePriceListAssignmentsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    upsertPriceListAssignment(priceListId: PriceListsV3ApiSpecs.UpsertPriceListAssignmentData['path']['price_list_id'], requestBody: PriceListsV3ApiSpecs.UpsertPriceListAssignmentData['body']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<PriceListsV3ApiSpecs.AssignmentForPutResponse>>>;
}
