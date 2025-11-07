export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type CustomsInformationRequest = {
    product_id: number;
    country_of_origin: string;
    commodity_description: string;
    international_shipping: true | false;
    hs_codes: HarmonizedSystemCodes;
};
export type ShippingSettings = {
    checkout?: {
        country_list_strategy?: 'DISPLAY_ALL_COUNTRIES' | 'DISPLAY_ONLY_SHIPPABLE_COUNTRIES';
        out_of_delivery_zone_message?: string;
    };
};
export type ChannelShippingSettings = {
    checkout?: {
        out_of_delivery_zone_message?: string;
    };
};
export type CustomsInformation = {
    product_id?: number;
    country_of_origin?: string;
    commodity_description?: string;
    international_shipping?: true | false;
    hs_codes?: HarmonizedSystemCodes;
    readonly created_at?: string;
    readonly updated_at?: string;
};
export type HarmonizedSystemCodes = {
    [key: string]: unknown;
};
export type MetaCollection = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_page?: number;
        links?: {
            previous?: string;
            next?: string;
            current?: string;
        };
    };
};
export type ErrorFull = {
    [key: string]: unknown;
};
export type CustomsInformationWritable = {
    product_id?: number;
    country_of_origin?: string;
    commodity_description?: string;
    international_shipping?: true | false;
    hs_codes?: HarmonizedSystemCodesWritable;
};
export type HarmonizedSystemCodesWritable = {
    [key: string]: unknown;
};
export type ErrorFullWritable = {
    [key: string]: unknown;
};
export type StoreHash = string;
export type Accept = string;
export type ContentType = string;
export type DeleteCustomsInformationData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'product_id:in': Array<number>;
    };
    url: '/shipping/products/customs-information';
};
export type DeleteCustomsInformationResponses = {
    204: void;
};
export type DeleteCustomsInformationResponse = DeleteCustomsInformationResponses[keyof DeleteCustomsInformationResponses];
export type GetCustomsInformationData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'product_id:in'?: Array<number>;
        page?: number;
        limit?: number;
    };
    url: '/shipping/products/customs-information';
};
export type GetCustomsInformationResponses = {
    200: {
        data?: Array<CustomsInformation>;
        meta?: MetaCollection;
    };
};
export type GetCustomsInformationResponse = GetCustomsInformationResponses[keyof GetCustomsInformationResponses];
export type UpdateCustomsInformationData = {
    body?: Array<CustomsInformationRequest>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/shipping/products/customs-information';
};
export type UpdateCustomsInformationResponses = {
    200: {
        data?: Array<CustomsInformation>;
    };
};
export type UpdateCustomsInformationResponse = UpdateCustomsInformationResponses[keyof UpdateCustomsInformationResponses];
export type GetShippingSettingsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/shipping/settings';
};
export type GetShippingSettingsResponses = {
    200: {
        data?: ShippingSettings;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type GetShippingSettingsResponse = GetShippingSettingsResponses[keyof GetShippingSettingsResponses];
export type UpdateShippingSettingsData = {
    body?: ShippingSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/shipping/settings';
};
export type UpdateShippingSettingsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type UpdateShippingSettingsError = UpdateShippingSettingsErrors[keyof UpdateShippingSettingsErrors];
export type UpdateShippingSettingsResponses = {
    200: {
        data?: ShippingSettings;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type UpdateShippingSettingsResponse = UpdateShippingSettingsResponses[keyof UpdateShippingSettingsResponses];
export type GetChannelShippingSettingsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: string;
    };
    query?: never;
    url: '/shipping/settings/channels/{channel_id}';
};
export type GetChannelShippingSettingsResponses = {
    200: {
        data?: ChannelShippingSettings;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type GetChannelShippingSettingsResponse = GetChannelShippingSettingsResponses[keyof GetChannelShippingSettingsResponses];
export type UpdateChannelShippingSettingsData = {
    body?: ChannelShippingSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: string;
    };
    query?: never;
    url: '/shipping/settings/channels/{channel_id}';
};
export type UpdateChannelShippingSettingsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type UpdateChannelShippingSettingsError = UpdateChannelShippingSettingsErrors[keyof UpdateChannelShippingSettingsErrors];
export type UpdateChannelShippingSettingsResponses = {
    200: {
        data?: ChannelShippingSettings;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type UpdateChannelShippingSettingsResponse = UpdateChannelShippingSettingsResponses[keyof UpdateChannelShippingSettingsResponses];
