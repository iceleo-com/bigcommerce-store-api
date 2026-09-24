import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CustomersV3ApiSpecs from '../generated/customers-v3';
export * as CustomersV3ApiSpecs from '../generated/customers-v3';
export declare class CustomersV3Api {
    private readonly request;
    constructor(request: RequestService);
    customersGet(query?: CustomersV3ApiSpecs.CustomersGetData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<CustomersV3ApiSpecs.CustomerFull>;
        meta?: CustomersV3ApiSpecs.MetaCollection;
    }>>>;
    getCustomers(...args: Parameters<CustomersV3Api['customersGet']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<CustomersV3ApiSpecs.CustomerFull>;
        meta?: CustomersV3ApiSpecs.MetaCollection;
    }>>>;
    customersPost(requestBody: CustomersV3ApiSpecs.CustomersPostData['body']): Promise<RequestErrorResponse<413, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: Array<CustomersV3ApiSpecs.CustomerFull>;
        meta?: CustomersV3ApiSpecs.MetaCollection;
    }>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>>>;
    createCustomers(...args: Parameters<CustomersV3Api['customersPost']>): Promise<RequestErrorResponse<413, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: Array<CustomersV3ApiSpecs.CustomerFull>;
        meta?: CustomersV3ApiSpecs.MetaCollection;
    }>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>>>;
    customersPut(requestBody: CustomersV3ApiSpecs.CustomersPutData['body']): Promise<RequestErrorResponse<413, Required<unknown>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: Array<CustomersV3ApiSpecs.CustomerFull>;
        meta?: CustomersV3ApiSpecs.MetaCollection;
    }>>>;
    updateCustomers(...args: Parameters<CustomersV3Api['customersPut']>): Promise<RequestErrorResponse<413, Required<unknown>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: Array<CustomersV3ApiSpecs.CustomerFull>;
        meta?: CustomersV3ApiSpecs.MetaCollection;
    }>>>;
    customersDelete(query?: CustomersV3ApiSpecs.CustomersDeleteData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCustomers(...args: Parameters<CustomersV3Api['customersDelete']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    customersAddressesGet(query?: CustomersV3ApiSpecs.CustomersAddressesGetData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
    getCustomersAddresses(...args: Parameters<CustomersV3Api['customersAddressesGet']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
    customersAddressesPost(requestBody: CustomersV3ApiSpecs.CustomersAddressesPostData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
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
    createCustomersAddresses(...args: Parameters<CustomersV3Api['customersAddressesPost']>): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
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
    customersAddressesPut(requestBody: CustomersV3ApiSpecs.CustomersAddressesPutData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
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
    updateCustomersAddresses(...args: Parameters<CustomersV3Api['customersAddressesPut']>): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
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
    customersAddressesDelete(query?: CustomersV3ApiSpecs.CustomersAddressesDeleteData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCustomersAddresses(...args: Parameters<CustomersV3Api['customersAddressesDelete']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    customerValidateCredentials(requestBody: CustomersV3ApiSpecs.CustomerValidateCredentialsData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.ValidateCustomerCredentialsResponseObject>> | RequestErrorResponse<429, Required<CustomersV3ApiSpecs.ErrorResponse>>>;
    validateCustomerCredentials(...args: Parameters<CustomersV3Api['customerValidateCredentials']>): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.ValidateCustomerCredentialsResponseObject>> | RequestErrorResponse<429, Required<CustomersV3ApiSpecs.ErrorResponse>>>;
    customerSettingsGet(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerSettingsObject>>>;
    getCustomersSettings(...args: Parameters<CustomersV3Api['customerSettingsGet']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerSettingsObject>>>;
    customerSettingsPut(requestBody: CustomersV3ApiSpecs.CustomerSettingsPutData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerSettingsObject>>>;
    updateCustomersSettings(...args: Parameters<CustomersV3Api['customerSettingsPut']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerSettingsObject>>>;
    customerSettingsChannelGet(channelId: CustomersV3ApiSpecs.CustomerSettingsChannelGetData['path']['channel_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerChannelSettingsObject>>>;
    getCustomersSettingsChannel(...args: Parameters<CustomersV3Api['customerSettingsChannelGet']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerChannelSettingsObject>>>;
    customerSettingsChannelPut(channelId: CustomersV3ApiSpecs.CustomerSettingsChannelPutData['path']['channel_id'], requestBody: CustomersV3ApiSpecs.CustomerSettingsChannelPutData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerSettingsObject>>>;
    updateCustomersSettingsChannel(...args: Parameters<CustomersV3Api['customerSettingsChannelPut']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerSettingsObject>>>;
    customersAttributesGet(query?: CustomersV3ApiSpecs.CustomersAttributesGetData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            name: string;
            type: "string" | "number" | "date";
            id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>>>;
    getCustomersAttributes(...args: Parameters<CustomersV3Api['customersAttributesGet']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            name: string;
            type: "string" | "number" | "date";
            id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>>>;
    customersAttributesPost(requestBody: CustomersV3ApiSpecs.CustomersAttributesPostData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            name: string;
            type: "string" | "number" | "date";
            id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>>>;
    createCustomersAttributes(...args: Parameters<CustomersV3Api['customersAttributesPost']>): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            name: string;
            type: "string" | "number" | "date";
            id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>>>;
    customersAttributesPut(requestBody: CustomersV3ApiSpecs.CustomersAttributesPutData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            name: string;
            type: "string" | "number" | "date";
            id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>>>;
    updateCustomersAttributes(...args: Parameters<CustomersV3Api['customersAttributesPut']>): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            name: string;
            type: "string" | "number" | "date";
            id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: CustomersV3ApiSpecs.MetaOpen;
    }>>>;
    customersAttributesDelete(query?: CustomersV3ApiSpecs.CustomersAttributesDeleteData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCustomersAttributes(...args: Parameters<CustomersV3Api['customersAttributesDelete']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    customersAttributeValuesGet(query?: CustomersV3ApiSpecs.CustomersAttributeValuesGetData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
    getCustomersAttributeValues(...args: Parameters<CustomersV3Api['customersAttributeValuesGet']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
    customersAttributeValuesPut(requestBody: CustomersV3ApiSpecs.CustomersAttributeValuesPutData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
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
    upsertCustomersAttributeValues(...args: Parameters<CustomersV3Api['customersAttributeValuesPut']>): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
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
    customersAttributeValuesDelete(query?: CustomersV3ApiSpecs.CustomersAttributeValuesDeleteData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCustomersAttributeValues(...args: Parameters<CustomersV3Api['customersAttributeValuesDelete']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    customerFormFieldsGet(query?: CustomersV3ApiSpecs.CustomerFormFieldsGetData['query']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
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
    getCustomersFormFieldValues(...args: Parameters<CustomersV3Api['customerFormFieldsGet']>): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
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
    customerFormFieldValuePut(requestBody: CustomersV3ApiSpecs.CustomerFormFieldValuePutData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
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
    updateCustomerFormFieldValues(...args: Parameters<CustomersV3Api['customerFormFieldValuePut']>): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
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
    customersConsentByCustomerIdGet(customerId: CustomersV3ApiSpecs.CustomersConsentByCustomerIdGetData['path']['customerId']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.ConsentFull>> | RequestErrorResponse<401, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<403, Required<CustomersV3ApiSpecs.ErrorResponse>>>;
    getCustomerConsent(...args: Parameters<CustomersV3Api['customersConsentByCustomerIdGet']>): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.ConsentFull>> | RequestErrorResponse<401, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<403, Required<CustomersV3ApiSpecs.ErrorResponse>>>;
    customersConsentByCustomerIdPut(customerId: CustomersV3ApiSpecs.CustomersConsentByCustomerIdPutData['path']['customerId'], requestBody: CustomersV3ApiSpecs.CustomersConsentByCustomerIdPutData['body']): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.ConsentFull>> | RequestErrorResponse<401, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<403, Required<CustomersV3ApiSpecs.ErrorResponse>>>;
    updateCustomerConsent(...args: Parameters<CustomersV3Api['customersConsentByCustomerIdPut']>): Promise<RequestErrorResponse<422, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.ConsentFull>> | RequestErrorResponse<401, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<403, Required<CustomersV3ApiSpecs.ErrorResponse>>>;
    liststoredinstruments(customerId: CustomersV3ApiSpecs.ListstoredinstrumentsData['path']['customerId']): Promise<RequestErrorResponse<401, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<403, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, (({
        type: "stored_card";
    } & CustomersV3ApiSpecs.CardInstrument) | ({
        type: "stored_bank_account";
    } & CustomersV3ApiSpecs.BankAccountInstrument))[]>>;
    getCustomerStoredInstruments(...args: Parameters<CustomersV3Api['liststoredinstruments']>): Promise<RequestErrorResponse<401, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<403, Required<CustomersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, (({
        type: "stored_card";
    } & CustomersV3ApiSpecs.CardInstrument) | ({
        type: "stored_bank_account";
    } & CustomersV3ApiSpecs.BankAccountInstrument))[]>>;
}
