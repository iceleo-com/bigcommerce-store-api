export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
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
export type WidgetTemplatePut = WidgetTemplateBase & {
    create_new_version?: boolean;
    channel_id?: number;
};
export type WidgetTemplatePost = {
    name: string;
    schema?: WidgetSchema;
    template: string;
    storefront_api_query?: string;
    channel_id?: number;
};
export type WidgetTemplateFull = WidgetTemplateBase & {
    uuid?: string;
    kind?: string;
    date_created?: string;
    date_modified?: string;
    current_version_uuid?: string;
    icon_name?: string;
};
export type WidgetFull = WidgetBase & {
    uuid?: string;
    widget_template?: WidgetTemplateFull;
    date_created?: string;
    date_modified?: string;
    version_uuid?: string;
    channel_id?: number;
};
export type WidgetPost = {
    name: string;
    description?: string;
    widget_configuration?: {
        [key: string]: unknown;
    };
    widget_template_uuid: string;
    channel_id?: number;
};
export type WidgetPut = WidgetBase & {
    widget_template_uuid?: string;
    channel_id?: number;
    upgrade?: boolean;
};
export type PlacementPost = {
    widget_uuid: string;
    template_file: string;
    channel_id?: number;
} & PlacementBase;
export type PlacementPut = {
    template_file?: string;
    widget_uuid?: string;
    channel_id?: number;
} & PlacementBase;
export type PlacementFull = {
    uuid?: string;
    template_file?: string;
    date_created?: string;
    date_modified?: string;
    channel_id?: number;
} & PlacementBase & {
    widget?: WidgetFull;
};
export type MetaCollection = {
    pagination?: Pagination;
};
export type Pagination = {
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
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type ErrorBase = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: {
        [key: string]: unknown;
    };
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type ThemeRegion = {
    name?: string;
};
export type Meta = {
    [key: string]: unknown;
};
export type PlacementBase = {
    entity_id?: string;
    sort_order?: number;
    region?: string;
    status?: 'inactive' | 'active';
};
export type WidgetTemplateBase = {
    name?: string;
    schema?: WidgetSchema;
    template?: string;
    storefront_api_query?: string;
};
export type WidgetBase = {
    name?: string;
    description?: string;
    widget_configuration?: {
        [key: string]: unknown;
    };
};
export type NewModel = Array<{
    type?: string;
    label?: string;
    id?: string;
    default?: number;
    typeMeta?: string;
    conditional?: WidgetSchemaConditional;
}>;
export type WidgetSchemaTab = {
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
export type WidgetSchemaTabSections = {
    label?: string;
    settings?: Array<WidgetSchemaSettingBase>;
};
export type WidgetSchemaArray = {
    type?: 'array';
    label?: string;
    id?: string;
    defaultCount?: number;
    entryLabel?: string;
    thumbnail?: {
        type?: string;
        valueKey?: string;
    };
    schema?: Array<WidgetSchemaHidden | WidgetSchemaTab>;
};
export type WidgetSchemaSettingBase = {
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
    conditional?: WidgetSchemaConditional;
};
export type WidgetSchema = Array<WidgetSchemaTab | WidgetSchemaArray | WidgetSchemaHidden>;
export type WidgetSchemaHidden = {
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
export type WidgetSchemaTabSectionsSettings = {
    [key: string]: unknown;
};
export type WidgetSchemaConditional = {
    key?: string;
    operator?: string;
    value?: Array<unknown>;
};
export type ChannelId = string;
export type TemplateUuid = string;
export type FilterWidgetTemplateUuidParam = string;
export type FilterWidgetTemplateKindParam = string;
export type FilterWidgetNameParam = string;
export type FilterTemplateFileParam = string;
export type RequiredTemplateFile = string;
export type LayoutUuid = string;
export type PlacementUuid = string;
export type WidgetUuid = string;
export type FilterWidgetUuidParam = string;
export type PageParam = number;
export type LimitParam = number;
export type FilterVersionUuid = string;
export type QueryWidgetsParam = string;
export type Accept = string;
export type ContentType = string;
export type ChannelIdInParam = Array<number>;
export type SiteIdInParam = Array<number>;
export type NameInParam = Array<string>;
export type GetWidgetTemplatesData = {
    body?: never;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        widget_template_kind?: string;
        'channel_id:in'?: Array<number>;
    };
    url: '/content/widget-templates';
};
export type GetWidgetTemplatesErrors = {
    422: ErrorBase;
};
export type GetWidgetTemplatesError = GetWidgetTemplatesErrors[keyof GetWidgetTemplatesErrors];
export type GetWidgetTemplatesResponses = {
    200: {
        data?: Array<WidgetTemplateFull>;
        meta?: MetaCollection;
    };
};
export type GetWidgetTemplatesResponse = GetWidgetTemplatesResponses[keyof GetWidgetTemplatesResponses];
export type CreateWidgetTemplateData = {
    body: WidgetTemplatePost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/content/widget-templates';
};
export type CreateWidgetTemplateErrors = {
    422: ErrorBase;
};
export type CreateWidgetTemplateError = CreateWidgetTemplateErrors[keyof CreateWidgetTemplateErrors];
export type CreateWidgetTemplateResponses = {
    200: {
        data?: WidgetTemplateFull;
        meta?: Meta;
    };
};
export type CreateWidgetTemplateResponse = CreateWidgetTemplateResponses[keyof CreateWidgetTemplateResponses];
export type PreviewWidgetData = {
    body: WidgetTemplatePreview;
    path: {
        uuid: string;
    };
    query?: never;
    url: '/content/widget-templates/{uuid}/preview';
};
export type PreviewWidgetErrors = {
    404: unknown;
    422: unknown;
};
export type PreviewWidgetResponses = {
    200: WidgetTemplatePreviewResponse;
};
export type PreviewWidgetResponse = PreviewWidgetResponses[keyof PreviewWidgetResponses];
export type DeleteWidgetTemplateData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/content/widget-templates/{uuid}';
};
export type DeleteWidgetTemplateErrors = {
    404: ErrorBase;
    422: ErrorBase;
};
export type DeleteWidgetTemplateError = DeleteWidgetTemplateErrors[keyof DeleteWidgetTemplateErrors];
export type DeleteWidgetTemplateResponses = {
    204: void;
};
export type DeleteWidgetTemplateResponse = DeleteWidgetTemplateResponses[keyof DeleteWidgetTemplateResponses];
export type GetWidgetTemplateData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: {
        version_uuid?: string;
    };
    url: '/content/widget-templates/{uuid}';
};
export type GetWidgetTemplateErrors = {
    404: ErrorBase;
    422: ErrorBase;
};
export type GetWidgetTemplateError = GetWidgetTemplateErrors[keyof GetWidgetTemplateErrors];
export type GetWidgetTemplateResponses = {
    200: {
        data?: WidgetTemplateFull;
        meta?: Meta;
    };
};
export type GetWidgetTemplateResponse = GetWidgetTemplateResponses[keyof GetWidgetTemplateResponses];
export type UpdateWidgetTemplateData = {
    body: WidgetTemplatePut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/content/widget-templates/{uuid}';
};
export type UpdateWidgetTemplateErrors = {
    404: ErrorBase;
    422: ErrorBase;
};
export type UpdateWidgetTemplateError = UpdateWidgetTemplateErrors[keyof UpdateWidgetTemplateErrors];
export type UpdateWidgetTemplateResponses = {
    200: {
        data?: WidgetTemplateFull;
        meta?: Meta;
    };
};
export type UpdateWidgetTemplateResponse = UpdateWidgetTemplateResponses[keyof UpdateWidgetTemplateResponses];
export type GetWidgetsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        widget_template_kind?: string;
        widget_template_uuid?: string;
        name?: string;
        'name:in'?: Array<string>;
        'channel_id:in'?: Array<number>;
        'site_id:in'?: Array<number>;
    };
    url: '/content/widgets';
};
export type GetWidgetsErrors = {
    422: ErrorBase;
};
export type GetWidgetsError = GetWidgetsErrors[keyof GetWidgetsErrors];
export type GetWidgetsResponses = {
    200: {
        data?: Array<WidgetFull>;
        meta?: MetaCollection;
    };
};
export type GetWidgetsResponse = GetWidgetsResponses[keyof GetWidgetsResponses];
export type CreateWidgetData = {
    body: WidgetPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/content/widgets';
};
export type CreateWidgetErrors = {
    422: ErrorBase;
};
export type CreateWidgetError = CreateWidgetErrors[keyof CreateWidgetErrors];
export type CreateWidgetResponses = {
    200: {
        data?: WidgetFull;
        meta?: Meta;
    };
};
export type CreateWidgetResponse = CreateWidgetResponses[keyof CreateWidgetResponses];
export type DeleteWidgetData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/content/widgets/{uuid}';
};
export type DeleteWidgetErrors = {
    404: ErrorBase;
    422: ErrorBase;
};
export type DeleteWidgetError = DeleteWidgetErrors[keyof DeleteWidgetErrors];
export type DeleteWidgetResponses = {
    204: void;
};
export type DeleteWidgetResponse = DeleteWidgetResponses[keyof DeleteWidgetResponses];
export type GetWidgetData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/content/widgets/{uuid}';
};
export type GetWidgetErrors = {
    404: ErrorBase;
    422: ErrorBase;
};
export type GetWidgetError = GetWidgetErrors[keyof GetWidgetErrors];
export type GetWidgetResponses = {
    200: {
        data?: WidgetFull;
        meta?: Meta;
    };
};
export type GetWidgetResponse = GetWidgetResponses[keyof GetWidgetResponses];
export type UpdateWidgetData = {
    body: WidgetPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/content/widgets/{uuid}';
};
export type UpdateWidgetErrors = {
    404: ErrorBase;
    422: ErrorBase;
};
export type UpdateWidgetError = UpdateWidgetErrors[keyof UpdateWidgetErrors];
export type UpdateWidgetResponses = {
    200: {
        data?: WidgetFull;
        meta?: Meta;
    };
};
export type UpdateWidgetResponse = UpdateWidgetResponses[keyof UpdateWidgetResponses];
export type GetPlacementsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        widget_template_kind?: string;
        template_file?: string;
        widget_uuid?: string;
        widget_template_uuid?: string;
        'channel_id:in'?: Array<number>;
        'site_id:in'?: Array<number>;
    };
    url: '/content/placements';
};
export type GetPlacementsErrors = {
    422: ErrorBase;
};
export type GetPlacementsError = GetPlacementsErrors[keyof GetPlacementsErrors];
export type GetPlacementsResponses = {
    200: {
        data?: Array<PlacementFull>;
        meta?: MetaCollection;
    };
};
export type GetPlacementsResponse = GetPlacementsResponses[keyof GetPlacementsResponses];
export type CreatePlacementData = {
    body: PlacementPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/content/placements';
};
export type CreatePlacementErrors = {
    422: ErrorBase;
};
export type CreatePlacementError = CreatePlacementErrors[keyof CreatePlacementErrors];
export type CreatePlacementResponses = {
    200: {
        data?: PlacementFull;
        meta?: Meta;
    };
};
export type CreatePlacementResponse = CreatePlacementResponses[keyof CreatePlacementResponses];
export type DeletePlacementData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/content/placements/{uuid}';
};
export type DeletePlacementErrors = {
    404: ErrorBase;
    422: ErrorBase;
};
export type DeletePlacementError = DeletePlacementErrors[keyof DeletePlacementErrors];
export type DeletePlacementResponses = {
    204: void;
};
export type DeletePlacementResponse = DeletePlacementResponses[keyof DeletePlacementResponses];
export type GetPlacementData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/content/placements/{uuid}';
};
export type GetPlacementErrors = {
    404: ErrorBase;
    422: ErrorBase;
};
export type GetPlacementError = GetPlacementErrors[keyof GetPlacementErrors];
export type GetPlacementResponses = {
    200: {
        data?: PlacementFull;
        meta?: Meta;
    };
};
export type GetPlacementResponse = GetPlacementResponses[keyof GetPlacementResponses];
export type UpdatePlacementData = {
    body: PlacementPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/content/placements/{uuid}';
};
export type UpdatePlacementErrors = {
    404: ErrorBase;
    422: ErrorBase;
};
export type UpdatePlacementError = UpdatePlacementErrors[keyof UpdatePlacementErrors];
export type UpdatePlacementResponses = {
    200: {
        data?: PlacementFull;
        meta?: Meta;
    };
};
export type UpdatePlacementResponse = UpdatePlacementResponses[keyof UpdatePlacementResponses];
export type GetContentRegionsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        template_file: string;
        channel_id?: string;
    };
    url: '/content/regions';
};
export type GetContentRegionsErrors = {
    404: ErrorBase;
    422: ErrorBase;
};
export type GetContentRegionsError = GetContentRegionsErrors[keyof GetContentRegionsErrors];
export type GetContentRegionsResponses = {
    200: {
        data?: Array<ThemeRegion>;
        meta?: Meta;
    };
};
export type GetContentRegionsResponse = GetContentRegionsResponses[keyof GetContentRegionsResponses];
