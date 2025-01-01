export type ParameterAccept = string;
export type ParameterContentType = string;
export type taxClass_Full = {
    id?: string;
    name?: string;
    created_at?: string;
    updated_at?: string;
};
export type GetTaxClassesData = {
    headers: {
        Accept: string;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetTaxClassesResponse = (Array<taxClass_Full>);
export type GetTaxClassesError = unknown;
export type GetTaxClassData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type GetTaxClassResponse = (taxClass_Full);
export type GetTaxClassError = unknown;
