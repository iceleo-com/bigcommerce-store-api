import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ShippingV3ApiSpecs from '../generated/shipping-v3';
export * as ShippingV3ApiSpecs from '../generated/shipping-v3';
export declare class ShippingV3Api {
    private readonly request;
    constructor(request: RequestService);
    getCustomsInformation(query?: ShippingV3ApiSpecs.GetCustomsInformationData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ShippingV3ApiSpecs.CustomsInformation>;
        meta?: ShippingV3ApiSpecs.MetaCollection;
    }>>>;
    updateCustomsInformation(requestBody: ShippingV3ApiSpecs.UpdateCustomsInformationData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ShippingV3ApiSpecs.CustomsInformation>;
    }>>>;
    deleteCustomsInformation(query?: ShippingV3ApiSpecs.DeleteCustomsInformationData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getShippingSettings(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: ShippingV3ApiSpecs.ShippingSettings;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    updateShippingSettings(requestBody: ShippingV3ApiSpecs.UpdateShippingSettingsData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: ShippingV3ApiSpecs.ShippingSettings;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    getChannelShippingSettings(channelId: ShippingV3ApiSpecs.GetChannelShippingSettingsData['path']['channel_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: ShippingV3ApiSpecs.ChannelShippingSettings;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    updateChannelShippingSettings(channelId: ShippingV3ApiSpecs.UpdateChannelShippingSettingsData['path']['channel_id'], requestBody: ShippingV3ApiSpecs.UpdateChannelShippingSettingsData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: ShippingV3ApiSpecs.ChannelShippingSettings;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
}
