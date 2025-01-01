export type MetaOpen = {
    [key: string]: unknown;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type Parameteridin = Array<(number)>;
export type Parameteridin_required = Array<(number)>;
export type Parameterproduct_idin = Array<(number)>;
export type ProductTaxProperty = {
    product_id: number;
    tax_properties: {
        [key: string]: unknown;
    };
};
export type Property = {
    readonly id?: number;
    code?: string;
    display_name?: string;
    description?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
};
export type PropertyPOST = {
    code: string;
    display_name: string;
    description?: string;
};
export type PropertyPUT = {
    id: number;
    code?: string;
    display_name?: string;
    description?: string;
};
export type GetTaxPropertiesData = {
    headers: {
        Accept: string;
    };
    query?: {
        'id:in'?: Array<(number)>;
    };
};
export type GetTaxPropertiesResponse = ({
    data?: Array<Property>;
    meta?: MetaOpen;
});
export type GetTaxPropertiesError = (unknown);
export type UpdateTaxPropertiesData = {
    body: Array<PropertyPUT>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateTaxPropertiesResponse = ({
    data?: Array<Property>;
    meta?: MetaOpen;
});
export type UpdateTaxPropertiesError = (unknown);
export type CreateTaxPropertiesData = {
    body: Array<PropertyPOST>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateTaxPropertiesResponse = ({
    data?: Array<Property>;
    meta?: MetaOpen;
});
export type CreateTaxPropertiesError = (unknown);
export type DeleteTaxPropertiesData = {
    headers: {
        Accept: string;
    };
    query: {
        'id:in': Array<(number)>;
    };
};
export type DeleteTaxPropertiesResponse = (void);
export type DeleteTaxPropertiesError = (unknown);
export type GetProductsTaxPropertiesData = {
    headers: {
        Accept: string;
    };
    query: {
        'product_id:in': Array<(number)>;
    };
};
export type GetProductsTaxPropertiesResponse = ({
    data?: Array<ProductTaxProperty>;
    meta?: MetaOpen;
});
export type GetProductsTaxPropertiesError = (unknown);
export type UpdateProductTaxPropertiesData = {
    body: Array<ProductTaxProperty>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateProductTaxPropertiesResponse = ({
    data?: Array<ProductTaxProperty>;
    meta?: MetaOpen;
});
export type UpdateProductTaxPropertiesError = (unknown);
export type DeleteProductTaxPropertiesData = {
    headers: {
        Accept: string;
    };
    query: {
        'product_id:in': Array<(number)>;
    };
};
export type DeleteProductTaxPropertiesResponse = (void);
export type DeleteProductTaxPropertiesError = (unknown);
