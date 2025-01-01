import RequestService from '../helpers/request/request-service';
import * as CustomersV3ApiSpecs from '../generated/customers-v3';

export default class CustomersV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Customers
     *
     * Returns a list of Customers. Optional filter parameters can be passed in.

     **Notes**

     Attribute names are not available on the customer object.
     */
    getCustomers(
        query?: CustomersV3ApiSpecs.GetCustomersData['query'],
    ) {
        return this.request.get<any, CustomersV3ApiSpecs.GetCustomersError>({
            path: 'v3/customers',
            query,
        });
    }

    /**
     * Create Customers
     *
     * Creates Customers. Create up to 10 customers in one call.

     **Required Fields**
     * last_name
     * first_name
     * email

     **Required Fields Customer Address**
     * first_name
     * city
     * country_code
     * last_name
     * address1

     **Required Fields Attributes**
     * Attributes must be [created](/docs/rest-management/customers/customer-attributes#create-a-customer-attribute) **BEFORE** creating a customer.
     * attribute_id
     * attribute_value -- This is input as a string, regardless of the [Type](/docs/rest-management/customers/customer-attributes#create-a-customer-attribute).

     **Notes**

     A customer can be created with global access or channel-specific access.
     * **Global access:**
       * Make sure the channel has `allow_global_logins` enabled. This is on by default only for the default storefront. Find more info at [Customer Settings > Channel](/docs/rest-management/customers/customer-settings-channel).
       * Omit `channel_ids` field, or provide `channel_ids: null`.
     * **Channel-specific access:**
       * Provide a `channel_ids` array containing the channels accessible by the customer. This array cannot be empty.
     */
    createCustomers(
        requestBody: CustomersV3ApiSpecs.CreateCustomersData['body'],
    ) {
        return this.request.post<any, CustomersV3ApiSpecs.CreateCustomersError>({
            path: 'v3/customers',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Customers
     *
     * Updates Customers. Subresource updates are not supported. 

     **Required Fields**
     * id -- ID of the *Customer* This must be included in the request body

     **Read Only Fields**
     * id
     * registration_ip_address
     * date_created
     * date_modified
     * origin_channel_id

     **Limits**
     * Limit of 10 customers per call.
     * Limit of 3 concurrent requests

     **Notes**

     * Attributes Values can not be updated using Update a Customer. Use the [Update customer attribute values](/docs/rest-management/customers/customer-attribute-values#upsert-customer-attribute-values) endpoint.
     * channel_ids -- Updating the list of channels a customer can access may create some side effects in a multi-storefront situation. This list determines which customer account we will use to authenticate a shopper given a channel.
     * origin_channel_id -- This is an immutable value set as a reference to the channel of origin when a customer is created.
     */
    updateCustomers(
        requestBody: CustomersV3ApiSpecs.UpdateCustomersData['body'],
    ) {
        return this.request.put<any, CustomersV3ApiSpecs.UpdateCustomersError>({
            path: 'v3/customers',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Customers
     *
     * Deletes Customers.

     **Required Query**
     * id:in -- ID of the customer

     **Notes**

     A query is required to delete customers. If not provided, a 204 is returned, with no changes to the data.
     */
    deleteCustomers(
        query?: CustomersV3ApiSpecs.DeleteCustomersData['query'],
    ) {
        return this.request.delete<any, CustomersV3ApiSpecs.DeleteCustomersError>({
            path: 'v3/customers',
            query,
        });
    }

    /**
     * Get All Customer Addresses
     *
     * Returns a list of Customer Addresses. Optional filter parameters can be passed in.
     */
    getCustomersAddresses(
        query?: CustomersV3ApiSpecs.GetCustomersAddressesData['query'],
    ) {
        return this.request.get<any, any>({
            path: 'v3/customers/addresses',
            query,
        });
    }

    /**
     * Create a Customer Address
     *
     * Creates a Customer Address. Multiple customer addresses can be created in one call.

     **Required Fields**
     * **customer_id**
     * **first_name**
     * **last_name**
     * **city**
     * **country_code**
     * **address1**
     * **state_or_province**
     * **postal_code**

     **Notes**
     * A unique customer address is a combination of the following core address fields:
       * **customer_id**
       * **first_name**
       * **last_name**
       * **company**
       * **phone**
       * **address_type**
       * **address1**
       * **address2**
       * **city**
       * **country_code**
       * **state_or_province**
       * **postal_code**
     * An attempt to create an address that already exists will result in no change to the address or custom form field values, an HTTP 200 return code, and the address will be absent from the response body.
     * The default rate limit for this endpoint is 10 concurrent requests.
     */
    createCustomersAddresses(
        requestBody: CustomersV3ApiSpecs.CreateCustomersAddressesData['body'],
    ) {
        return this.request.post<any, CustomersV3ApiSpecs.CreateCustomersAddressesError>({
            path: 'v3/customers/addresses',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update a Customer Address
     *
     * Updates a Customer Address. Multiple customer addresses can be updated in one call.

     **Required Fields**
     * **id** -- ID of the *Customer Address*

     **Limits**
     * Limit of **3** concurrent requests.

     **Notes**
     * A unique customer address is a combination of the following core address fields:
       * **first_name**
       * **last_name**
       * **company**
       * **phone**
       * **address_type**
       * **address1**
       * **address2**
       * **city**
       * **country_code**
       * **state_or_province**
       * **postal_code**
     * An attempt to update an address such that it becomes identical to another address that already exists will result in no change to the target address or custom form field values. The response will have an HTTP 200 return code, and the address will be absent from the response body.
     */
    updateCustomersAddresses(
        requestBody: CustomersV3ApiSpecs.UpdateCustomersAddressesData['body'],
    ) {
        return this.request.put<any, CustomersV3ApiSpecs.UpdateCustomersAddressesError>({
            path: 'v3/customers/addresses',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Customer Address
     *
     * Deletes a Customer Address.

     **Required Query**
     * id:in -- ID of the *Customer Address*
     */
    deleteCustomersAddresses(
        query?: CustomersV3ApiSpecs.DeleteCustomersAddressesData['query'],
    ) {
        return this.request.delete<any, any>({
            path: 'v3/customers/addresses',
            query,
        });
    }

    /**
     * Validate a customer credentials
     *
     * Validate a customer credentials - This endpoint has special rate limiting protections to protect against abuse.
     */
    validateCustomerCredentials(
        requestBody: CustomersV3ApiSpecs.ValidateCustomerCredentialsData['body'],
    ) {
        return this.request.post<CustomersV3ApiSpecs.ValidateCustomerCredentialsResponse, CustomersV3ApiSpecs.ValidateCustomerCredentialsError>({
            path: 'v3/customers/validate-credentials',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Customer Settings
     *
     * Returns the global-level customer settings.

     **Notes:**
     * Global customer settings don't apply on a channel when there are channel specific settings configured through [Channel Settings](/docs/rest-management/customers/channel-settings).

     */
    getCustomersSettings(
    ) {
        return this.request.get<CustomersV3ApiSpecs.GetCustomersSettingsResponse, any>({
            path: 'v3/customers/settings',
        });
    }

    /**
     * Update Customer Settings
     *
     * Updates the customer settings on the global level.
     */
    updateCustomersSettings(
        requestBody: CustomersV3ApiSpecs.UpdateCustomersSettingsData['body'],
    ) {
        return this.request.put<CustomersV3ApiSpecs.UpdateCustomersSettingsResponse, any>({
            path: 'v3/customers/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Customer Settings per Channel
     *
     * Returns the customer settings per channel.

     **Notes:**

      * `null` value configuration indicates that there is no override provided for a given channel; thus, values are inherited from [Global Settings](/docs/rest-management/customers/global-settings).

     */
    getCustomersSettingsChannel(
        channelId: CustomersV3ApiSpecs.GetCustomersSettingsChannelData['path']['channel_id'],
    ) {
        return this.request.get<CustomersV3ApiSpecs.GetCustomersSettingsChannelResponse, any>({
            path: `v3/customers/settings/channels/${channelId}`,
        });
    }

    /**
     * Update Customer Settings per Channel
     *
     * Update the customer settings per channel

     **Required Fields**

     * `channel_id`: Provide a `channel_id` array containing one or more channel IDs. Customers will have access to these channels and no others. This array cannot be empty.

     **Notes**

     * Setting `null` will delete override per given channel, and values will be inherited from the global level. Make sure the channel has `allow_global_logins` enabled.
     */
    updateCustomersSettingsChannel(
        channelId: CustomersV3ApiSpecs.UpdateCustomersSettingsChannelData['path']['channel_id'],
        requestBody: CustomersV3ApiSpecs.UpdateCustomersSettingsChannelData['body'],
    ) {
        return this.request.put<CustomersV3ApiSpecs.UpdateCustomersSettingsChannelResponse, any>({
            path: `v3/customers/settings/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get All Customer Attributes
     *
     * Returns a list of Customer Attributes. You can pass in optional filter parameters.
     */
    getCustomersAttributes(
        query?: CustomersV3ApiSpecs.GetCustomersAttributesData['query'],
    ) {
        return this.request.get<any, any>({
            path: 'v3/customers/attributes',
            query,
        });
    }

    /**
     * Create a Customer Attribute
     *
     * Creates a Customer Attribute. Multiple customer attributes can be created in one call.

     **Required Fields**
     * name
     * type

     **Limits**
     * Limit of 3 concurrent requests.

     **Notes**

     Once the data type is set, it cannot be changed. The attribute will need to be deleted then created again with the new data type. This will also delete it from the customer.

     Customer attributes are created separately from the customer. After the name and type are created, then the attributes can be added to the customer.

     A store cannot have more than 50 customer attributes.
     */
    createCustomersAttributes(
        requestBody: CustomersV3ApiSpecs.CreateCustomersAttributesData['body'],
    ) {
        return this.request.post<any, CustomersV3ApiSpecs.CreateCustomersAttributesError>({
            path: 'v3/customers/attributes',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update a Customer Attribute
     *
     * Updates a Customer Attribute. Multiple customer attributes can be updated in one call.

     **Required Fields**
     * id -- ID of the *Customer Attribute*

     Once the data type is set, it can not be changed. The attribute will need to be deleted then created again with the new data type. This will also delete it from the customer.

     **Limits**
     * Limit of 3 concurrent requests.
     */
    updateCustomersAttributes(
        requestBody: CustomersV3ApiSpecs.UpdateCustomersAttributesData['body'],
    ) {
        return this.request.put<any, CustomersV3ApiSpecs.UpdateCustomersAttributesError>({
            path: 'v3/customers/attributes',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Customer Attributes
     *
     * Deletes Customer Attributes from the store.

     **Required Query**
     * id:in -- ID of the *Customer Attribute*
     */
    deleteCustomersAttributes(
        query?: CustomersV3ApiSpecs.DeleteCustomersAttributesData['query'],
    ) {
        return this.request.delete<any, any>({
            path: 'v3/customers/attributes',
            query,
        });
    }

    /**
     * Get All Customer Attribute Values
     *
     * Returns a list of Customer Attribute Values. Optional filter parameters can be passed in.
     */
    getCustomersAttributeValues(
        query?: CustomersV3ApiSpecs.GetCustomersAttributeValuesData['query'],
    ) {
        return this.request.get<any, any>({
            path: 'v3/customers/attribute-values',
            query,
        });
    }

    /**
     * Upsert Customer Attribute Values
     *
     * Upserts Customer Attribute Values. Updates the attribute values on the Customer. Multiple customer attribute values can be updated in one call.

     Upsert checks for an existing record. If there is none, it creates the record, if there is a matching record, it updates that record.

     **Limits**
     * Limit of 10 customers per call.
     * Limit of 3 concurrent requests.
     */
    upsertCustomersAttributeValues(
        requestBody: CustomersV3ApiSpecs.UpsertCustomersAttributeValuesData['body'],
    ) {
        return this.request.put<any, CustomersV3ApiSpecs.UpsertCustomersAttributeValuesError>({
            path: 'v3/customers/attribute-values',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Customer Attribute Values
     *
     * Deletes Customer Attribute Values. Deletes the attribute value from the customer.

     **Required Query**
     * id:in - ID of the *Customer Attribute Value*
     */
    deleteCustomersAttributeValues(
        query?: CustomersV3ApiSpecs.DeleteCustomersAttributeValuesData['query'],
    ) {
        return this.request.delete<any, any>({
            path: 'v3/customers/attribute-values',
            query,
        });
    }

    /**
     * Get Customer Form Field Values
     *
     * Returns a list of form field values for the Customer or Customer Address object.

     To learn about adding and managing form fields, see [Adding and Editing Fields in the Account Signup Form](https://support.bigcommerce.com/s/article/Editing-Form-Fields).
     */
    getCustomersFormFieldValues(
        query?: CustomersV3ApiSpecs.GetCustomersFormFieldValuesData['query'],
    ) {
        return this.request.get<any, CustomersV3ApiSpecs.GetCustomersFormFieldValuesError>({
            path: 'v3/customers/form-field-values',
            query,
        });
    }

    /**
     * Upsert Customer Form Field Values (Deprecated)
     *
     * This endpoint is deprecated. Use [Update a Customer Address](/docs/rest-management/customers/addresses#update-a-customer-address) and [Update Customers](/docs/rest-management/customers#update-customers) endpoints instead.

     To learn more about editing form fields, see [Adding and Editing Fields in the Account Signup Form](https://support.bigcommerce.com/s/article/Editing-Form-Fields).

     **Limits**
     * Limit of 10 concurrent requests.
     */
    updateCustomerFormFieldValues(
        requestBody: CustomersV3ApiSpecs.UpdateCustomerFormFieldValuesData['body'],
    ) {
        return this.request.put<any, CustomersV3ApiSpecs.UpdateCustomerFormFieldValuesError>({
            path: 'v3/customers/form-field-values',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Customer Consent
     *
     * Gets the status of a customerʼs consent to allow data collection by cookies and scripts while shopping on a storefront.
     */
    getCustomerConsent(
        customerId: CustomersV3ApiSpecs.GetCustomerConsentData['path']['customerId'],
    ) {
        return this.request.get<any, CustomersV3ApiSpecs.GetCustomerConsentError>({
            path: `v3/customers/${customerId}/consent`,
        });
    }

    /**
     * Update Customer Consent
     *
     * Updates the status of a customerʼs consent to allow data collection by cookies and scripts while shopping on a storefront.
     */
    updateCustomerConsent(
        customerId: CustomersV3ApiSpecs.UpdateCustomerConsentData['path']['customerId'],
        requestBody: CustomersV3ApiSpecs.UpdateCustomerConsentData['body'],
    ) {
        return this.request.put<any, CustomersV3ApiSpecs.UpdateCustomerConsentError>({
            path: `v3/customers/${customerId}/consent`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Stored Instruments
     *
     * Lists all available stored instruments for a customer. This list will include all types of stored instruments namely card, account and bank_account instruments
     */
    getCustomerStoredInstruments(
    ) {
        return this.request.get<CustomersV3ApiSpecs.GetCustomerStoredInstrumentsResponse, CustomersV3ApiSpecs.GetCustomerStoredInstrumentsError>({
            path: 'v3/customers/{customerId}/stored-instruments',
        });
    }

    /**
     * Get Customer Metafields
     *
     * Gets customer metafields by passing the `customerId` in the query parameters.
     */
    getCustomersMetafields(
    ) {
        return this.request.get<any, any>({
            path: 'v3/customers/{customerId}/metafields',
        });
    }

    /**
     * Create Customer Metafields
     *
     * Creates Customer metafields by passing the `customerId` in the query parameters.
     */
    createCustomerMetafields(
        requestBody: CustomersV3ApiSpecs.CreateCustomerMetafieldsData['body'],
    ) {
        return this.request.post<CustomersV3ApiSpecs.CreateCustomerMetafieldsResponse, CustomersV3ApiSpecs.CreateCustomerMetafieldsError>({
            path: 'v3/customers/{customerId}/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Customer Metafields List
     *
     * Lists available metafields for a customer. To retrieve the list, use `customerId` and `metafieldId` in the query parameters.

     */
    getMetafieldsCustomerId(
    ) {
        return this.request.get<any, CustomersV3ApiSpecs.GetMetafieldsCustomerIdError>({
            path: 'v3/customers/{customerId}/metafields/{metafieldId}',
        });
    }

    /**
     * Update a Metafield
     *
     * Updates customer metafields. To update the customer metafields, use 'customerId' and 'metafield' in the query parameters.
     */
    updateCustomerMetafield(
        requestBody: CustomersV3ApiSpecs.UpdateCustomerMetafieldData['body'],
        query?: CustomersV3ApiSpecs.UpdateCustomerMetafieldData['query'],
    ) {
        return this.request.put<CustomersV3ApiSpecs.UpdateCustomerMetafieldResponse, CustomersV3ApiSpecs.UpdateCustomerMetafieldError>({
            path: 'v3/customers/{customerId}/metafields/{metafieldId}',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Delete Customer Metafields
     *
     * Deletes customer metafields. To delete customer metafields, use 'customerId' and 'metafieldId' in the query parameters.

     */
    deleteCustomerMetafieldsId(
    ) {
        return this.request.delete<any, CustomersV3ApiSpecs.DeleteCustomerMetafieldsIdError>({
            path: 'v3/customers/{customerId}/metafields/{metafieldId}',
        });
    }

    /**
     * Get All Customer Metafields
     *
     * Get all customer metafields.
     */
    getAllCustomersMetafields(
        query?: CustomersV3ApiSpecs.GetAllCustomersMetafieldsData['query'],
    ) {
        return this.request.get<CustomersV3ApiSpecs.GetAllCustomersMetafieldsResponse, any>({
            path: 'v3/customers/metafields',
            query,
        });
    }

    /**
     * Create Multiple Metafields
     *
     * Create multiple metafields.
     */
    createCustomersMetafields(
        requestBody: CustomersV3ApiSpecs.CreateCustomersMetafieldsData['body'],
    ) {
        return this.request.post<CustomersV3ApiSpecs.CreateCustomersMetafieldsResponse, CustomersV3ApiSpecs.CreateCustomersMetafieldsError>({
            path: 'v3/customers/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Multiple Metafields
     *
     * Create multiple metafields.
     */
    updateCustomersMetafields(
        requestBody: CustomersV3ApiSpecs.UpdateCustomersMetafieldsData['body'],
    ) {
        return this.request.put<CustomersV3ApiSpecs.UpdateCustomersMetafieldsResponse, CustomersV3ApiSpecs.UpdateCustomersMetafieldsError>({
            path: 'v3/customers/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Multiple Metafields
     *
     * Delete all customer metafields.
     */
    deleteCustomersMetafields(
    ) {
        return this.request.delete<CustomersV3ApiSpecs.DeleteCustomersMetafieldsResponse, CustomersV3ApiSpecs.DeleteCustomersMetafieldsError>({
            path: 'v3/customers/metafields',
        });
    }
}
