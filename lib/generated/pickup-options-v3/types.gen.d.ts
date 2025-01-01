export type AvailableItem = {
    variant_id?: number;
    quantity?: number;
};
export type Coordinates = {
    latitude: number;
    longitude: number;
};
export type Item = {
    variant_id: number;
    quantity: number;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type PickupMethod = {
    id?: number;
    location_id?: number;
    display_name?: string;
    collection_instructions?: string;
    collection_time_description?: string;
};
export type PickupOption = {
    pickup_method?: PickupMethod;
    available_items?: Array<AvailableItem>;
};
export type PickupOptionsResponse = {
    results?: Array<{
        pickup_options?: Array<PickupOption>;
    }>;
};
export type PickupRequestPayload = {
    search_area: SearchArea;
    items: Array<Item>;
};
export type SearchArea = {
    coordinates?: Coordinates;
    radius: {
        value: number;
        unit: 'KM' | 'MI';
    };
};
export type unit = 'KM' | 'MI';
export type PostPickupOptionsData = {
    body: PickupRequestPayload;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type PostPickupOptionsResponse = (PickupOptionsResponse);
export type PostPickupOptionsError = unknown;
