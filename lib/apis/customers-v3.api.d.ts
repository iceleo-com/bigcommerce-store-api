import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CustomersV3ApiSpecs from '../generated/customers-v3';
export * as CustomersV3ApiSpecs from '../generated/customers-v3';
export declare class CustomersV3Api {
    private readonly request;
    constructor(request: RequestService);
    getCustomers(query?: CustomersV3ApiSpecs.GetCustomersData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<CustomersV3ApiSpecs.CustomerFull>;
        meta?: CustomersV3ApiSpecs.MetaCollectionWithCursorPagination;
    }>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs._Error>>>;
    createCustomers(requestBody: CustomersV3ApiSpecs.CreateCustomersData['body']): Promise<RequestErrorResponse<413, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: Array<CustomersV3ApiSpecs.CustomerFull>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>>>;
    updateCustomers(requestBody: CustomersV3ApiSpecs.UpdateCustomersData['body']): Promise<RequestErrorResponse<413, Required<unknown>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: Array<CustomersV3ApiSpecs.CustomerFull>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>>>;
    deleteCustomers(query?: CustomersV3ApiSpecs.DeleteCustomersData['query']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs._Error>>>;
    getCustomersAddresses(query?: CustomersV3ApiSpecs.GetCustomersAddressesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            address1: string;
            address2?: string;
            address_type?: "residential" | "commercial";
            city: string;
            company?: string;
            country?: string;
            country_code: string;
            customer_id: number;
            first_name: string;
            id: number;
            last_name: string;
            phone?: string;
            postal_code: string;
            state_or_province: string;
            form_fields?: Array<CustomersV3ApiSpecs.FormFieldValueAddress>;
        }>;
        meta?: CustomersV3ApiSpecs.MetaCollection;
    }>>>;
    createCustomersAddresses(requestBody: CustomersV3ApiSpecs.CreateCustomersAddressesData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<({
        data?: Array<{
            address1?: string;
            address2?: string;
            address_type?: "residential" | "commercial";
            city?: string;
            company?: string;
            country?: string;
            country_code?: string;
            customer_id?: number;
            first_name?: string;
            id?: number;
            last_name?: string;
            phone?: string;
            postal_code?: string;
            state_or_province?: string;
            form_fields?: Array<CustomersV3ApiSpecs.FormFieldValueFull>;
        }>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    } | {
        [key: string]: unknown;
    }) & {
        data?: Array<{
            address1?: string;
            address2?: string;
            address_type?: "residential" | "commercial";
            city?: string;
            company?: string;
            country?: string;
            country_code?: string;
            customer_id?: number;
            first_name?: string;
            id?: number;
            last_name?: string;
            phone?: string;
            postal_code?: string;
            state_or_province?: string;
            form_fields?: Array<CustomersV3ApiSpecs.FormFieldValueAddress>;
        }>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>>>;
    updateCustomersAddresses(requestBody: CustomersV3ApiSpecs.UpdateCustomersAddressesData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<({
        data?: Array<{
            address1?: string;
            address2?: string;
            address_type?: "residential" | "commercial";
            city?: string;
            company?: string;
            country?: string;
            country_code?: string;
            customer_id?: number;
            first_name?: string;
            id?: number;
            last_name?: string;
            phone?: string;
            postal_code?: string;
            state_or_province?: string;
            form_fields?: Array<CustomersV3ApiSpecs.FormFieldValueFull>;
        }>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    } | {
        [key: string]: unknown;
    }) & {
        data?: Array<{
            address1?: string;
            address2?: string;
            address_type?: "residential" | "commercial";
            city?: string;
            company?: string;
            country?: string;
            country_code?: string;
            customer_id?: number;
            first_name?: string;
            id?: number;
            last_name?: string;
            phone?: string;
            postal_code?: string;
            state_or_province?: string;
            form_fields?: Array<CustomersV3ApiSpecs.FormFieldValueAddress>;
        }>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>>>;
    deleteCustomersAddresses(query?: CustomersV3ApiSpecs.DeleteCustomersAddressesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    validateCustomerCredentials(requestBody: CustomersV3ApiSpecs.ValidateCustomerCredentialsData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.ValidateCustomerCredentialsResponseObject>> | RequestErrorResponse<429, Required<CustomersV3ApiSpecs.ErrorResponse>>>;
    getCustomersSettings(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CustomersV3ApiSpecs.CustomerSettingsObject;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    updateCustomersSettings(requestBody: CustomersV3ApiSpecs.UpdateCustomersSettingsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CustomersV3ApiSpecs.CustomerSettingsObject;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    getCustomersSettingsChannel(channelId: CustomersV3ApiSpecs.GetCustomersSettingsChannelData['path']['channel_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CustomersV3ApiSpecs.CustomerChannelSettingsObject;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    updateCustomersSettingsChannel(channelId: CustomersV3ApiSpecs.UpdateCustomersSettingsChannelData['path']['channel_id'], requestBody: CustomersV3ApiSpecs.UpdateCustomersSettingsChannelData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CustomersV3ApiSpecs.CustomerSettingsObject;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    getCustomersAttributes(query?: CustomersV3ApiSpecs.GetCustomersAttributesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            name: string;
            type: "string" | "number" | "date";
            id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>>>;
    createCustomersAttributes(requestBody: CustomersV3ApiSpecs.CreateCustomersAttributesData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            name: string;
            type: "string" | "number" | "date";
            id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>>>;
    updateCustomersAttributes(requestBody: CustomersV3ApiSpecs.UpdateCustomersAttributesData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            name: string;
            type: "string" | "number" | "date";
            id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>>>;
    deleteCustomersAttributes(query?: CustomersV3ApiSpecs.DeleteCustomersAttributesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getCustomersAttributeValues(query?: CustomersV3ApiSpecs.GetCustomersAttributeValuesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            attribute_id: number;
            attribute_value: string;
            id?: number;
            customer_id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: {
            pagination?: {
                total?: number;
                count?: number;
                per_page?: number;
                current_page?: number;
                total_pages?: number;
                links?: {
                    previous?: string;
                    current?: string;
                    next?: string;
                };
            };
        };
    }>>>;
    upsertCustomersAttributeValues(requestBody: CustomersV3ApiSpecs.UpsertCustomersAttributeValuesData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            attribute_id: number;
            attribute_value: string;
            id?: number;
            customer_id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: {
            pagination?: {
                total?: number;
                count?: number;
                per_page?: number;
                current_page?: number;
                total_pages?: number;
                links?: {
                    previous?: string;
                    current?: string;
                    next?: string;
                };
            };
        };
    }>>>;
    deleteCustomersAttributeValues(query?: CustomersV3ApiSpecs.DeleteCustomersAttributeValuesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getCustomersFormFieldValues(query?: CustomersV3ApiSpecs.GetCustomersFormFieldValuesData['query']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: Array<({
            name: string;
            value: string | number | Array<string>;
        } & {
            customer_id: number;
        }) | ({
            name: string;
            value: string | number | Array<string>;
        } & {
            address_id: number;
        })>;
        meta?: CustomersV3ApiSpecs.MetaCollectionWithCursorPagination;
    }>>>;
    updateCustomerFormFieldValues(requestBody: CustomersV3ApiSpecs.UpdateCustomerFormFieldValuesData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: Array<({
            name: string;
            value: string | number | Array<string>;
        } & {
            customer_id: number;
        }) | ({
            name: string;
            value: string | number | Array<string>;
        } & {
            address_id: number;
        })>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>>>;
    getCustomerConsent(customerId: CustomersV3ApiSpecs.GetCustomerConsentData['path']['customerId']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.ConsentFull>> | RequestErrorResponse<401, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<403, Required<CustomersV3ApiSpecs.ErrorResponse>>>;
    updateCustomerConsent(customerId: CustomersV3ApiSpecs.UpdateCustomerConsentData['path']['customerId'], requestBody: CustomersV3ApiSpecs.UpdateCustomerConsentData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.ConsentFull>> | RequestErrorResponse<401, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<403, Required<CustomersV3ApiSpecs.ErrorResponse>>>;
    getCustomerStoredInstruments(customerId: CustomersV3ApiSpecs.GetCustomerStoredInstrumentsData['path']['customerId']): Promise<RequestErrorResponse<401, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<403, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, (({
        type: "stored_card";
    } & CustomersV3ApiSpecs.CardInstrument) | ({
        type: "stored_paypal_account";
    } & CustomersV3ApiSpecs.PayPalAccountInstrument) | ({
        type: "stored_bank_account";
    } & CustomersV3ApiSpecs.BankAccountInstrument))[]>>;
    getCustomersMetafields(customerId: CustomersV3ApiSpecs.GetCustomersMetafieldsData['path']['customerId']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<CustomersV3ApiSpecs.MetafieldFull>;
        meta?: CustomersV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createCustomerMetafields(customerId: CustomersV3ApiSpecs.CreateCustomerMetafieldsData['path']['customerId'], requestBody: CustomersV3ApiSpecs.CreateCustomerMetafieldsData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.MetaFieldCollectionPostPutResponses>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<409, Required<CustomersV3ApiSpecs.ErrorResponse>>>;
    getMetafieldsCustomerId(customerId: CustomersV3ApiSpecs.GetMetafieldsCustomerIdData['path']['customerId'], metafieldId: CustomersV3ApiSpecs.GetMetafieldsCustomerIdData['path']['metafieldId']): Promise<RequestSuccessResponse<200, Required<{
        data?: CustomersV3ApiSpecs.MetafieldFull;
        meta?: CustomersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<CustomersV3ApiSpecs.NotFound>>>;
    updateCustomerMetafield(metafieldId: CustomersV3ApiSpecs.UpdateCustomerMetafieldData['path']['metafieldId'], customerId: CustomersV3ApiSpecs.UpdateCustomerMetafieldData['path']['customerId'], requestBody: CustomersV3ApiSpecs.UpdateCustomerMetafieldData['body'], query?: CustomersV3ApiSpecs.UpdateCustomerMetafieldData['query']): Promise<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.MetaFieldCollectionPostPutResponses>> | RequestErrorResponse<404, Required<CustomersV3ApiSpecs.NotFound>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    deleteCustomerMetafieldsId(customerId: CustomersV3ApiSpecs.DeleteCustomerMetafieldsIdData['path']['customerId'], metafieldId: CustomersV3ApiSpecs.DeleteCustomerMetafieldsIdData['path']['metafieldId']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<CustomersV3ApiSpecs.NotFound>>>;
    getAllCustomersMetafields(query?: CustomersV3ApiSpecs.GetAllCustomersMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.MetaFieldCollectionResponse>>>;
    createCustomersMetafields(requestBody: CustomersV3ApiSpecs.CreateCustomersMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.MetaFieldCollectionPostPutResponses>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>>>;
    updateCustomersMetafields(requestBody: CustomersV3ApiSpecs.UpdateCustomersMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.MetaFieldCollectionPostPutResponses>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    deleteCustomersMetafields(): Promise<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessDelete>>>;
}
