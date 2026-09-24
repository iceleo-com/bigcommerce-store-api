import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ShippingV3ApiSpecs from '../generated/shipping-v3';
export * as ShippingV3ApiSpecs from '../generated/shipping-v3';
export declare class ShippingV3Api {
    private readonly request;
    constructor(request: RequestService);
    getCustomsInformation(query?: ShippingV3ApiSpecs.GetCustomsInformationData['query']): Promise<RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.CustomsInformationGetCustomsInformationResponse200>> | RequestErrorResponse<400, Required<ShippingV3ApiSpecs.ErrorResponse>>>;
    updateCustomsInformation(requestBody: ShippingV3ApiSpecs.UpdateCustomsInformationData['body']): Promise<RequestErrorResponse<400, Required<ShippingV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.CustomsInformationUpdateCustomsInformationResponse200>> | RequestErrorResponse<413, Required<ShippingV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<422, Required<ShippingV3ApiSpecs.ErrorResponse>>>;
    deleteCustomsInformation(query?: ShippingV3ApiSpecs.DeleteCustomsInformationData['query']): Promise<RequestErrorResponse<400, Required<ShippingV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getShippingSettings(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.ShippingSettingsGetShippingSettingsResponse200>>>;
    updateShippingSettings(requestBody: ShippingV3ApiSpecs.UpdateShippingSettingsData['body']): Promise<RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.ShippingSettingsUpdateShippingSettingsResponse200>> | RequestErrorResponse<400, Required<ShippingV3ApiSpecs.UpdateShippingSettingsRequestBadRequestError>> | RequestErrorResponse<422, Required<ShippingV3ApiSpecs.UpdateShippingSettingsRequestUnprocessableEntityError>>>;
    getChannelShippingSettings(channelId: ShippingV3ApiSpecs.GetChannelShippingSettingsData['path']['channel_id']): Promise<RequestErrorResponse<400, Required<ShippingV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.ShippingSettingsGetChannelShippingSettingsResponse200>>>;
    updateChannelShippingSettings(channelId: ShippingV3ApiSpecs.UpdateChannelShippingSettingsData['path']['channel_id'], requestBody: ShippingV3ApiSpecs.UpdateChannelShippingSettingsData['body']): Promise<RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.ShippingSettingsUpdateChannelShippingSettingsResponse200>> | RequestErrorResponse<400, Required<ShippingV3ApiSpecs.UpdateChannelShippingSettingsRequestBadRequestError>> | RequestErrorResponse<422, Required<ShippingV3ApiSpecs.UpdateChannelShippingSettingsRequestUnprocessableEntityError>>>;
}
