export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type error_Base = {
    status?: number;
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
export type Meta = {
    [key: string]: unknown;
};
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
export type pagination = {
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
export type ParameterAccept = string;
export type ParameterChannelID = string;
export type ParameterChannelIdInParam = Array<(number)>;
export type ParameterContentType = string;
export type ParameterFilterTemplateFileParam = string;
export type ParameterFilterVersionUUID = string;
export type ParameterFilterWidgetNameParam = string;
export type ParameterFilterWidgetTemplateKindParam = string;
export type ParameterFilterWidgetTemplateUUIDParam = string;
export type ParameterFilterWidgetUUIDParam = string;
export type ParameterLayoutUUID = string;
export type ParameterLimitParam = number;
export type ParameterNameInParam = Array<(string)>;
export type ParameterPageParam = number;
export type ParameterPlacementUUID = string;
export type ParameterQueryWidgetsParam = string;
export type ParameterRequiredTemplateFile = string;
export type ParameterSiteIdInParam = Array<(number)>;
export type ParameterTemplateUUID = string;
export type ParameterWidgetUUID = string;
export type placement_Base = {
    entity_id?: string;
    sort_order?: number;
    region?: string;
    status?: 'inactive' | 'active';
};
export type status = 'inactive' | 'active';
export type placement_Full = {
    uuid?: string;
    template_file?: string;
    date_created?: string;
    date_modified?: string;
    channel_id?: number;
} & placement_Base & {
    widget?: widget_Full;
};
export type placement_Post = {
    widget_uuid: string;
    template_file: string;
    channel_id?: number;
} & placement_Base;
export type placement_Put = {
    template_file?: string;
    widget_uuid?: string;
    channel_id?: number;
} & placement_Base;
export type themeRegion = {
    name?: string;
};
export type widget_Base = {
    name?: string;
    description?: string;
    widget_configuration?: {
        [key: string]: unknown;
    };
};
export type widget_Full = widget_Base & {
    uuid?: string;
    widget_template?: widgetTemplate_Full;
    date_created?: string;
    date_modified?: string;
    version_uuid?: string;
    channel_id?: number;
};
export type widget_Post = {
    name: string;
    description?: string;
    widget_configuration?: {
        [key: string]: unknown;
    };
    widget_template_uuid: string;
    channel_id?: number;
};
export type widget_Put = widget_Base & {
    widget_template_uuid?: string;
    channel_id?: number;
    upgrade?: boolean;
};
export type widgetSchema = Array<(widgetSchemaTab | widgetSchemaArray | widgetSchemaHidden)>;
export type widgetSchemaArray = {
    type?: 'array';
    label?: string;
    id?: string;
    defaultCount?: number;
    entryLabel?: string;
    thumbnail?: {
        type?: string;
        valueKey?: string;
    };
    schema?: Array<(widgetSchemaHidden | widgetSchemaTab)>;
};
export type type = 'array';
export type widgetSchemaConditional = {
    key?: string;
    operator?: string;
    value?: Array<unknown>;
};
export type widgetSchemaHidden = {
    type?: 'hidden';
    settings?: Array<{
        type?: 'alignment' | 'boolean' | 'boxModel' | 'code' | 'color' | 'imageManager' | 'input' | 'number' | 'productId' | 'productImage' | 'range' | 'regexInput' | 'select' | 'text' | 'toggle';
        label?: string;
        id?: string;
        default?: string;
        typeMeta?: {
            selectOptions?: Array<{
                label?: string;
                value?: string;
            }>;
        };
        conditional?: {
            key?: string;
            operator?: string;
            value?: Array<unknown>;
        };
    }>;
};
export type type2 = 'hidden';
export type widgetSchemaSetting_Base = {
    type?: 'alignment' | 'boolean' | 'boxModel' | 'code' | 'color' | 'imageManager' | 'input' | 'number' | 'productId' | 'productImage' | 'range' | 'regexInput' | 'select' | 'text' | 'toggle';
    label?: string;
    id?: string;
    default?: string;
    typeMeta?: {
        selectOptions?: Array<{
            label?: string;
            value?: string;
        }>;
    };
    conditional?: widgetSchemaConditional;
};
export type type3 = 'alignment' | 'boolean' | 'boxModel' | 'code' | 'color' | 'imageManager' | 'input' | 'number' | 'productId' | 'productImage' | 'range' | 'regexInput' | 'select' | 'text' | 'toggle';
export type widgetSchemaTab = {
    type?: 'tab';
    label?: string;
    sections?: Array<{
        label?: string;
        settings?: Array<{
            type?: 'alignment' | 'boolean' | 'boxModel' | 'code' | 'color' | 'imageManager' | 'input' | 'number' | 'productId' | 'productImage' | 'range' | 'regexInput' | 'select' | 'text' | 'toggle';
            label?: string;
            id?: string;
            default?: string;
            typeMeta?: {
                selectOptions?: Array<{
                    label?: string;
                    value?: string;
                }>;
            };
            conditional?: {
                key?: string;
                operator?: string;
                value?: Array<unknown>;
            };
        }>;
    }>;
};
export type type4 = 'tab';
export type widgetSchemaTabSections = {
    label?: string;
    settings?: Array<widgetSchemaSetting_Base>;
};
export type widgetSchemaTabSectionsSettings = {
    [key: string]: unknown;
};
export type widgetTemplate_Base = {
    name?: string;
    schema?: widgetSchema;
    template?: string;
    storefront_api_query?: string;
};
export type widgetTemplate_Full = widgetTemplate_Base & {
    uuid?: string;
    kind?: string;
    date_created?: string;
    date_modified?: string;
    current_version_uuid?: string;
    icon_name?: string;
};
export type widgetTemplate_Post = {
    name: string;
    schema?: widgetSchema;
    template: string;
    storefront_api_query?: string;
    channel_id?: number;
};
export type widgetTemplate_Put = widgetTemplate_Base & {
    create_new_version?: boolean;
    channel_id?: number;
};
export type WidgetTemplatePreview = {
    widget_configuration?: {
        [key: string]: unknown;
    };
};
export type WidgetTemplatePreviewResponse = {
    data?: {
        html?: string;
    };
};
export type CreateWidgetTemplateData = {
    body: widgetTemplate_Post;
    headers: {
        Accept: string;
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
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        'channel_id:in'?: Array<(number)>;
        limit?: number;
        page?: number;
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
        uuid: string;
    };
};
export type PreviewWidgetResponse = (WidgetTemplatePreviewResponse);
export type PreviewWidgetError = (unknown);
export type GetWidgetTemplateData = {
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: {
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
        Accept: string;
        'Content-Type': string;
    };
    path: {
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
        Accept: string;
    };
    path: {
        uuid: string;
    };
};
export type DeleteWidgetTemplateResponse = (void);
export type DeleteWidgetTemplateError = (error_Base);
export type CreateWidgetData = {
    body: widget_Post;
    headers: {
        Accept: string;
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
        Accept: string;
    };
    query?: {
        'channel_id:in'?: Array<(number)>;
        limit?: number;
        name?: string;
        'name:in'?: Array<(string)>;
        page?: number;
        'site_id:in'?: Array<(number)>;
        widget_template_kind?: string;
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
        Accept: string;
    };
    path: {
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
        Accept: string;
        'Content-Type': string;
    };
    path: {
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
        Accept: string;
    };
    path: {
        uuid: string;
    };
};
export type DeleteWidgetResponse = (void);
export type DeleteWidgetError = (error_Base);
export type CreatePlacementData = {
    body: placement_Post;
    headers: {
        Accept: string;
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
        Accept: string;
    };
    query?: {
        'channel_id:in'?: Array<(number)>;
        limit?: number;
        page?: number;
        'site_id:in'?: Array<(number)>;
        template_file?: string;
        widget_template_kind?: string;
        widget_template_uuid?: string;
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
        Accept: string;
    };
    path: {
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
        Accept: string;
        'Content-Type': string;
    };
    path: {
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
        Accept: string;
    };
    path: {
        uuid: string;
    };
};
export type DeletePlacementResponse = (void);
export type DeletePlacementError = (error_Base);
export type GetContentRegionsData = {
    headers: {
        Accept: string;
    };
    query: {
        channel_id?: string;
        template_file: string;
    };
};
export type GetContentRegionsResponse = ({
    data?: Array<themeRegion>;
    meta?: Meta;
});
export type GetContentRegionsError = (error_Base);
