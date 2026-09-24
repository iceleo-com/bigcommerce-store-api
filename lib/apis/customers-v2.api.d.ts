import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CustomersV2ApiSpecs from '../generated/customers-v2';
export * as CustomersV2ApiSpecs from '../generated/customers-v2';
export declare class CustomersV2Api {
    private readonly request;
    constructor(request: RequestService);
    getCustomers(query?: CustomersV2ApiSpecs.GetCustomersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, CustomersV2ApiSpecs.CustomerFullResponse[]> | RequestSuccessResponse<204, void>>;
    createCustomer(requestBody: CustomersV2ApiSpecs.CreateCustomerData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerFullResponse>>>;
    deleteCustomers(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getCustomer(customerId: CustomersV2ApiSpecs.GetCustomerData['path']['customer_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerFullResponse>>>;
    updateCustomer(customerId: CustomersV2ApiSpecs.UpdateCustomerData['path']['customer_id'], requestBody: CustomersV2ApiSpecs.UpdateCustomerData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerFullResponse>>>;
    deleteCustomer(customerId: CustomersV2ApiSpecs.DeleteCustomerData['path']['customer_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getCustomersCount(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CountFull>>>;
    getCustomerAddresses(customerId: CustomersV2ApiSpecs.GetCustomerAddressesData['path']['customer_id'], query?: CustomersV2ApiSpecs.GetCustomerAddressesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void> | RequestSuccessResponse<200, CustomersV2ApiSpecs.CustomerAddressFull[]>>;
    createCustomerAddress(customerId: CustomersV2ApiSpecs.CreateCustomerAddressData['path']['customer_id'], requestBody: CustomersV2ApiSpecs.CreateCustomerAddressData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerAddressFull>>>;
    deleteCustomerAddresses(customerId: CustomersV2ApiSpecs.DeleteCustomerAddressesData['path']['customer_id'], query?: CustomersV2ApiSpecs.DeleteCustomerAddressesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getCustomerAddress(customerId: CustomersV2ApiSpecs.GetCustomerAddressData['path']['customer_id'], customerAddressId: CustomersV2ApiSpecs.GetCustomerAddressData['path']['customer_address_id'], query?: CustomersV2ApiSpecs.GetCustomerAddressData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerAddressFull>>>;
    updateCustomerAddress(customerId: CustomersV2ApiSpecs.UpdateCustomerAddressData['path']['customer_id'], customerAddressId: CustomersV2ApiSpecs.UpdateCustomerAddressData['path']['customer_address_id'], requestBody: CustomersV2ApiSpecs.UpdateCustomerAddressData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerAddressFull>>>;
    deletesCustomerAddress(customerId: CustomersV2ApiSpecs.DeletesCustomerAddressData['path']['customer_id'], customerAddressId: CustomersV2ApiSpecs.DeletesCustomerAddressData['path']['customer_address_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getCustomerAddressesCount(customerId: CustomersV2ApiSpecs.GetCustomerAddressesCountData['path']['customer_id'], query?: CustomersV2ApiSpecs.GetCustomerAddressesCountData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CountFull>>>;
    getCustomerGroups(query?: CustomersV2ApiSpecs.GetCustomerGroupsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void> | RequestSuccessResponse<200, CustomersV2ApiSpecs.CustomerGroupFull[]>>;
    createCustomerGroup(requestBody: CustomersV2ApiSpecs.CreateCustomerGroupData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerGroupFull>>>;
    getCustomerGroup(customerGroupId: CustomersV2ApiSpecs.GetCustomerGroupData['path']['customer_group_id'], query?: CustomersV2ApiSpecs.GetCustomerGroupData['query']): Promise<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerGroupFull>> | RequestErrorResponse<400, Required<CustomersV2ApiSpecs.ErrorRequest>>>;
    updateCustomerGroup(customerGroupId: CustomersV2ApiSpecs.UpdateCustomerGroupData['path']['customer_group_id'], requestBody: CustomersV2ApiSpecs.UpdateCustomerGroupData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerGroupFull>>>;
    deleteCustomerGroup(customerGroupId: CustomersV2ApiSpecs.DeleteCustomerGroupData['path']['customer_group_id']): Promise<RequestErrorResponse<400, Required<CustomersV2ApiSpecs.ErrorRequest>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getCustomerGroupsCount(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CountFull>>>;
    validateCustomerPassword(customerId: CustomersV2ApiSpecs.ValidateCustomerPasswordData['path']['customer_id'], requestBody: CustomersV2ApiSpecs.ValidateCustomerPasswordData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.ValidatePassword>>>;
}
