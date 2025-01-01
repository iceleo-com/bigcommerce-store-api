// This file is auto-generated by @hey-api/openapi-ts

/**
 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
 */
export type ParameterAccept = string;

/**
 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
 */
export type ParameterContentType = string;

export type taxClass_Full = {
    /**
     * The unique numerical ID of the tax class. A read-only value which is automatically assigned and increments sequentially.
     */
    id?: string;
    /**
     * The name of the tax class.
     */
    name?: string;
    /**
     * Date and time of the tax class' creation. Read-Only.
     */
    created_at?: string;
    /**
     * Date and time when the tax class was last updated. Read-Only.
     */
    updated_at?: string;
};

export type GetTaxClassesData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    query?: {
        /**
         * Optional filter param. Number of items per page
         */
        limit?: number;
        /**
         * Optional filter param. Number of pages.
         */
        page?: number;
    };
};

export type GetTaxClassesResponse = (Array<taxClass_Full>);

export type GetTaxClassesError = unknown;

export type GetTaxClassData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    path: {
        /**
         * ID of the tax class.
         */
        id: number;
    };
};

export type GetTaxClassResponse = (taxClass_Full);

export type GetTaxClassError = unknown;