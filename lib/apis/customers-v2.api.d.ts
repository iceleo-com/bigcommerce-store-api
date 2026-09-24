import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CustomersV2ApiSpecs from '../generated/customers-v2';
export * as CustomersV2ApiSpecs from '../generated/customers-v2';
export declare class CustomersV2Api {
    private readonly request;
    constructor(request: RequestService);
    getAllCustomers(query?: CustomersV2ApiSpecs.GetAllCustomersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, CustomersV2ApiSpecs.CustomerFull[]>>;
    getCustomers(...args: Parameters<CustomersV2Api['getAllCustomers']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, CustomersV2ApiSpecs.CustomerFull[]>>;
    createAnewCustomer(requestBody: CustomersV2ApiSpecs.CreateANewCustomerData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerFull>>>;
    createCustomer(...args: Parameters<CustomersV2Api['createAnewCustomer']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerFull>>>;
    deleteAllCustomers(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCustomers(...args: Parameters<CustomersV2Api['deleteAllCustomers']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAcustomer(customerId: CustomersV2ApiSpecs.GetACustomerData['path']['customer_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerFull>>>;
    getCustomer(...args: Parameters<CustomersV2Api['getAcustomer']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerFull>>>;
    updateAcustomer(customerId: CustomersV2ApiSpecs.UpdateACustomerData['path']['customer_id'], requestBody: CustomersV2ApiSpecs.UpdateACustomerData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerBase>>>;
    updateCustomer(...args: Parameters<CustomersV2Api['updateAcustomer']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerBase>>>;
    deleteAcustomer(customerId: CustomersV2ApiSpecs.DeleteACustomerData['path']['customer_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCustomer(...args: Parameters<CustomersV2Api['deleteAcustomer']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAcountOfCustomers(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CountFull>>>;
    getCustomersCount(...args: Parameters<CustomersV2Api['getAcountOfCustomers']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CountFull>>>;
    validateCustomerPassword(customerId: CustomersV2ApiSpecs.ValidateCustomerPasswordData['path']['customer_id'], requestBody: CustomersV2ApiSpecs.ValidateCustomerPasswordData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.ValidatePassword>>>;
    getAllCustomerAddresses(customerId: CustomersV2ApiSpecs.GetAllCustomerAddressesData['path']['customer_id'], query?: CustomersV2ApiSpecs.GetAllCustomerAddressesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, CustomersV2ApiSpecs.CustomerAddressFull[]>>;
    getCustomerAddresses(...args: Parameters<CustomersV2Api['getAllCustomerAddresses']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, CustomersV2ApiSpecs.CustomerAddressFull[]>>;
    createAcustomerAddress(customerId: CustomersV2ApiSpecs.CreateACustomerAddressData['path']['customer_id'], requestBody: CustomersV2ApiSpecs.CreateACustomerAddressData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerAddressFull>>>;
    createCustomerAddress(...args: Parameters<CustomersV2Api['createAcustomerAddress']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerAddressFull>>>;
    deleteAllCustomerAddresses(customerId: CustomersV2ApiSpecs.DeleteAllCustomerAddressesData['path']['customer_id'], query?: CustomersV2ApiSpecs.DeleteAllCustomerAddressesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCustomerAddresses(...args: Parameters<CustomersV2Api['deleteAllCustomerAddresses']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAcustomerAddress(customerId: CustomersV2ApiSpecs.GetACustomerAddressData['path']['customer_id'], customerAddressId: CustomersV2ApiSpecs.GetACustomerAddressData['path']['customer_address_id'], query?: CustomersV2ApiSpecs.GetACustomerAddressData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerAddressFull>>>;
    getCustomerAddress(...args: Parameters<CustomersV2Api['getAcustomerAddress']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerAddressFull>>>;
    updateAcustomerAddress(customerId: CustomersV2ApiSpecs.UpdateACustomerAddressData['path']['customer_id'], customerAddressId: CustomersV2ApiSpecs.UpdateACustomerAddressData['path']['customer_address_id'], requestBody: CustomersV2ApiSpecs.UpdateACustomerAddressData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerAddressFull>>>;
    updateCustomerAddress(...args: Parameters<CustomersV2Api['updateAcustomerAddress']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerAddressFull>>>;
    deletesAcustomerAddress(customerId: CustomersV2ApiSpecs.DeletesACustomerAddressData['path']['customer_id'], customerAddressId: CustomersV2ApiSpecs.DeletesACustomerAddressData['path']['customer_address_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deletesCustomerAddress(...args: Parameters<CustomersV2Api['deletesAcustomerAddress']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAcountofCustomerAddresses(customerId: CustomersV2ApiSpecs.GetACountofCustomerAddressesData['path']['customer_id'], query?: CustomersV2ApiSpecs.GetACountofCustomerAddressesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CountFull>>>;
    getCustomerAddressesCount(...args: Parameters<CustomersV2Api['getAcountofCustomerAddresses']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CountFull>>>;
    getAllCustomerGroups(query?: CustomersV2ApiSpecs.GetAllCustomerGroupsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, CustomersV2ApiSpecs.CustomerGroupFull[]>>;
    getCustomerGroups(...args: Parameters<CustomersV2Api['getAllCustomerGroups']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, CustomersV2ApiSpecs.CustomerGroupFull[]>>;
    createAcustomerGroup(requestBody: CustomersV2ApiSpecs.CreateACustomerGroupData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerGroupFull>> | RequestSuccessResponse<207, Required<{
        status?: number;
        message?: string;
    }>>>;
    createCustomerGroup(...args: Parameters<CustomersV2Api['createAcustomerGroup']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerGroupFull>> | RequestSuccessResponse<207, Required<{
        status?: number;
        message?: string;
    }>>>;
    deleteAllCustomerGroups(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAcustomerGroup(customerGroupId: CustomersV2ApiSpecs.GetACustomerGroupData['path']['customer_group_id'], query?: CustomersV2ApiSpecs.GetACustomerGroupData['query']): Promise<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerGroupFull>> | RequestErrorResponse<400, Required<CustomersV2ApiSpecs.ErrorRequest>>>;
    getCustomerGroup(...args: Parameters<CustomersV2Api['getAcustomerGroup']>): Promise<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerGroupFull>> | RequestErrorResponse<400, Required<CustomersV2ApiSpecs.ErrorRequest>>>;
    updateAcustomerGroup(customerGroupId: CustomersV2ApiSpecs.UpdateACustomerGroupData['path']['customer_group_id'], requestBody: CustomersV2ApiSpecs.UpdateACustomerGroupData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerGroupFull>> | RequestSuccessResponse<207, Required<{
        status: number;
        message: string;
    }>>>;
    updateCustomerGroup(...args: Parameters<CustomersV2Api['updateAcustomerGroup']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CustomerGroupFull>> | RequestSuccessResponse<207, Required<{
        status: number;
        message: string;
    }>>>;
    deleteAcustomerGroup(customerGroupId: CustomersV2ApiSpecs.DeleteACustomerGroupData['path']['customer_group_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<CustomersV2ApiSpecs.ErrorRequest>>>;
    deleteCustomerGroup(...args: Parameters<CustomersV2Api['deleteAcustomerGroup']>): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<CustomersV2ApiSpecs.ErrorRequest>>>;
    getAcountOfCustomerGroups(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CountFull>>>;
    getCustomerGroupsCount(...args: Parameters<CustomersV2Api['getAcountOfCustomerGroups']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CountFull>>>;
}
