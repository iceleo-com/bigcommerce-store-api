import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as AccessTokensV3ApiSpecs from '../generated/access-tokens-v3';
export * as AccessTokensV3ApiSpecs from '../generated/access-tokens-v3';
export declare class AccessTokensV3Api {
    private readonly request;
    constructor(request: RequestService);
    createPaymentAccessToken(requestBody: AccessTokensV3ApiSpecs.CreatePaymentAccessTokenData['body']): Promise<RequestSuccessResponse<201, Required<AccessTokensV3ApiSpecs.TokensCreatePaymentAccessTokenResponse201>> | RequestErrorResponse<400, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenRequestBadRequestError>> | RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenRequestUnauthorizedError>> | RequestErrorResponse<404, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenRequestNotFoundError>> | RequestErrorResponse<409, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenRequestConflictError>> | RequestErrorResponse<422, Required<AccessTokensV3ApiSpecs.CreatePaymentAccessTokenRequestUnprocessableEntityError>>>;
    createToken(): Promise<RequestSuccessResponse<201, Required<AccessTokensV3ApiSpecs.CreateTokenResponse>> | RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.BaseErrorResponse>>>;
    listInstrumentsForStore(query?: AccessTokensV3ApiSpecs.ListInstrumentsForStoreData['query']): Promise<RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.BaseErrorResponse>> | RequestSuccessResponse<200, Required<AccessTokensV3ApiSpecs.GetStoredInstrumentsResponse>>>;
    bulkImportInstruments(requestBody: AccessTokensV3ApiSpecs.BulkImportInstrumentsData['body']): Promise<RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.BaseErrorResponse>> | RequestSuccessResponse<200, Required<AccessTokensV3ApiSpecs.ManageInstrumentsBulkImportInstrumentsResponse200>> | RequestErrorResponse<422, Required<AccessTokensV3ApiSpecs.BulkImportInstrumentsRequestUnprocessableEntityError>>>;
    updateInstrument(requestBody: AccessTokensV3ApiSpecs.UpdateInstrumentData['body']): Promise<RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.BaseErrorResponse>> | RequestSuccessResponse<200, Required<AccessTokensV3ApiSpecs.ManageInstrumentsUpdateInstrumentResponse200>> | RequestErrorResponse<404, Required<AccessTokensV3ApiSpecs.BaseErrorResponse>> | RequestErrorResponse<422, Required<AccessTokensV3ApiSpecs.BaseErrorResponse>>>;
    bulkDeleteInstruments(query?: AccessTokensV3ApiSpecs.BulkDeleteInstrumentsData['query']): Promise<RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.BaseErrorResponse>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<404, Required<AccessTokensV3ApiSpecs.BulkDeleteInstrumentsRequestNotFoundError>>>;
    unvaultInstrument(instrumentToken: AccessTokensV3ApiSpecs.UnvaultInstrumentData['path']['instrument_token']): Promise<RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.BaseErrorResponse>> | RequestErrorResponse<404, Required<AccessTokensV3ApiSpecs.BaseErrorResponse>> | RequestErrorResponse<422, Required<AccessTokensV3ApiSpecs.BaseErrorResponse>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    listMethodsForStore(query?: AccessTokensV3ApiSpecs.ListMethodsForStoreData['query']): Promise<RequestErrorResponse<401, Required<AccessTokensV3ApiSpecs.BaseErrorResponse>> | RequestSuccessResponse<200, Required<AccessTokensV3ApiSpecs.GetAvailableMethodsResponse>>>;
}
