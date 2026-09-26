export type BigCommerceStoreApiConfig = {
    storeHash: string;
    accessToken: string;
    /**
     * Storefront domain (e.g. `store.example.com`), used by the Current Customer API.
     */
    storeDomain?: string;
    /**
     * Your app's domain (e.g. `app.example.com`), used by the Shipping Provider and Tax Provider APIs.
     */
    appDomain?: string;
    /**
     * Include the raw response body as `response_text` in every response, for debugging. Defaults to `false`.
     */
    includeResponseText?: boolean;
}
