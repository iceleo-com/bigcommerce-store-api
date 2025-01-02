import RequestService from '../helpers/request/request-service';
import * as PriceListsV3ApiSpecs from '../generated/price-lists-v3';
export default class PriceListsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPriceLists(query?: PriceListsV3ApiSpecs.GetPriceListsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<PriceListsV3ApiSpecs.GetPriceListsResponse, any>>;
    createPriceList(requestBody: PriceListsV3ApiSpecs.CreatePriceListData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<PriceListsV3ApiSpecs.CreatePriceListResponse, PriceListsV3ApiSpecs.CreatePriceListError>>;
    deletePriceLists(query?: PriceListsV3ApiSpecs.DeletePriceListsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getPriceList(): Promise<import("../helpers/request/request-service.types").RequestResponse<PriceListsV3ApiSpecs.GetPriceListResponse, any>>;
    updatePriceList(requestBody: PriceListsV3ApiSpecs.UpdatePriceListData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<PriceListsV3ApiSpecs.UpdatePriceListResponse, PriceListsV3ApiSpecs.UpdatePriceListError>>;
    deletePriceList(): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    upsertPriceListsRecords(requestBody: PriceListsV3ApiSpecs.UpsertPriceListsRecordsData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<PriceListsV3ApiSpecs.SuccessBatchResponse, PriceListsV3ApiSpecs.PriceRecordBatchErrorResponse>>;
    getPriceListRecords(query?: PriceListsV3ApiSpecs.GetPriceListRecordsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<PriceListsV3ApiSpecs.GetPriceListRecordsResponse, PriceListsV3ApiSpecs.ErrorResponse>>;
    upsertPriceListRecords(requestBody: PriceListsV3ApiSpecs.UpsertPriceListRecordsData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<PriceListsV3ApiSpecs.UpsertPriceListRecordsResponse, PriceListsV3ApiSpecs.UpsertPriceListRecordsError>>;
    deletePriceListRecords(query?: PriceListsV3ApiSpecs.DeletePriceListRecordsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getPriceListRecordsByVariantId(query?: PriceListsV3ApiSpecs.GetPriceListRecordsByVariantIdData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<PriceListsV3ApiSpecs.GetPriceListRecordsByVariantIdResponse, PriceListsV3ApiSpecs.ErrorResponse>>;
    getPriceListRecord(query?: PriceListsV3ApiSpecs.GetPriceListRecordData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<PriceListsV3ApiSpecs.GetPriceListRecordResponse, PriceListsV3ApiSpecs.ErrorResponse>>;
    setPriceListRecord(requestBody: PriceListsV3ApiSpecs.SetPriceListRecordData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<PriceListsV3ApiSpecs.SetPriceListRecordResponse, PriceListsV3ApiSpecs.SetPriceListRecordError>>;
    deletePriceListRecord(): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getListOfPriceListAssignments(query?: PriceListsV3ApiSpecs.GetListOfPriceListAssignmentsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<PriceListsV3ApiSpecs.AssignmentsForGetResponse, any>>;
    createPriceListAssignments(requestBody: PriceListsV3ApiSpecs.CreatePriceListAssignmentsData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, PriceListsV3ApiSpecs.PriceListAssignmentsBatchErrorResponse>>;
    deletePriceListAssignments(query?: PriceListsV3ApiSpecs.DeletePriceListAssignmentsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    upsertPriceListAssignment(requestBody: PriceListsV3ApiSpecs.UpsertPriceListAssignmentData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<PriceListsV3ApiSpecs.AssignmentForPutResponse, unknown>>;
}
