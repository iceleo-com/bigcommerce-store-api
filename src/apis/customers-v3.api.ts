import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CustomersV3ApiSpecs from '../generated/customers-v3';
export * as CustomersV3ApiSpecs from '../generated/customers-v3';

export class CustomersV3Api {
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
    customersGet(
        query?: CustomersV3ApiSpecs.CustomersGetData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomersGetResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/customers',
            query,
        });
    }

    /**
     * @deprecated Use `customersGet` instead.
     */
    getCustomers(...args: Parameters<CustomersV3Api['customersGet']>) {
        return this.customersGet(...args);
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
    customersPost(
        requestBody: CustomersV3ApiSpecs.CustomersPostData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomersPostResponses[200]>>,(RequestErrorResponse<413, Required<CustomersV3ApiSpecs.CustomersPostErrors[413]>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs.CustomersPostErrors[422]>>)>({
            path: 'v3/customers',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `customersPost` instead.
     */
    createCustomers(...args: Parameters<CustomersV3Api['customersPost']>) {
        return this.customersPost(...args);
    }

    /**
     * Update Customers
     *
     * Updates Customers. Subresource updates are not supported. Up to 10 customers can be updated in one call.

     **Required Fields**
     * id -- ID of the *Customer* This must be included in the request body

     **Read Only Fields**
     * id
     * registration_ip_address
     * date_created
     * date_modified

     **Notes**

     * Attributes Values can not be updated using Update a Customer. Use the [Update customer attribute values](/docs/rest-management/customers/customer-attribute-values#upsert-customer-attribute-values) endpoint.
     * channel_ids -- Updating the list of channels a customer can access may create some side effects in a multi-storefront situation. This list determines which customer account we will use to authenticate a shopper given a channel.
     */
    customersPut(
        requestBody: CustomersV3ApiSpecs.CustomersPutData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomersPutResponses[200]>>,(RequestErrorResponse<413, Required<CustomersV3ApiSpecs.CustomersPutErrors[413]>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs.CustomersPutErrors[422]>>)>({
            path: 'v3/customers',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `customersPut` instead.
     */
    updateCustomers(...args: Parameters<CustomersV3Api['customersPut']>) {
        return this.customersPut(...args);
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
    customersDelete(
        query?: CustomersV3ApiSpecs.CustomersDeleteData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CustomersV3ApiSpecs.CustomersDeleteResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/customers',
            query,
        });
    }

    /**
     * @deprecated Use `customersDelete` instead.
     */
    deleteCustomers(...args: Parameters<CustomersV3Api['customersDelete']>) {
        return this.customersDelete(...args);
    }

    /**
     * Get All Customer Addresses
     *
     * Returns a list of Customer Addresses. Optional filter parameters can be passed in.
     */
    customersAddressesGet(
        query?: CustomersV3ApiSpecs.CustomersAddressesGetData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomersAddressesGetResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/customers/addresses',
            query,
        });
    }

    /**
     * @deprecated Use `customersAddressesGet` instead.
     */
    getCustomersAddresses(...args: Parameters<CustomersV3Api['customersAddressesGet']>) {
        return this.customersAddressesGet(...args);
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
    customersAddressesPost(
        requestBody: CustomersV3ApiSpecs.CustomersAddressesPostData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomersAddressesPostResponses[200]>>,RequestErrorResponse<422, Required<CustomersV3ApiSpecs.CustomersAddressesPostErrors[422]>>>({
            path: 'v3/customers/addresses',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `customersAddressesPost` instead.
     */
    createCustomersAddresses(...args: Parameters<CustomersV3Api['customersAddressesPost']>) {
        return this.customersAddressesPost(...args);
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
    customersAddressesPut(
        requestBody: CustomersV3ApiSpecs.CustomersAddressesPutData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomersAddressesPutResponses[200]>>,RequestErrorResponse<422, Required<CustomersV3ApiSpecs.CustomersAddressesPutErrors[422]>>>({
            path: 'v3/customers/addresses',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `customersAddressesPut` instead.
     */
    updateCustomersAddresses(...args: Parameters<CustomersV3Api['customersAddressesPut']>) {
        return this.customersAddressesPut(...args);
    }

    /**
     * Delete a Customer Address
     *
     * Deletes a Customer Address.

     **Required Query**
     * id:in -- ID of the *Customer Address*
     */
    customersAddressesDelete(
        query?: CustomersV3ApiSpecs.CustomersAddressesDeleteData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CustomersV3ApiSpecs.CustomersAddressesDeleteResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/customers/addresses',
            query,
        });
    }

    /**
     * @deprecated Use `customersAddressesDelete` instead.
     */
    deleteCustomersAddresses(...args: Parameters<CustomersV3Api['customersAddressesDelete']>) {
        return this.customersAddressesDelete(...args);
    }

    /**
     * Validate a customer credentials
     *
     * Validate a customer credentials - This endpoint has special rate limiting protections to protect against abuse.
     */
    customerValidateCredentials(
        requestBody: CustomersV3ApiSpecs.CustomerValidateCredentialsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerValidateCredentialsResponses[200]>>,(RequestErrorResponse<422, Required<CustomersV3ApiSpecs.CustomerValidateCredentialsErrors[422]>> | RequestErrorResponse<429, Required<CustomersV3ApiSpecs.CustomerValidateCredentialsErrors[429]>>)>({
            path: 'v3/customers/validate-credentials',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `customerValidateCredentials` instead.
     */
    validateCustomerCredentials(...args: Parameters<CustomersV3Api['customerValidateCredentials']>) {
        return this.customerValidateCredentials(...args);
    }

    /**
     * Get Customer Settings
     *
     * Returns the global-level customer settings.
     */
    customerSettingsGet(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerSettingsGetResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/customers/settings',
        });
    }

    /**
     * @deprecated Use `customerSettingsGet` instead.
     */
    getCustomersSettings(...args: Parameters<CustomersV3Api['customerSettingsGet']>) {
        return this.customerSettingsGet(...args);
    }

    /**
     * Update Customer Settings
     *
     * Updates the customer settings on the global level.
     */
    customerSettingsPut(
        requestBody: CustomersV3ApiSpecs.CustomerSettingsPutData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerSettingsPutResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/customers/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `customerSettingsPut` instead.
     */
    updateCustomersSettings(...args: Parameters<CustomersV3Api['customerSettingsPut']>) {
        return this.customerSettingsPut(...args);
    }

    /**
     * Get Customer Settings per Channel
     *
     * Returns the customer settings per channel.

     **Notes**

      * `null` indicates that there is no override per given channel and values are inherited from the global level.
     */
    customerSettingsChannelGet(
        channelId: CustomersV3ApiSpecs.CustomerSettingsChannelGetData['path']['channel_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerSettingsChannelGetResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/customers/settings/channels/${channelId}`,
        });
    }

    /**
     * @deprecated Use `customerSettingsChannelGet` instead.
     */
    getCustomersSettingsChannel(...args: Parameters<CustomersV3Api['customerSettingsChannelGet']>) {
        return this.customerSettingsChannelGet(...args);
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
    customerSettingsChannelPut(
        channelId: CustomersV3ApiSpecs.CustomerSettingsChannelPutData['path']['channel_id'],
        requestBody: CustomersV3ApiSpecs.CustomerSettingsChannelPutData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerSettingsChannelPutResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/customers/settings/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `customerSettingsChannelPut` instead.
     */
    updateCustomersSettingsChannel(...args: Parameters<CustomersV3Api['customerSettingsChannelPut']>) {
        return this.customerSettingsChannelPut(...args);
    }

    /**
     * Get All Customer Attributes
     *
     * Returns a list of Customer Attributes. You can pass in optional filter parameters.
     */
    customersAttributesGet(
        query?: CustomersV3ApiSpecs.CustomersAttributesGetData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomersAttributesGetResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/customers/attributes',
            query,
        });
    }

    /**
     * @deprecated Use `customersAttributesGet` instead.
     */
    getCustomersAttributes(...args: Parameters<CustomersV3Api['customersAttributesGet']>) {
        return this.customersAttributesGet(...args);
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
    customersAttributesPost(
        requestBody: CustomersV3ApiSpecs.CustomersAttributesPostData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomersAttributesPostResponses[200]>>,RequestErrorResponse<422, Required<CustomersV3ApiSpecs.CustomersAttributesPostErrors[422]>>>({
            path: 'v3/customers/attributes',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `customersAttributesPost` instead.
     */
    createCustomersAttributes(...args: Parameters<CustomersV3Api['customersAttributesPost']>) {
        return this.customersAttributesPost(...args);
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
    customersAttributesPut(
        requestBody: CustomersV3ApiSpecs.CustomersAttributesPutData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomersAttributesPutResponses[200]>>,RequestErrorResponse<422, Required<CustomersV3ApiSpecs.CustomersAttributesPutErrors[422]>>>({
            path: 'v3/customers/attributes',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `customersAttributesPut` instead.
     */
    updateCustomersAttributes(...args: Parameters<CustomersV3Api['customersAttributesPut']>) {
        return this.customersAttributesPut(...args);
    }

    /**
     * Delete Customer Attributes
     *
     * Deletes Customer Attributes from the store.

     **Required Query**
     * id:in -- ID of the *Customer Attribute*
     */
    customersAttributesDelete(
        query?: CustomersV3ApiSpecs.CustomersAttributesDeleteData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CustomersV3ApiSpecs.CustomersAttributesDeleteResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/customers/attributes',
            query,
        });
    }

    /**
     * @deprecated Use `customersAttributesDelete` instead.
     */
    deleteCustomersAttributes(...args: Parameters<CustomersV3Api['customersAttributesDelete']>) {
        return this.customersAttributesDelete(...args);
    }

    /**
     * Get All Customer Attribute Values
     *
     * Returns a list of Customer Attribute Values. Optional filter parameters can be passed in.
     */
    customersAttributeValuesGet(
        query?: CustomersV3ApiSpecs.CustomersAttributeValuesGetData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomersAttributeValuesGetResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/customers/attribute-values',
            query,
        });
    }

    /**
     * @deprecated Use `customersAttributeValuesGet` instead.
     */
    getCustomersAttributeValues(...args: Parameters<CustomersV3Api['customersAttributeValuesGet']>) {
        return this.customersAttributeValuesGet(...args);
    }

    /**
     * Upsert Customer Attribute Values
     *
     * Upserts Customer Attribute Values. Updates the attribute values on the Customer. Multiple customer attribute values can be updated in one call.

     Upsert checks for an existing record. If there is none, it creates the record, if there is a matching record, it updates that record.

     **Limits**
     * 10 per call limit.
     */
    customersAttributeValuesPut(
        requestBody: CustomersV3ApiSpecs.CustomersAttributeValuesPutData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomersAttributeValuesPutResponses[200]>>,RequestErrorResponse<422, Required<CustomersV3ApiSpecs.CustomersAttributeValuesPutErrors[422]>>>({
            path: 'v3/customers/attribute-values',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `customersAttributeValuesPut` instead.
     */
    upsertCustomersAttributeValues(...args: Parameters<CustomersV3Api['customersAttributeValuesPut']>) {
        return this.customersAttributeValuesPut(...args);
    }

    /**
     * Delete Customer Attribute Values
     *
     * Deletes Customer Attribute Values. Deletes the attribute value from the customer.

     **Required Query**
     * id:in - ID of the *Customer Attribute Value*
     */
    customersAttributeValuesDelete(
        query?: CustomersV3ApiSpecs.CustomersAttributeValuesDeleteData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CustomersV3ApiSpecs.CustomersAttributeValuesDeleteResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/customers/attribute-values',
            query,
        });
    }

    /**
     * @deprecated Use `customersAttributeValuesDelete` instead.
     */
    deleteCustomersAttributeValues(...args: Parameters<CustomersV3Api['customersAttributeValuesDelete']>) {
        return this.customersAttributeValuesDelete(...args);
    }

    /**
     * Get Customer Form Field Values
     *
     * Returns a list of form field values for the Customer or Customer Address object.

     To learn about adding and managing form fields, see [Adding and Editing Fields in the Account Signup Form](https://support.bigcommerce.com/s/article/Editing-Form-Fields).
     */
    customerFormFieldsGet(
        query?: CustomersV3ApiSpecs.CustomerFormFieldsGetData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerFormFieldsGetResponses[200]>>,RequestErrorResponse<422, Required<CustomersV3ApiSpecs.CustomerFormFieldsGetErrors[422]>>>({
            path: 'v3/customers/form-field-values',
            query,
        });
    }

    /**
     * @deprecated Use `customerFormFieldsGet` instead.
     */
    getCustomersFormFieldValues(...args: Parameters<CustomersV3Api['customerFormFieldsGet']>) {
        return this.customerFormFieldsGet(...args);
    }

    /**
     * Upsert Customer Form Field Values
     *
     * Updates form field values on the Customer or Customer Address objects. Multiple form field values can be updated in one call.

     Upsert checks for an existing record, if there is none it creates the record, if there is a matching record it updates that record.

     To learn more about editing form fields, see [Adding and Editing Fields in the Account Signup Form](https://support.bigcommerce.com/s/article/Editing-Form-Fields).

     **Limits**
     * Limit of 10 concurrent requests.
     */
    customerFormFieldValuePut(
        requestBody: CustomersV3ApiSpecs.CustomerFormFieldValuePutData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomerFormFieldValuePutResponses[200]>>,RequestErrorResponse<422, Required<CustomersV3ApiSpecs.CustomerFormFieldValuePutErrors[422]>>>({
            path: 'v3/customers/form-field-values',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `customerFormFieldValuePut` instead.
     */
    updateCustomerFormFieldValues(...args: Parameters<CustomersV3Api['customerFormFieldValuePut']>) {
        return this.customerFormFieldValuePut(...args);
    }

    /**
     * Get Customer Consent
     *
     * Gets the status of a customer's consent to allow data collection by cookies and scripts while shopping on a storefront.
     */
    customersConsentByCustomerIdGet(
        customerId: CustomersV3ApiSpecs.CustomersConsentByCustomerIdGetData['path']['customerId'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomersConsentByCustomerIdGetResponses[200]>>,(RequestErrorResponse<401, Required<CustomersV3ApiSpecs.CustomersConsentByCustomerIdGetErrors[401]>> | RequestErrorResponse<403, Required<CustomersV3ApiSpecs.CustomersConsentByCustomerIdGetErrors[403]>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs.CustomersConsentByCustomerIdGetErrors[422]>>)>({
            path: `v3/customers/${customerId}/consent`,
        });
    }

    /**
     * @deprecated Use `customersConsentByCustomerIdGet` instead.
     */
    getCustomerConsent(...args: Parameters<CustomersV3Api['customersConsentByCustomerIdGet']>) {
        return this.customersConsentByCustomerIdGet(...args);
    }

    /**
     * Update Customer Consent
     *
     * Updates the status of a customer's consent to allow data collection by cookies and scripts while shopping on a storefront.
     */
    customersConsentByCustomerIdPut(
        customerId: CustomersV3ApiSpecs.CustomersConsentByCustomerIdPutData['path']['customerId'],
        requestBody: CustomersV3ApiSpecs.CustomersConsentByCustomerIdPutData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.CustomersConsentByCustomerIdPutResponses[200]>>,(RequestErrorResponse<401, Required<CustomersV3ApiSpecs.CustomersConsentByCustomerIdPutErrors[401]>> | RequestErrorResponse<403, Required<CustomersV3ApiSpecs.CustomersConsentByCustomerIdPutErrors[403]>> | RequestErrorResponse<422, Required<CustomersV3ApiSpecs.CustomersConsentByCustomerIdPutErrors[422]>>)>({
            path: `v3/customers/${customerId}/consent`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `customersConsentByCustomerIdPut` instead.
     */
    updateCustomerConsent(...args: Parameters<CustomersV3Api['customersConsentByCustomerIdPut']>) {
        return this.customersConsentByCustomerIdPut(...args);
    }

    /**
     * Get Stored Instruments
     *
     * Lists all available stored instruments for a customer. This list will include all types of stored instruments namely card, account and bank_account instruments
     */
    liststoredinstruments(
        customerId: CustomersV3ApiSpecs.ListstoredinstrumentsData['path']['customerId'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomersV3ApiSpecs.ListstoredinstrumentsResponses[200]>>,(RequestErrorResponse<401, Required<CustomersV3ApiSpecs.ListstoredinstrumentsErrors[401]>> | RequestErrorResponse<403, Required<CustomersV3ApiSpecs.ListstoredinstrumentsErrors[403]>>)>({
            path: `v3/customers/${customerId}/stored-instruments`,
        });
    }

    /**
     * @deprecated Use `liststoredinstruments` instead.
     */
    getCustomerStoredInstruments(...args: Parameters<CustomersV3Api['liststoredinstruments']>) {
        return this.liststoredinstruments(...args);
    }
}
