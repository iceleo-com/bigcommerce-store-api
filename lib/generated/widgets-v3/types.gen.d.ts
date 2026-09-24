export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type PlacementBaseStatus = 'inactive' | 'active';
export type WidgetBaseWidgetConfiguration = {
    [key: string]: unknown;
};
export type WidgetSchemaTabType = 'tab';
export type WidgetSchemaTabSectionsItemsSettingsItemsType = 'alignment' | 'boolean' | 'boxModel' | 'code' | 'color' | 'imageManager' | 'input' | 'number' | 'productId' | 'productImage' | 'range' | 'regexInput' | 'select' | 'text' | 'toggle';
export type WidgetSchemaTabSectionsItemsSettingsItemsTypeMetaSelectOptionsItems = {
    label?: string;
    value?: string;
};
export type WidgetSchemaTabSectionsItemsSettingsItemsTypeMeta = {
    selectOptions?: Array<WidgetSchemaTabSectionsItemsSettingsItemsTypeMetaSelectOptionsItems>;
};
export type WidgetSchemaTabSectionsItemsSettingsItemsConditional = {
    key?: string;
    operator?: string;
    value?: Array<unknown>;
};
export type WidgetSchemaTabSectionsItemsSettingsItems = {
    type?: WidgetSchemaTabSectionsItemsSettingsItemsType;
    label?: string;
    id?: string;
    default?: string;
    typeMeta?: WidgetSchemaTabSectionsItemsSettingsItemsTypeMeta;
    conditional?: WidgetSchemaTabSectionsItemsSettingsItemsConditional;
};
export type WidgetSchemaTabSectionsItems = {
    label?: string;
    settings?: Array<WidgetSchemaTabSectionsItemsSettingsItems>;
};
export type WidgetSchemaTab = {
    type?: WidgetSchemaTabType;
    label?: string;
    sections?: Array<WidgetSchemaTabSectionsItems>;
};
export type WidgetSchemaArrayType = 'array';
export type WidgetSchemaArrayThumbnail = {
    type?: string;
    valueKey?: string;
};
export type WidgetSchemaHiddenType = 'hidden';
export type WidgetSchemaHiddenSettingsItemsType = 'alignment' | 'boolean' | 'boxModel' | 'code' | 'color' | 'imageManager' | 'input' | 'number' | 'productId' | 'productImage' | 'range' | 'regexInput' | 'select' | 'text' | 'toggle';
export type WidgetSchemaHiddenSettingsItemsTypeMetaSelectOptionsItems = {
    label?: string;
    value?: string;
};
export type WidgetSchemaHiddenSettingsItemsTypeMeta = {
    selectOptions?: Array<WidgetSchemaHiddenSettingsItemsTypeMetaSelectOptionsItems>;
};
export type WidgetSchemaHiddenSettingsItemsConditional = {
    key?: string;
    operator?: string;
    value?: Array<unknown>;
};
export type WidgetSchemaHiddenSettingsItems = {
    type?: WidgetSchemaHiddenSettingsItemsType;
    label?: string;
    id?: string;
    default?: string;
    typeMeta?: WidgetSchemaHiddenSettingsItemsTypeMeta;
    conditional?: WidgetSchemaHiddenSettingsItemsConditional;
};
export type WidgetSchemaHidden = {
    type?: WidgetSchemaHiddenType;
    settings?: Array<WidgetSchemaHiddenSettingsItems>;
};
export type WidgetSchemaArraySchemaItems = WidgetSchemaHidden | WidgetSchemaTab;
export type WidgetSchemaArray = {
    type?: WidgetSchemaArrayType;
    label?: string;
    id?: string;
    defaultCount?: number;
    entryLabel?: string;
    thumbnail?: WidgetSchemaArrayThumbnail;
    schema?: Array<WidgetSchemaArraySchemaItems>;
};
export type WidgetSchemaItems = WidgetSchemaTab | WidgetSchemaArray | WidgetSchemaHidden;
export type WidgetSchema = Array<WidgetSchemaItems>;
export type WidgetTemplateFull = {
    name?: string;
    schema?: WidgetSchema;
    template?: string;
    storefront_api_query?: string;
    uuid?: string;
    kind?: string;
    date_created?: string;
    date_modified?: string;
    current_version_uuid?: string;
    icon_name?: string;
};
export type WidgetFull = {
    name?: string;
    description?: string;
    widget_configuration?: WidgetBaseWidgetConfiguration;
    uuid?: string;
    widget_template?: WidgetTemplateFull;
    date_created?: string;
    date_modified?: string;
    version_uuid?: string;
    channel_id?: number;
};
export type PlacementFull = {
    entity_id?: string;
    sort_order?: number;
    region?: string;
    status?: PlacementBaseStatus;
    uuid?: string;
    template_file?: string;
    date_created?: string;
    date_modified?: string;
    channel_id?: number;
    widget?: WidgetFull;
};
export type PaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: PaginationLinks;
};
export type MetaCollection = {
    pagination?: Pagination;
};
export type PlacementGetPlacementsResponse200 = {
    data?: Array<PlacementFull>;
    meta?: MetaCollection;
};
export type ErrorBaseErrors = {
    [key: string]: unknown;
};
export type ErrorBase = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ErrorBaseErrors;
};
export type PlacementPost = {
    entity_id?: string;
    sort_order?: number;
    region?: string;
    status?: PlacementBaseStatus;
    widget_uuid: string;
    template_file: string;
    channel_id?: number;
};
export type Meta = {
    [key: string]: unknown;
};
export type PlacementCreatePlacementResponse200 = {
    data?: PlacementFull;
    meta?: Meta;
};
export type PlacementGetPlacementResponse200 = {
    data?: PlacementFull;
    meta?: Meta;
};
export type PlacementPut = {
    entity_id?: string;
    sort_order?: number;
    region?: string;
    status?: PlacementBaseStatus;
    template_file?: string;
    widget_uuid?: string;
    channel_id?: number;
};
export type PlacementUpdatePlacementResponse200 = {
    data?: PlacementFull;
    meta?: Meta;
};
export type ThemeRegion = {
    name?: string;
};
export type RegionsGetContentRegionsResponse200 = {
    data?: Array<ThemeRegion>;
    meta?: Meta;
};
export type WidgetGetWidgetsResponse200 = {
    data?: Array<WidgetFull>;
    meta?: MetaCollection;
};
export type WidgetPostWidgetConfiguration = {
    [key: string]: unknown;
};
export type WidgetPost = {
    name: string;
    description?: string;
    widget_configuration?: WidgetPostWidgetConfiguration;
    widget_template_uuid: string;
    channel_id?: number;
};
export type WidgetCreateWidgetResponse200 = {
    data?: WidgetFull;
    meta?: Meta;
};
export type WidgetGetWidgetResponse200 = {
    data?: WidgetFull;
    meta?: Meta;
};
export type WidgetPut = {
    name?: string;
    description?: string;
    widget_configuration?: WidgetBaseWidgetConfiguration;
    widget_template_uuid?: string;
    channel_id?: number;
    upgrade?: boolean;
};
export type WidgetUpdateWidgetResponse200 = {
    data?: WidgetFull;
    meta?: Meta;
};
export type WidgetTemplateGetWidgetTemplatesResponse200 = {
    data?: Array<WidgetTemplateFull>;
    meta?: MetaCollection;
};
export type WidgetTemplatePost = {
    name: string;
    schema?: WidgetSchema;
    template: string;
    storefront_api_query?: string;
    channel_id?: number;
};
export type WidgetTemplateCreateWidgetTemplateResponse200 = {
    data?: WidgetTemplateFull;
    meta?: Meta;
};
export type WidgetTemplatePreviewWidgetConfiguration = {
    [key: string]: unknown;
};
export type WidgetTemplatePreview = {
    widget_configuration?: WidgetTemplatePreviewWidgetConfiguration;
};
export type WidgetTemplatePreviewResponseData = {
    html?: string;
};
export type WidgetTemplatePreviewResponse = {
    data?: WidgetTemplatePreviewResponseData;
};
export type WidgetTemplateGetWidgetTemplateResponse200 = {
    data?: WidgetTemplateFull;
    meta?: Meta;
};
export type WidgetTemplatePut = {
    name?: string;
    schema?: WidgetSchema;
    template?: string;
    storefront_api_query?: string;
    create_new_version?: boolean;
    channel_id?: number;
};
export type WidgetTemplateUpdateWidgetTemplateResponse200 = {
    data?: WidgetTemplateFull;
    meta?: Meta;
};
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
    200: PlacementGetPlacementsResponse200;
};
export type GetPlacementsResponse = GetPlacementsResponses[keyof GetPlacementsResponses];
export type CreatePlacementData = {
    body?: PlacementPost;
    headers: {
        Accept: string;
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
    200: PlacementCreatePlacementResponse200;
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
    204: {
        [key: string]: unknown;
    };
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
    200: PlacementGetPlacementResponse200;
};
export type GetPlacementResponse = GetPlacementResponses[keyof GetPlacementResponses];
export type UpdatePlacementData = {
    body?: PlacementPut;
    headers: {
        Accept: string;
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
    200: PlacementUpdatePlacementResponse200;
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
    200: RegionsGetContentRegionsResponse200;
};
export type GetContentRegionsResponse = GetContentRegionsResponses[keyof GetContentRegionsResponses];
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
    200: WidgetGetWidgetsResponse200;
};
export type GetWidgetsResponse = GetWidgetsResponses[keyof GetWidgetsResponses];
export type CreateWidgetData = {
    body?: WidgetPost;
    headers: {
        Accept: string;
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
    200: WidgetCreateWidgetResponse200;
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
    204: {
        [key: string]: unknown;
    };
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
    200: WidgetGetWidgetResponse200;
};
export type GetWidgetResponse = GetWidgetResponses[keyof GetWidgetResponses];
export type UpdateWidgetData = {
    body?: WidgetPut;
    headers: {
        Accept: string;
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
    200: WidgetUpdateWidgetResponse200;
};
export type UpdateWidgetResponse = UpdateWidgetResponses[keyof UpdateWidgetResponses];
export type GetWidgetTemplatesData = {
    body?: never;
    headers: {
        Accept: string;
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
    200: WidgetTemplateGetWidgetTemplatesResponse200;
};
export type GetWidgetTemplatesResponse = GetWidgetTemplatesResponses[keyof GetWidgetTemplatesResponses];
export type CreateWidgetTemplateData = {
    body?: WidgetTemplatePost;
    headers: {
        Accept: string;
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
    200: WidgetTemplateCreateWidgetTemplateResponse200;
};
export type CreateWidgetTemplateResponse = CreateWidgetTemplateResponses[keyof CreateWidgetTemplateResponses];
export type PreviewWidgetData = {
    body?: WidgetTemplatePreview;
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
    204: {
        [key: string]: unknown;
    };
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
    200: WidgetTemplateGetWidgetTemplateResponse200;
};
export type GetWidgetTemplateResponse = GetWidgetTemplateResponses[keyof GetWidgetTemplateResponses];
export type UpdateWidgetTemplateData = {
    body?: WidgetTemplatePut;
    headers: {
        Accept: string;
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
    200: WidgetTemplateUpdateWidgetTemplateResponse200;
};
export type UpdateWidgetTemplateResponse = UpdateWidgetTemplateResponses[keyof UpdateWidgetTemplateResponses];
