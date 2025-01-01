export type customsInformation = {
    product_id?: number;
    country_of_origin?: string;
    commodity_description?: string;
    international_shipping?: boolean;
    hs_codes?: harmonizedSystemCodes;
    readonly created_at?: string;
    readonly updated_at?: string;
};
export type customsInformation_request = {
    product_id: number;
    country_of_origin: string;
    commodity_description: string;
    international_shipping: boolean;
    hs_codes: harmonizedSystemCodes;
};
export type error_Full = {
    [key: string]: unknown;
};
export type harmonizedSystemCodes = {
    [key: string]: unknown;
};
export type metaCollection = {
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
export type ParameterAccept = string;
export type ParameterContentType = string;
export type Parameterstore_hash = string;
export type shippingSettings = {
    checkout?: {
        country_list_strategy?: 'DISPLAY_ALL_COUNTRIES' | 'DISPLAY_ONLY_SHIPPABLE_COUNTRIES';
    };
};
export type country_list_strategy = 'DISPLAY_ALL_COUNTRIES' | 'DISPLAY_ONLY_SHIPPABLE_COUNTRIES';
export type GetCustomsInformationData = {
    headers: {
        Accept: string;
    };
    query?: {
        limit?: number;
        page?: number;
        'product_id:in'?: Array<(number)>;
    };
};
export type GetCustomsInformationResponse = ({
    data?: Array<customsInformation>;
    meta?: metaCollection;
});
export type GetCustomsInformationError = unknown;
export type DeleteCustomsInformationData = {
    headers: {
        Accept: string;
    };
    query: {
        'product_id:in': Array<(number)>;
    };
};
export type DeleteCustomsInformationResponse = (void);
export type DeleteCustomsInformationError = unknown;
export type UpdateCustomsInformationData = {
    body?: Array<customsInformation_request>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateCustomsInformationResponse = ({
    data?: Array<customsInformation>;
});
export type UpdateCustomsInformationError = unknown;
export type GetShippingSettingsData = {
    headers: {
        Accept: string;
    };
};
export type GetShippingSettingsResponse = ({
    data?: shippingSettings;
    meta?: {
        [key: string]: unknown;
    };
});
export type GetShippingSettingsError = unknown;
export type UpdateShippingSettingsData = {
    body?: shippingSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateShippingSettingsResponse = ({
    data?: shippingSettings;
    meta?: {
        [key: string]: unknown;
    };
});
export type UpdateShippingSettingsError = unknown;
