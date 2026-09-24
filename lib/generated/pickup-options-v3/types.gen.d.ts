export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type PickupRequestPayload = {
    search_area: SearchArea;
    items: Array<Item>;
};
export type Item = {
    variant_id: number;
    quantity: number;
};
export type SearchArea = {
    coordinates?: Coordinates;
    radius: SearchAreaRadius;
};
export type SearchAreaRadius = {
    value: number;
    unit: SearchAreaRadiusUnit;
};
export type SearchAreaRadiusUnit = 'KM' | 'MI';
export type Coordinates = {
    latitude: number;
    longitude: number;
};
export type PickupOptionsResponse = {
    results?: Array<PickupOptionsResponseResultsItems>;
};
export type PickupOptionsResponseResultsItems = {
    pickup_options?: Array<PickupOption>;
};
export type PickupOption = {
    pickup_method?: PickupMethod;
    available_items?: Array<AvailableItem>;
};
export type AvailableItem = {
    variant_id?: number;
    quantity?: number;
};
export type PickupMethod = {
    id?: number;
    location_id?: number;
    display_name?: string;
    collection_instructions?: string;
    collection_time_description?: string;
};
export type PostPickupOptionsData = {
    body?: PickupRequestPayload;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/pickup/options';
};
export type PostPickupOptionsResponses = {
    200: PickupOptionsResponse;
};
export type PostPickupOptionsResponse = PostPickupOptionsResponses[keyof PostPickupOptionsResponses];
