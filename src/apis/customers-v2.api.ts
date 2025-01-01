import RequestService from '../helpers/request/request-service';
import * as CustomersV2ApiSpecs from '../generated/customers-v2';

export default class CustomersV2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Customers
     *
     * Returns a list of all *Customers*. Default sorting is by `customer_ID`, from lowest to highest. Optional parameters can be passed in.
     */
    getCustomers(
        query?: CustomersV2ApiSpecs.GetCustomersData['query'],
    ) {
        return this.request.get<CustomersV2ApiSpecs.GetCustomersResponse, any>({
            path: 'v2/customers',
            query,
        });
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
    createCustomer(
        requestBody: CustomersV2ApiSpecs.CreateCustomerData['body'],
    ) {
        return this.request.post<CustomersV2ApiSpecs.CreateCustomerResponse, any>({
            path: 'v2/customers',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Customers
     *
     * By default, it deletes all *Customers*. Up to 100 customers per batch can be deleted.
     */
    deleteCustomers(
    ) {
        return this.request.delete<any, any>({
            path: 'v2/customers',
        });
    }

    /**
     * Get a Customer
     *
     * Returns a single *Customer*.
     */
    getCustomer(
        customerId: CustomersV2ApiSpecs.GetCustomerData['path']['customer_id'],
    ) {
        return this.request.get<CustomersV2ApiSpecs.GetCustomerResponse, any>({
            path: `v2/customers/${customerId}`,
        });
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
    updateCustomer(
        customerId: CustomersV2ApiSpecs.UpdateCustomerData['path']['customer_id'],
        requestBody: CustomersV2ApiSpecs.UpdateCustomerData['body'],
    ) {
        return this.request.put<CustomersV2ApiSpecs.UpdateCustomerResponse, any>({
            path: `v2/customers/${customerId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Customer
     *
     * Deletes a *Customer*.
     */
    deleteCustomer(
        customerId: CustomersV2ApiSpecs.DeleteCustomerData['path']['customer_id'],
    ) {
        return this.request.delete<any, any>({
            path: `v2/customers/${customerId}`,
        });
    }

    /**
     * Get a Count of Customers
     *
     * Returns a count of all *Customers*.
     */
    getCustomersCount(
    ) {
        return this.request.get<CustomersV2ApiSpecs.GetCustomersCountResponse, any>({
            path: 'v2/customers/count',
        });
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
        return this.request.post<CustomersV2ApiSpecs.ValidateCustomerPasswordResponse, any>({
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
    getCustomerAddresses(
        customerId: CustomersV2ApiSpecs.GetCustomerAddressesData['path']['customer_id'],
        query?: CustomersV2ApiSpecs.GetCustomerAddressesData['query'],
    ) {
        return this.request.get<CustomersV2ApiSpecs.GetCustomerAddressesResponse, any>({
            path: `v2/customers/${customerId}/addresses`,
            query,
        });
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
    createCustomerAddress(
        customerId: CustomersV2ApiSpecs.CreateCustomerAddressData['path']['customer_id'],
        requestBody: CustomersV2ApiSpecs.CreateCustomerAddressData['body'],
    ) {
        return this.request.post<CustomersV2ApiSpecs.CreateCustomerAddressResponse, any>({
            path: `v2/customers/${customerId}/addresses`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Customer Address
     *
     * By default, it deletes all *Customer Addresses*.
     */
    deleteCustomerAddresses(
        customerId: CustomersV2ApiSpecs.DeleteCustomerAddressesData['path']['customer_id'],
        query?: CustomersV2ApiSpecs.DeleteCustomerAddressesData['query'],
    ) {
        return this.request.delete<any, any>({
            path: `v2/customers/${customerId}/addresses`,
            query,
        });
    }

    /**
     * Get a Customer Address
     *
     * Returns a *Customer Address*.
     */
    getCustomerAddress(
        customerId: CustomersV2ApiSpecs.GetCustomerAddressData['path']['customer_id'],
        customerAddressId: CustomersV2ApiSpecs.GetCustomerAddressData['path']['customer_address_id'],
        query?: CustomersV2ApiSpecs.GetCustomerAddressData['query'],
    ) {
        return this.request.get<CustomersV2ApiSpecs.GetCustomerAddressResponse, any>({
            path: `v2/customers/${customerId}/addresses/${customerAddressId}`,
            query,
        });
    }

    /**
     * Update a Customer Address
     *
     * Updates a *Customer Address*. 

     **Read Only Fields**
     *   id
     *   country_iso2
     */
    updateCustomerAddress(
        customerId: CustomersV2ApiSpecs.UpdateCustomerAddressData['path']['customer_id'],
        customerAddressId: CustomersV2ApiSpecs.UpdateCustomerAddressData['path']['customer_address_id'],
        requestBody: CustomersV2ApiSpecs.UpdateCustomerAddressData['body'],
    ) {
        return this.request.put<CustomersV2ApiSpecs.UpdateCustomerAddressResponse, any>({
            path: `v2/customers/${customerId}/addresses/${customerAddressId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Customer Address
     *
     * Deletes a *Customer Address*.
     */
    deletesCustomerAddress(
        customerId: CustomersV2ApiSpecs.DeletesCustomerAddressData['path']['customer_id'],
        customerAddressId: CustomersV2ApiSpecs.DeletesCustomerAddressData['path']['customer_address_id'],
    ) {
        return this.request.delete<any, any>({
            path: `v2/customers/${customerId}/addresses/${customerAddressId}`,
        });
    }

    /**
     * Get a Count of Customer Addresses
     *
     * Returns a count of addresses for a customer.
     */
    getCustomerAddressesCount(
        customerId: CustomersV2ApiSpecs.GetCustomerAddressesCountData['path']['customer_id'],
        query?: CustomersV2ApiSpecs.GetCustomerAddressesCountData['query'],
    ) {
        return this.request.get<CustomersV2ApiSpecs.GetCustomerAddressesCountResponse, any>({
            path: `v2/customers/${customerId}/addresses/count`,
            query,
        });
    }

    /**
     * Get All Customer Groups
     *
     * Returns a list of *Customer Groups*. Default sorting is by customer-group ID, from lowest to highest.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    getCustomerGroups(
        query?: CustomersV2ApiSpecs.GetCustomerGroupsData['query'],
    ) {
        return this.request.get<CustomersV2ApiSpecs.GetCustomerGroupsResponse, any>({
            path: 'v2/customer_groups',
            query,
        });
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
    createCustomerGroup(
        requestBody: CustomersV2ApiSpecs.CreateCustomerGroupData['body'],
    ) {
        return this.request.post<CustomersV2ApiSpecs.CreateCustomerGroupResponse, any>({
            path: 'v2/customer_groups',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Customer Group
     *
     * Returns a *Customer Group*.
     */
    getCustomerGroup(
        customerGroupId: CustomersV2ApiSpecs.GetCustomerGroupData['path']['customer_group_id'],
        query?: CustomersV2ApiSpecs.GetCustomerGroupData['query'],
    ) {
        return this.request.get<CustomersV2ApiSpecs.GetCustomerGroupResponse, CustomersV2ApiSpecs.GetCustomerGroupError>({
            path: `v2/customer_groups/${customerGroupId}`,
            query,
        });
    }

    /**
     * Update a Customer Group
     *
     * Updates a *Customer Group*.

     **Notes**

     Any combination of fields can be updated at once. Discount rules are treated in bulk. The entire set of rules is overwritten when a request is sent.
     */
    updateCustomerGroup(
        customerGroupId: CustomersV2ApiSpecs.UpdateCustomerGroupData['path']['customer_group_id'],
        requestBody: CustomersV2ApiSpecs.UpdateCustomerGroupData['body'],
    ) {
        return this.request.put<CustomersV2ApiSpecs.UpdateCustomerGroupResponse, any>({
            path: `v2/customer_groups/${customerGroupId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Customer Group
     *
     * Deletes a *Customer Group*. 

     **Notes**
     - All existing customers are unassigned from the group when it is deleted.
     - The default rate limit for this endpoint is 40 concurrent requests.
     */
    deleteCustomerGroup(
        customerGroupId: CustomersV2ApiSpecs.DeleteCustomerGroupData['path']['customer_group_id'],
    ) {
        return this.request.delete<any, CustomersV2ApiSpecs.DeleteCustomerGroupError>({
            path: `v2/customer_groups/${customerGroupId}`,
        });
    }

    /**
     * Get a Count of Customer Groups
     *
     * Returns a count of all *Customer Groups*.
     */
    getCustomerGroupsCount(
    ) {
        return this.request.get<CustomersV2ApiSpecs.GetCustomerGroupsCountResponse, any>({
            path: 'v2/customer_groups/count',
        });
    }
}
