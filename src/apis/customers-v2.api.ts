import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CustomersV2ApiSpecs from '../generated/customers-v2';
export * as CustomersV2ApiSpecs from '../generated/customers-v2';

export class CustomersV2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Customers
     *
     * Returns a list of all *Customers*. Default sorting is by `customer_ID`, from lowest to highest. Optional parameters can be passed in.
     */
    getAllCustomers(
        query?: CustomersV2ApiSpecs.GetAllCustomersData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.GetAllCustomersResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/customers',
            query,
        });
    }

    /**
     * @deprecated Use `getAllCustomers` instead.
     */
    getCustomers(...args: Parameters<CustomersV2Api['getAllCustomers']>) {
        return this.getAllCustomers(...args);
    }

    /**
     * Create a New Customer
     *
     * Creates a *Customer*.
     **Required Fields**
     *   `first_name`
     *   `last_name`
     *   `email`
     **Read Only Fields**
     *   `id`
     *   `date_created`
     *   `date_modified`
     *   `accepts_marketing`
     *   `addresses`
     *   `form_fields`
     ## Notes 
     The `_authentication` object exposes functionality associated with the customer’s ability to log in to the store. All properties of the `_authentication` object are optional.
     When the `_authentication` object is not supplied with an update request, then the existing customer password remains the same.
     ## Updating Passwords 
     To manually update a customer password in the same way as the control panel, supply a value for the password field:
     ```json
     {
         "_authentication": {
             "password": "12w69Y217PYR96J"
         }
     }
     ```
     ## Confirming Passwords 
     An additional optional `password_confirmation` field can also be sent, providing password confirmation as a service:
     ```json
     {
         "_authentication": {
            "password": "12w69Y217PYR96J",
            "password_confirmation": "12w69Y217PYR96J"
         }
     }
     ```
     ## Forcing Password Resets 
     To force a customer to reset their password upon their next login attempt, give the `force_reset` field a value of true, as shown here:
     ```js showLineNumbers copy
     {
         "_authentication": {
             "force_reset": true
         }
     }
     ```
     */
    createAnewCustomer(
        requestBody: CustomersV2ApiSpecs.CreateANewCustomerData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CreateANewCustomerResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/customers',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createAnewCustomer` instead.
     */
    createCustomer(...args: Parameters<CustomersV2Api['createAnewCustomer']>) {
        return this.createAnewCustomer(...args);
    }

    /**
     * Delete Customers
     *
     * By default, it deletes all *Customers*. Up to 100 customers per batch can be deleted.
     */
    deleteAllCustomers(
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CustomersV2ApiSpecs.DeleteAllCustomersResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v2/customers',
        });
    }

    /**
     * @deprecated Use `deleteAllCustomers` instead.
     */
    deleteCustomers(...args: Parameters<CustomersV2Api['deleteAllCustomers']>) {
        return this.deleteAllCustomers(...args);
    }

    /**
     * Get a Customer
     *
     * Returns a single *Customer*.
     */
    getAcustomer(
        customerId: CustomersV2ApiSpecs.GetACustomerData['path']['customer_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.GetACustomerResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/customers/${customerId}`,
        });
    }

    /**
     * @deprecated Use `getAcustomer` instead.
     */
    getCustomer(...args: Parameters<CustomersV2Api['getAcustomer']>) {
        return this.getAcustomer(...args);
    }

    /**
     * Update a Customer
     *
     * Updates a *Customer*.

     **Read Only Fields**
     *   id
     *   date_created
     *   date_modified
     *   accepts_marketing
     *   addresses
     *   form_fields

     ## Notes 
     The `_authentication` object exposes functionality associated with the customer’s ability to log in to the store. All properties of the `_authentication` object are optional.
     When the `_authentication` object is not supplied with an update request, then the existing customer password remains the same.
     ## Updating Passwords 
     To manually update a customer password in the same way as the control panel, supply a value for the `password` field:

     ```js showLineNumbers copy
     {
         "_authentication": {
             "password": "12w69Y217PYR96J"
         }
     }

     ```

     #### Confirming Passwords 
     An additional optional `password_confirmation` field can also be sent, providing password confirmation as a service:
     ```js showLineNumbers copy
     {
         "_authentication": {
            "password": "12w69Y217PYR96J"
            "password_confirmation": "12w69Y217PYR96J"
         }
     }
     ```
     #### Forcing Password Resets 
     To force a customer to reset their password upon their next login attempt, give the `force_reset` field a value of true, as shown here:
     ```js showLineNumbers copy
     {
         "_authentication": {
             "force_reset": true
         }
     }
     ```
     */
    updateAcustomer(
        customerId: CustomersV2ApiSpecs.UpdateACustomerData['path']['customer_id'],
        requestBody: CustomersV2ApiSpecs.UpdateACustomerData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.UpdateACustomerResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/customers/${customerId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateAcustomer` instead.
     */
    updateCustomer(...args: Parameters<CustomersV2Api['updateAcustomer']>) {
        return this.updateAcustomer(...args);
    }

    /**
     * Delete a Customer
     *
     * Deletes a *Customer*.
     */
    deleteAcustomer(
        customerId: CustomersV2ApiSpecs.DeleteACustomerData['path']['customer_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CustomersV2ApiSpecs.DeleteACustomerResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/customers/${customerId}`,
        });
    }

    /**
     * @deprecated Use `deleteAcustomer` instead.
     */
    deleteCustomer(...args: Parameters<CustomersV2Api['deleteAcustomer']>) {
        return this.deleteAcustomer(...args);
    }

    /**
     * Get a Count of Customers
     *
     * Returns a count of all *Customers*.
     */
    getAcountOfCustomers(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.GetACountOfCustomersResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/customers/count',
        });
    }

    /**
     * @deprecated Use `getAcountOfCustomers` instead.
     */
    getCustomersCount(...args: Parameters<CustomersV2Api['getAcountOfCustomers']>) {
        return this.getAcountOfCustomers(...args);
    }

    /**
     * Validate a Password
     *
     * **This endpoint has special rate limiting protections to protect against abuse.**

     Provided a password, will return a true/false response indicating if the provided password matches the customer’s current password. This endpoint is useful if you want to power the login of another system using BigCommerce’s stored customer accounts, or as a safe way to migrate passwords to another system (by checking them against BigCommerce’s password, and if correct, storing it in another system securely.) If the password matches what’s stored against the customer account, the response will be:

     ```js showLineNumbers copy
     {
         "success": "true"
     }
     ```
     If the password does NOT match, the response will instead be:

     ```js showLineNumbers copy
     {
         "success": "false"
     }
     ```
     */
    validateCustomerPassword(
        customerId: CustomersV2ApiSpecs.ValidateCustomerPasswordData['path']['customer_id'],
        requestBody: CustomersV2ApiSpecs.ValidateCustomerPasswordData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.ValidateCustomerPasswordResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/customers/${customerId}/validate`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get All Customer Addresses
     *
     * Returns a list of *Customer Addresses*. Returns the addresses belonging to a customer. Default sorting is by address id, from lowest to highest. 
     The maximum limit is 250. If a limit isn’t provided, up to 50 `customer_addresses` are returned by default.
     */
    getAllCustomerAddresses(
        customerId: CustomersV2ApiSpecs.GetAllCustomerAddressesData['path']['customer_id'],
        query?: CustomersV2ApiSpecs.GetAllCustomerAddressesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.GetAllCustomerAddressesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/customers/${customerId}/addresses`,
            query,
        });
    }

    /**
     * @deprecated Use `getAllCustomerAddresses` instead.
     */
    getCustomerAddresses(...args: Parameters<CustomersV2Api['getAllCustomerAddresses']>) {
        return this.getAllCustomerAddresses(...args);
    }

    /**
     * Create a Customer Address
     *
     * Creates a new *Customer Address*. (Note: The “state” property cannot be null. As a workaround for addresses that include no state/province string, pass a space as the “state” value.)

     **Required Fields**
     *   first_name
     *   last_name
     *   phone
     *   street_1
     *   city
     *   state
     *   zip
     *   country

     **Read Only Fields**
     *   id
     *   country_iso2
     */
    createAcustomerAddress(
        customerId: CustomersV2ApiSpecs.CreateACustomerAddressData['path']['customer_id'],
        requestBody: CustomersV2ApiSpecs.CreateACustomerAddressData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CreateACustomerAddressResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/customers/${customerId}/addresses`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createAcustomerAddress` instead.
     */
    createCustomerAddress(...args: Parameters<CustomersV2Api['createAcustomerAddress']>) {
        return this.createAcustomerAddress(...args);
    }

    /**
     * Delete Customer Address
     *
     * By default, it deletes all *Customer Addresses*.
     */
    deleteAllCustomerAddresses(
        customerId: CustomersV2ApiSpecs.DeleteAllCustomerAddressesData['path']['customer_id'],
        query?: CustomersV2ApiSpecs.DeleteAllCustomerAddressesData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CustomersV2ApiSpecs.DeleteAllCustomerAddressesResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/customers/${customerId}/addresses`,
            query,
        });
    }

    /**
     * @deprecated Use `deleteAllCustomerAddresses` instead.
     */
    deleteCustomerAddresses(...args: Parameters<CustomersV2Api['deleteAllCustomerAddresses']>) {
        return this.deleteAllCustomerAddresses(...args);
    }

    /**
     * Get a Customer Address
     *
     * Returns a *Customer Address*.
     */
    getAcustomerAddress(
        customerId: CustomersV2ApiSpecs.GetACustomerAddressData['path']['customer_id'],
        customerAddressId: CustomersV2ApiSpecs.GetACustomerAddressData['path']['customer_address_id'],
        query?: CustomersV2ApiSpecs.GetACustomerAddressData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.GetACustomerAddressResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/customers/${customerId}/addresses/${customerAddressId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getAcustomerAddress` instead.
     */
    getCustomerAddress(...args: Parameters<CustomersV2Api['getAcustomerAddress']>) {
        return this.getAcustomerAddress(...args);
    }

    /**
     * Update a Customer Address
     *
     * Updates a *Customer Address*. 

     **Read Only Fields**
     *   id
     *   country_iso2
     */
    updateAcustomerAddress(
        customerId: CustomersV2ApiSpecs.UpdateACustomerAddressData['path']['customer_id'],
        customerAddressId: CustomersV2ApiSpecs.UpdateACustomerAddressData['path']['customer_address_id'],
        requestBody: CustomersV2ApiSpecs.UpdateACustomerAddressData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.UpdateACustomerAddressResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/customers/${customerId}/addresses/${customerAddressId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateAcustomerAddress` instead.
     */
    updateCustomerAddress(...args: Parameters<CustomersV2Api['updateAcustomerAddress']>) {
        return this.updateAcustomerAddress(...args);
    }

    /**
     * Delete a Customer Address
     *
     * Deletes a *Customer Address*.
     */
    deletesAcustomerAddress(
        customerId: CustomersV2ApiSpecs.DeletesACustomerAddressData['path']['customer_id'],
        customerAddressId: CustomersV2ApiSpecs.DeletesACustomerAddressData['path']['customer_address_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CustomersV2ApiSpecs.DeletesACustomerAddressResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/customers/${customerId}/addresses/${customerAddressId}`,
        });
    }

    /**
     * @deprecated Use `deletesAcustomerAddress` instead.
     */
    deletesCustomerAddress(...args: Parameters<CustomersV2Api['deletesAcustomerAddress']>) {
        return this.deletesAcustomerAddress(...args);
    }

    /**
     * Get a Count of Customer Addresses
     *
     * Returns a count of addresses for a customer.
     */
    getAcountofCustomerAddresses(
        customerId: CustomersV2ApiSpecs.GetACountofCustomerAddressesData['path']['customer_id'],
        query?: CustomersV2ApiSpecs.GetACountofCustomerAddressesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.GetACountofCustomerAddressesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/customers/${customerId}/addresses/count`,
            query,
        });
    }

    /**
     * @deprecated Use `getAcountofCustomerAddresses` instead.
     */
    getCustomerAddressesCount(...args: Parameters<CustomersV2Api['getAcountofCustomerAddresses']>) {
        return this.getAcountofCustomerAddresses(...args);
    }

    /**
     * Get All Customer Groups
     *
     * Returns a list of *Customer Groups*. Default sorting is by customer-group ID, from lowest to highest.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    getAllCustomerGroups(
        query?: CustomersV2ApiSpecs.GetAllCustomerGroupsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.GetAllCustomerGroupsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/customer_groups',
            query,
        });
    }

    /**
     * @deprecated Use `getAllCustomerGroups` instead.
     */
    getCustomerGroups(...args: Parameters<CustomersV2Api['getAllCustomerGroups']>) {
        return this.getAllCustomerGroups(...args);
    }

    /**
     * Create a Customer Group
     *
     * Creates a *Customer Group*. 

     **Required Fields**
     * name

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    createAcustomerGroup(
        requestBody: CustomersV2ApiSpecs.CreateACustomerGroupData['body'],
    ) {
        return this.request.post<(RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.CreateACustomerGroupResponses[200]>> | RequestSuccessResponse<207, Required<CustomersV2ApiSpecs.CreateACustomerGroupResponses[207]>>),RequestErrorResponse<400, void>>({
            path: 'v2/customer_groups',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createAcustomerGroup` instead.
     */
    createCustomerGroup(...args: Parameters<CustomersV2Api['createAcustomerGroup']>) {
        return this.createAcustomerGroup(...args);
    }

    /**
     * Delete Customer Groups
     *
     * By default, it deletes all *Customer Groups*. 
     All existing customers are unassigned from the group when it is deleted.
     */
    deleteAllCustomerGroups(
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CustomersV2ApiSpecs.DeleteAllCustomerGroupsResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v2/customer_groups',
        });
    }

    /**
     * Get a Customer Group
     *
     * Returns a *Customer Group*.
     */
    getAcustomerGroup(
        customerGroupId: CustomersV2ApiSpecs.GetACustomerGroupData['path']['customer_group_id'],
        query?: CustomersV2ApiSpecs.GetACustomerGroupData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.GetACustomerGroupResponses[200]>>,RequestErrorResponse<400, Required<CustomersV2ApiSpecs.GetACustomerGroupErrors[400]>>>({
            path: `v2/customer_groups/${customerGroupId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getAcustomerGroup` instead.
     */
    getCustomerGroup(...args: Parameters<CustomersV2Api['getAcustomerGroup']>) {
        return this.getAcustomerGroup(...args);
    }

    /**
     * Update a Customer Group
     *
     * Updates a *Customer Group*.

     **Notes**

     Any combination of fields can be updated at once. Discount rules are treated in bulk. The entire set of rules is overwritten when a request is sent.
     */
    updateAcustomerGroup(
        customerGroupId: CustomersV2ApiSpecs.UpdateACustomerGroupData['path']['customer_group_id'],
        requestBody: CustomersV2ApiSpecs.UpdateACustomerGroupData['body'],
    ) {
        return this.request.put<(RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.UpdateACustomerGroupResponses[200]>> | RequestSuccessResponse<207, Required<CustomersV2ApiSpecs.UpdateACustomerGroupResponses[207]>>),RequestErrorResponse<400, void>>({
            path: `v2/customer_groups/${customerGroupId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateAcustomerGroup` instead.
     */
    updateCustomerGroup(...args: Parameters<CustomersV2Api['updateAcustomerGroup']>) {
        return this.updateAcustomerGroup(...args);
    }

    /**
     * Delete a Customer Group
     *
     * Deletes a *Customer Group*. 

     **Notes**
     - All existing customers are unassigned from the group when it is deleted.
     - The default rate limit for this endpoint is 40 concurrent requests.
     */
    deleteAcustomerGroup(
        customerGroupId: CustomersV2ApiSpecs.DeleteACustomerGroupData['path']['customer_group_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CustomersV2ApiSpecs.DeleteACustomerGroupResponses[204]>>,RequestErrorResponse<400, Required<CustomersV2ApiSpecs.DeleteACustomerGroupErrors[400]>>>({
            path: `v2/customer_groups/${customerGroupId}`,
        });
    }

    /**
     * @deprecated Use `deleteAcustomerGroup` instead.
     */
    deleteCustomerGroup(...args: Parameters<CustomersV2Api['deleteAcustomerGroup']>) {
        return this.deleteAcustomerGroup(...args);
    }

    /**
     * Get a Count of Customer Groups
     *
     * Returns a count of all *Customer Groups*.
     */
    getAcountOfCustomerGroups(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV2ApiSpecs.GetACountOfCustomerGroupsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/customer_groups/count',
        });
    }

    /**
     * @deprecated Use `getAcountOfCustomerGroups` instead.
     */
    getCustomerGroupsCount(...args: Parameters<CustomersV2Api['getAcountOfCustomerGroups']>) {
        return this.getAcountOfCustomerGroups(...args);
    }
}
