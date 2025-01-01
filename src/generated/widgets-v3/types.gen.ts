// This file is auto-generated by @hey-api/openapi-ts

/**
 * Error payload for the BigCommerce API.
 *
 */
export type BaseError = {
    /**
     * The HTTP status code.
     *
     */
    status?: number;
    /**
     * The error title describing the particular error.
     *
     */
    title?: string;
    type?: string;
    instance?: string;
};

export type DetailedErrors = {
    [key: string]: unknown;
};

/**
 * Error payload for the BigCommerce API.
 */
export type error_Base = {
    /**
     * The HTTP status code.
     */
    status?: number;
    /**
     * The error title describing the particular error.
     */
    title?: string;
    type?: string;
    instance?: string;
    errors?: {
        [key: string]: unknown;
    };
};

export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};

/**
 * Response metadata.
 */
export type Meta = {
    [key: string]: unknown;
};

/**
 * Data about the response, including pagination and collection totals.
 */
export type metaCollection = {
    pagination?: pagination;
};

export type new_model = Array<{
    type?: string;
    label?: string;
    id?: string;
    default?: number;
    typeMeta?: string;
    conditional?: widgetSchemaConditional;
}>;

/**
 * Data about the response, including pagination and collection totals.
 *
 */
export type pagination = {
    /**
     * Total number of items in the result set.
     *
     */
    total?: number;
    /**
     * Total number of items in the collection response.
     *
     */
    count?: number;
    /**
     * The amount of items returned in the collection per page, controlled by the limit parameter.
     *
     */
    per_page?: number;
    /**
     * The page you are currently on within the collection.
     *
     */
    current_page?: number;
    /**
     * The total number of pages in the collection.
     *
     */
    total_pages?: number;
    /**
     * Pagination links for the previous and next parts of the whole collection.
     *
     */
    links?: {
        /**
         * Link to the previous page returned in the response.
         *
         */
        previous?: string;
        /**
         * Link to the current page returned in the response.
         *
         */
        current?: string;
        /**
         * Link to the next page returned in the response.
         *
         */
        next?: string;
    };
};

/**
 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
 */
export type ParameterAccept = string;

/**
 * The channel ID.
 */
export type ParameterChannelID = string;

/**
 * A comma-separated list of channel ids to filter the results by.
 */
export type ParameterChannelIdInParam = Array<(number)>;

/**
 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
 */
export type ParameterContentType = string;

/**
 * The template file, for example: `pages/home`.
 */
export type ParameterFilterTemplateFileParam = string;

/**
 * This is an optional query parameter used to fetch a specific widget template version.
 */
export type ParameterFilterVersionUUID = string;

/**
 * The URL-encoded name of the widget.
 */
export type ParameterFilterWidgetNameParam = string;

/**
 * The kind of widget template.
 */
export type ParameterFilterWidgetTemplateKindParam = string;

/**
 * The identifier for a specific widget template.
 */
export type ParameterFilterWidgetTemplateUUIDParam = string;

/**
 * The identifier for a specific widget.
 */
export type ParameterFilterWidgetUUIDParam = string;

/**
 * The identifier for a specific layout.
 */
export type ParameterLayoutUUID = string;

/**
 * Controls the number of items per page in a limited (paginated) list of products.
 *
 */
export type ParameterLimitParam = number;

/**
 * Use to pass in comma-separated list of widget names. Example: `/widgets?name:in=test-widget-name,header%20images`
 */
export type ParameterNameInParam = Array<(string)>;

/**
 * Specifies the page number in a limited (paginated) list of products.
 *
 */
export type ParameterPageParam = number;

/**
 * The identifier for a specific placement.
 */
export type ParameterPlacementUUID = string;

/**
 * The query string associated with a widget's name and description.
 *
 */
export type ParameterQueryWidgetsParam = string;

/**
 * The template file, for example: `templateFile=pages/home`.
 */
export type ParameterRequiredTemplateFile = string;

/**
 * A comma-separated list of site IDs to filter the results by.
 */
export type ParameterSiteIdInParam = Array<(number)>;

/**
 * The identifier for a specific template.
 */
export type ParameterTemplateUUID = string;

/**
 * The identifier for a specific widget.
 */
export type ParameterWidgetUUID = string;

export type placement_Base = {
    /**
     * The identifier of a page you would like to target. For product pages, choose product ID. For category pages, choose category ID. Home page does not support `entity_id`.
     */
    entity_id?: string;
    /**
     * The sort order to control the position of a content widget in a region.
     */
    sort_order?: number;
    /**
     * The name of the region in which to insert content widgets.
     */
    region?: string;
    /**
     * Sets the placement as either inactive or active.
     */
    status?: 'inactive' | 'active';
};

/**
 * Sets the placement as either inactive or active.
 */
export type status = 'inactive' | 'active';

export type placement_Full = {
    /**
     * The primary identifier.
     */
    uuid?: string;
    /**
     * The template file that you would like to target.
     */
    template_file?: string;
    /**
     * The date on which this object was initially created.
     */
    date_created?: string;
    /**
     * The date on which this object was last updated.
     */
    date_modified?: string;
    /**
     * The ID of the channel on which this placement exists.
     */
    channel_id?: number;
} & placement_Base & {
    widget?: widget_Full;
};

export type placement_Post = {
    /**
     * A widget identifier.
     */
    widget_uuid: string;
    /**
     * The template file that you would like to target.
     */
    template_file: string;
    /**
     * The id of the channel on which to create this placement. Defaults to the first channel created on the store.
     */
    channel_id?: number;
} & placement_Base;

export type placement_Put = {
    /**
     * The template file that you would like to target.
     */
    template_file?: string;
    /**
     * A widget identifier.
     */
    widget_uuid?: string;
    /**
     * The ID of the channel on which this placement exists.
     */
    channel_id?: number;
} & placement_Base;

export type themeRegion = {
    /**
     * The region name.
     */
    name?: string;
};

export type widget_Base = {
    /**
     * The user-friendly name.
     */
    name?: string;
    /**
     * The user-friendly description.
     */
    description?: string;
    /**
     * The JSON data that populates the template.
     */
    widget_configuration?: {
        [key: string]: unknown;
    };
};

export type widget_Full = widget_Base & {
    /**
     * The primary identifier.
     */
    uuid?: string;
    widget_template?: widgetTemplate_Full;
    /**
     * The date on which this object was initially created.
     */
    date_created?: string;
    /**
     * The date on which this object was last updated.
     */
    date_modified?: string;
    /**
     * The identifier of the widget template version associated with this widget.
     */
    version_uuid?: string;
    /**
     * The ID of the channel on which this widget exists.
     */
    channel_id?: number;
};

export type widget_Post = {
    /**
     * User friendly name.
     */
    name: string;
    /**
     * The user-friendly description.
     */
    description?: string;
    /**
     * The JSON data that populates the template.
     */
    widget_configuration?: {
        [key: string]: unknown;
    };
    /**
     * The widget template UUID.
     */
    widget_template_uuid: string;
    /**
     * The ID of the channel on which to create this widget. Defaults to the first channel created on the store.
     */
    channel_id?: number;
};

export type widget_Put = widget_Base & {
    /**
     * The widget template UUID.
     */
    widget_template_uuid?: string;
    channel_id?: number;
    /**
     * Upgrade the Widget to latest version of the WidgetTemplate.
     */
    upgrade?: boolean;
};

/**
 * The schema for the widget’s merchant-facing UI. For more information on the available schema settings, see [Widget UI Schema](/docs/storefront/widgets/input-reference/schema).
 */
export type widgetSchema = Array<(widgetSchemaTab | widgetSchemaArray | widgetSchemaHidden)>;

/**
 * **Array.** Use the **array** settings type to build collections of elements within the widget. Each element in the array can contain tabs, sections, and an entire schema.
 */
export type widgetSchemaArray = {
    type?: 'array';
    label?: string;
    id?: string;
    /**
     * number of elements in the list to display by default.
     */
    defaultCount?: number;
    /**
     * name for each element in the list
     */
    entryLabel?: string;
    /**
     * used to display an image stored at the specified attribute name
     */
    thumbnail?: {
        type?: string;
        valueKey?: string;
    };
    /**
     * The schema used for each element in the array.
     */
    schema?: Array<(widgetSchemaHidden | widgetSchemaTab)>;
};

export type type = 'array';

/**
 * An optional property that can be added to each setting to control whether it should be displayed to the user while editing in Page Builder. This does not clear the value in the setting, just controls the display of the setting.
 */
export type widgetSchemaConditional = {
    /**
     * The ID of the `settings` object the conditional attribute is related to. You must define the key within the same settings array as the conditional property to scope the conditional logic to the relevant settings group.
     */
    key?: string;
    /**
     * Specifies the operation used to determine whether to display the setting. The `IN` operator is currently the only supported operator. The setting will be displayed if the conditional’s `value` property is equal to the selected value of the `selectOptions`.
     */
    operator?: string;
    /**
     * A single-object array containing a value from the `typeMeta`'s `selectOptions`.
     */
    value?: Array<unknown>;
};

/**
 * **Hidden.** Use the **hidden** settings type to create controls that have no user interface drawn in Page Builder. Hidden settings are not grouped into any other tabs or arrays.
 */
export type widgetSchemaHidden = {
    type?: 'hidden';
    settings?: Array<{
        /**
         * The type of setting component to display. You can view the list of elements below to discover which are available to use.
         *
         * For examples of each type of setting, see [Page Builder > Schema Settings](/docs/storefront/widgets/input-reference/settings#alignment) in Theme Docs.
         */
        type?: 'alignment' | 'boolean' | 'boxModel' | 'code' | 'color' | 'imageManager' | 'input' | 'number' | 'productId' | 'productImage' | 'range' | 'regexInput' | 'select' | 'text' | 'toggle';
        /**
         * The user friendly message to inform the user how this setting will be used.
         */
        label?: string;
        /**
         * The variable name where the setting value will be available in the widget template.
         */
        id?: string;
        /**
         * The default value to use when rendering the widget for the first time. Make sure to set sensible defaults to make your widget easier to use.
         */
        default?: string;
        /**
         * Additional information needed based on the selected setting type.
         */
        typeMeta?: {
            selectOptions?: Array<{
                label?: string;
                value?: string;
            }>;
        };
        /**
         * An optional property that can be added to each setting to control whether it should be displayed to the user while editing in Page Builder. This does not clear the value in the setting, just controls the display of the setting.
         */
        conditional?: {
            /**
             * The ID of the `settings` object the conditional attribute is related to. You must define the key within the same settings array as the conditional property to scope the conditional logic to the relevant settings group.
             */
            key?: string;
            /**
             * Specifies the operation used to determine whether to display the setting. The `IN` operator is currently the only supported operator. The setting will be displayed if the conditional’s `value` property is equal to the selected value of the `selectOptions`.
             */
            operator?: string;
            /**
             * A single-object array containing a value from the `typeMeta`'s `selectOptions`.
             */
            value?: Array<unknown>;
        };
    }>;
};

export type type2 = 'hidden';

/**
 * For examples of each type of setting, see [Page Builder > Schema Settings](/docs/storefront/widgets/input-reference/settings#alignment) in Theme Docs.
 */
export type widgetSchemaSetting_Base = {
    /**
     * The type of setting component to display. You can view the list of elements below to discover which are available to use.
     *
     * For examples of each type of setting, see [Page Builder > Schema Settings](/docs/storefront/widgets/input-reference/settings#alignment) in Theme Docs.
     */
    type?: 'alignment' | 'boolean' | 'boxModel' | 'code' | 'color' | 'imageManager' | 'input' | 'number' | 'productId' | 'productImage' | 'range' | 'regexInput' | 'select' | 'text' | 'toggle';
    /**
     * The user friendly message to inform the user how this setting will be used.
     */
    label?: string;
    /**
     * The variable name where the setting value will be available in the widget template.
     */
    id?: string;
    /**
     * The default value to use when rendering the widget for the first time. Make sure to set sensible defaults to make your widget easier to use.
     */
    default?: string;
    /**
     * Additional information needed based on the selected setting type.
     */
    typeMeta?: {
        selectOptions?: Array<{
            label?: string;
            value?: string;
        }>;
    };
    conditional?: widgetSchemaConditional;
};

/**
 * The type of setting component to display. You can view the list of elements below to discover which are available to use.
 *
 * For examples of each type of setting, see [Page Builder > Schema Settings](/docs/storefront/widgets/input-reference/settings#alignment) in Theme Docs.
 */
export type type3 = 'alignment' | 'boolean' | 'boxModel' | 'code' | 'color' | 'imageManager' | 'input' | 'number' | 'productId' | 'productImage' | 'range' | 'regexInput' | 'select' | 'text' | 'toggle';

/**
 * **Tab.** Use the **tab** settings type to create settings visible in Page Builder.
 */
export type widgetSchemaTab = {
    /**
     * The type of setting component to display.
     */
    type?: 'tab';
    /**
     * The user-friendly message to inform the user how this setting will be used.
     */
    label?: string;
    /**
     * Groups of related settings.
     */
    sections?: Array<{
        /**
         * The user-friendly message to inform the user how this setting will be used.
         */
        label?: string;
        /**
         * For examples of schema settings, see [Widget UI Input Types](/docs/storefront/widgets/input-reference/settings).
         */
        settings?: Array<{
            /**
             * The type of setting component to display. You can view the list of elements below to discover which are available to use.
             *
             * For examples of each type of setting, see [Page Builder > Schema Settings](/docs/storefront/widgets/input-reference/settings#alignment) in Theme Docs.
             */
            type?: 'alignment' | 'boolean' | 'boxModel' | 'code' | 'color' | 'imageManager' | 'input' | 'number' | 'productId' | 'productImage' | 'range' | 'regexInput' | 'select' | 'text' | 'toggle';
            /**
             * The user friendly message to inform the user how this setting will be used.
             */
            label?: string;
            /**
             * The variable name where the setting value will be available in the widget template.
             */
            id?: string;
            /**
             * The default value to use when rendering the widget for the first time. Make sure to set sensible defaults to make your widget easier to use.
             */
            default?: string;
            /**
             * Additional information needed based on the selected setting type.
             */
            typeMeta?: {
                selectOptions?: Array<{
                    label?: string;
                    value?: string;
                }>;
            };
            /**
             * An optional property that can be added to each setting to control whether it should be displayed to the user while editing in Page Builder. This does not clear the value in the setting, just controls the display of the setting.
             */
            conditional?: {
                /**
                 * The ID of the `settings` object the conditional attribute is related to. The key must be defined within the same settings array as the conditional property. This ensures the conditional logic is scoped to the relevant settings group.
                 */
                key?: string;
                /**
                 * Specifies the operation used to determine whether to display the setting. The `IN` operator is currently the only supported operator. The setting will be displayed if the conditional’s `value` property is equal to the selected value of the `selectOptions`.
                 */
                operator?: string;
                /**
                 * A single-object array containing a value from the `typeMeta`'s `selectOptions`.
                 */
                value?: Array<unknown>;
            };
        }>;
    }>;
};

/**
 * The type of setting component to display.
 */
export type type4 = 'tab';

export type widgetSchemaTabSections = {
    label?: string;
    /**
     * For examples of each type of setting, see [Page Builder > Schema Settings](/docs/storefront/widgets/input-reference/settings#alignment) in Theme Docs.
     */
    settings?: Array<widgetSchemaSetting_Base>;
};

export type widgetSchemaTabSectionsSettings = {
    [key: string]: unknown;
};

export type widgetTemplate_Base = {
    /**
     * The user-friendly name.
     */
    name?: string;
    schema?: widgetSchema;
    /**
     * The widget template HTML. Supports Handlebars and Paper helpers.
     */
    template?: string;
    /**
     * The GraphQL Storefront API query that provides widget data.
     */
    storefront_api_query?: string;
};

export type widgetTemplate_Full = widgetTemplate_Base & {
    /**
     * The primary identifier.
     */
    uuid?: string;
    /**
     * The kind of widget template.
     */
    kind?: string;
    /**
     * The date on which this object was initially created.
     */
    date_created?: string;
    /**
     * The date on which this object was last updated.
     */
    date_modified?: string;
    /**
     * The identifier to the current version of this widget template.
     */
    current_version_uuid?: string;
    /**
     * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation.
     */
    icon_name?: string;
};

export type widgetTemplate_Post = {
    /**
     * User-friendly name.
     */
    name: string;
    schema?: widgetSchema;
    /**
     * Handlebars HTML content. Also has access to Stencil Paper helpers.
     */
    template: string;
    /**
     * The GraphQL Storefront API query that provides widget data.
     */
    storefront_api_query?: string;
    /**
     * The id of the channel on which to create this template. Defaults to the first channel created on the store.
     */
    channel_id?: number;
};

export type widgetTemplate_Put = widgetTemplate_Base & {
    /**
     * Can be added to create a new widget template version instead of updating the current one.
     */
    create_new_version?: boolean;
    /**
     * The id of the channel on which to place this template.
     */
    channel_id?: number;
};

export type WidgetTemplatePreview = {
    /**
     * The JSON data that populates the template.
     */
    widget_configuration?: {
        [key: string]: unknown;
    };
};

export type WidgetTemplatePreviewResponse = {
    data?: {
        /**
         * The HTML render of the widget template.
         */
        html?: string;
    };
};

export type CreateWidgetTemplateData = {
    body: widgetTemplate_Post;
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
         */
        'Content-Type': string;
    };
};

export type CreateWidgetTemplateResponse = ({
    data?: widgetTemplate_Full;
    meta?: Meta;
});

export type CreateWidgetTemplateError = (error_Base);

export type GetWidgetTemplatesData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
         */
        'Content-Type': string;
    };
    query?: {
        /**
         * A comma-separated list of channel ids to filter the results by.
         */
        'channel_id:in'?: Array<(number)>;
        /**
         * Controls the number of items per page in a limited (paginated) list of products.
         *
         */
        limit?: number;
        /**
         * Specifies the page number in a limited (paginated) list of products.
         *
         */
        page?: number;
        /**
         * The kind of widget template.
         */
        widget_template_kind?: string;
    };
};

export type GetWidgetTemplatesResponse = ({
    data?: Array<widgetTemplate_Full>;
    meta?: metaCollection;
});

export type GetWidgetTemplatesError = (error_Base);

export type PreviewWidgetData = {
    body: WidgetTemplatePreview;
    path: {
        /**
         * The identifier for a specific template.
         */
        uuid: string;
    };
};

export type PreviewWidgetResponse = (WidgetTemplatePreviewResponse);

export type PreviewWidgetError = (unknown);

export type GetWidgetTemplateData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    path: {
        /**
         * The identifier for a specific template.
         */
        uuid: string;
    };
    query?: {
        /**
         * This is an optional query parameter used to fetch a specific widget template version.
         */
        version_uuid?: string;
    };
};

export type GetWidgetTemplateResponse = ({
    data?: widgetTemplate_Full;
    meta?: Meta;
});

export type GetWidgetTemplateError = (error_Base);

export type UpdateWidgetTemplateData = {
    body: widgetTemplate_Put;
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
         */
        'Content-Type': string;
    };
    path: {
        /**
         * The identifier for a specific template.
         */
        uuid: string;
    };
};

export type UpdateWidgetTemplateResponse = ({
    data?: widgetTemplate_Full;
    meta?: Meta;
});

export type UpdateWidgetTemplateError = (error_Base);

export type DeleteWidgetTemplateData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    path: {
        /**
         * The identifier for a specific template.
         */
        uuid: string;
    };
};

export type DeleteWidgetTemplateResponse = (void);

export type DeleteWidgetTemplateError = (error_Base);

export type CreateWidgetData = {
    body: widget_Post;
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
         */
        'Content-Type': string;
    };
};

export type CreateWidgetResponse = ({
    data?: widget_Full;
    meta?: Meta;
});

export type CreateWidgetError = (error_Base);

export type GetWidgetsData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    query?: {
        /**
         * A comma-separated list of channel ids to filter the results by.
         */
        'channel_id:in'?: Array<(number)>;
        /**
         * Controls the number of items per page in a limited (paginated) list of products.
         *
         */
        limit?: number;
        /**
         * The URL-encoded name of the widget.
         */
        name?: string;
        /**
         * Use to pass in comma-separated list of widget names. Example: `/widgets?name:in=test-widget-name,header%20images`
         */
        'name:in'?: Array<(string)>;
        /**
         * Specifies the page number in a limited (paginated) list of products.
         *
         */
        page?: number;
        /**
         * A comma-separated list of site IDs to filter the results by.
         */
        'site_id:in'?: Array<(number)>;
        /**
         * The kind of widget template.
         */
        widget_template_kind?: string;
        /**
         * The identifier for a specific widget template.
         */
        widget_template_uuid?: string;
    };
};

export type GetWidgetsResponse = ({
    data?: Array<widget_Full>;
    meta?: metaCollection;
});

export type GetWidgetsError = (error_Base);

export type GetWidgetData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    path: {
        /**
         * The identifier for a specific widget.
         */
        uuid: string;
    };
};

export type GetWidgetResponse = ({
    data?: widget_Full;
    meta?: Meta;
});

export type GetWidgetError = (error_Base);

export type UpdateWidgetData = {
    body: widget_Put;
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
         */
        'Content-Type': string;
    };
    path: {
        /**
         * The identifier for a specific widget.
         */
        uuid: string;
    };
};

export type UpdateWidgetResponse = ({
    data?: widget_Full;
    meta?: Meta;
});

export type UpdateWidgetError = (error_Base);

export type DeleteWidgetData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    path: {
        /**
         * The identifier for a specific widget.
         */
        uuid: string;
    };
};

export type DeleteWidgetResponse = (void);

export type DeleteWidgetError = (error_Base);

export type CreatePlacementData = {
    body: placement_Post;
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
         */
        'Content-Type': string;
    };
};

export type CreatePlacementResponse = ({
    data?: placement_Full;
    meta?: Meta;
});

export type CreatePlacementError = (error_Base);

export type GetPlacementsData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    query?: {
        /**
         * A comma-separated list of channel ids to filter the results by.
         */
        'channel_id:in'?: Array<(number)>;
        /**
         * Controls the number of items per page in a limited (paginated) list of products.
         *
         */
        limit?: number;
        /**
         * Specifies the page number in a limited (paginated) list of products.
         *
         */
        page?: number;
        /**
         * A comma-separated list of site IDs to filter the results by.
         */
        'site_id:in'?: Array<(number)>;
        /**
         * The template file, for example: `pages/home`.
         */
        template_file?: string;
        /**
         * The kind of widget template.
         */
        widget_template_kind?: string;
        /**
         * The identifier for a specific widget template.
         */
        widget_template_uuid?: string;
        /**
         * The identifier for a specific widget.
         */
        widget_uuid?: string;
    };
};

export type GetPlacementsResponse = ({
    data?: Array<placement_Full>;
    meta?: metaCollection;
});

export type GetPlacementsError = (error_Base);

export type GetPlacementData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    path: {
        /**
         * The identifier for a specific placement.
         */
        uuid: string;
    };
};

export type GetPlacementResponse = ({
    data?: placement_Full;
    meta?: Meta;
});

export type GetPlacementError = (error_Base);

export type UpdatePlacementData = {
    body: placement_Put;
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
         */
        'Content-Type': string;
    };
    path: {
        /**
         * The identifier for a specific placement.
         */
        uuid: string;
    };
};

export type UpdatePlacementResponse = ({
    data?: placement_Full;
    meta?: Meta;
});

export type UpdatePlacementError = (error_Base);

export type DeletePlacementData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    path: {
        /**
         * The identifier for a specific placement.
         */
        uuid: string;
    };
};

export type DeletePlacementResponse = (void);

export type DeletePlacementError = (error_Base);

export type GetContentRegionsData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    query: {
        /**
         * The channel ID.
         */
        channel_id?: string;
        /**
         * The template file, for example: `templateFile=pages/home`.
         */
        template_file: string;
    };
};

export type GetContentRegionsResponse = ({
    data?: Array<themeRegion>;
    meta?: Meta;
});

export type GetContentRegionsError = (error_Base);