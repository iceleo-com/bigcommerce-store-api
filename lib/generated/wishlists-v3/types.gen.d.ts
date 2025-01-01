export type metaCollection = {
    pagination?: pagination;
};
export type pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type ParameterCustomerIdQuery = number;
export type ParameterItemIdPath = number;
export type ParameterLimitQuery = number;
export type ParameterPageQuery = number;
export type ParameterWishlistIdPath = number;
export type wishlist_Full = {
    id?: number;
    customer_id?: number;
    name?: string;
    is_public?: boolean;
    token?: string;
    items?: Array<wishlistItem_Full>;
};
export type wishlist_Post = {
    customer_id: number;
    is_public?: boolean;
    name?: string;
    items?: Array<{
        product_id?: number;
        variant_id?: number;
    }>;
};
export type wishlist_Put = {
    customer_id: number;
    is_public?: boolean;
    name?: string;
    items: Array<{
        id?: number;
        product_id?: number;
        variant_id?: number;
    }>;
};
export type wishlistItem_Full = {
    id?: number;
    product_id?: number;
    variant_id?: number;
};
export type wishlistItem_Post = {
    items?: Array<{
        product_id?: number;
        variant_id?: number;
    }>;
};
export type GetWishlistsData = {
    headers: {
        Accept: string;
    };
    query?: {
        customer_id?: number;
        limit?: number;
        page?: number;
    };
};
export type GetWishlistsResponse = ({
    data?: Array<wishlist_Full>;
    meta?: metaCollection;
});
export type GetWishlistsError = ({
    status?: number;
    title?: string;
    type?: string;
});
export type CreateWishlistData = {
    body: wishlist_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateWishlistResponse = ({
    data?: wishlist_Full;
    meta?: {
        [key: string]: unknown;
    };
});
export type CreateWishlistError = ({
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteWishlistItemData = {
    headers: {
        Accept: string;
    };
    path: {
        item_id: number;
        wishlist_id: number;
    };
};
export type DeleteWishlistItemResponse = ({
    data?: wishlist_Full;
    meta?: {
        [key: string]: unknown;
    };
});
export type DeleteWishlistItemError = ({
    status?: number;
    title?: string;
    type?: string;
} | {
    [key: string]: unknown;
});
export type GetWishlistData = {
    headers: {
        Accept: string;
    };
    path: {
        wishlist_id: number;
    };
};
export type GetWishlistResponse = ({
    data?: wishlist_Full;
    meta?: {
        [key: string]: unknown;
    };
});
export type GetWishlistError = ({
    status?: number;
    title?: string;
    type?: string;
} | {
    [key: string]: unknown;
});
export type UpdateWishlistData = {
    body: wishlist_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        wishlist_id: number;
    };
};
export type UpdateWishlistResponse = ({
    data?: wishlist_Full;
    meta?: {
        [key: string]: unknown;
    };
});
export type UpdateWishlistError = ({
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteWishlistData = {
    headers: {
        Accept: string;
    };
    path: {
        wishlist_id: number;
    };
};
export type DeleteWishlistResponse = (void);
export type DeleteWishlistError = ({
    status?: number;
    title?: string;
    type?: string;
});
export type AddWishlistItemData = {
    body?: wishlistItem_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        wishlist_id: number;
    };
};
export type AddWishlistItemResponse = ({
    data?: wishlist_Full;
    meta?: {
        [key: string]: unknown;
    };
});
export type AddWishlistItemError = ({
    status?: number;
    title?: string;
    type?: string;
} | unknown);
