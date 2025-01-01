import RequestService from '../helpers/request/request-service';
import * as CategoryTreesV3ApiSpecs from '../generated/category-trees-v3';
export default class CategoryTreesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getAllCategories(query?: CategoryTreesV3ApiSpecs.GetAllCategoriesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<CategoryTreesV3ApiSpecs.CategoryList, CategoryTreesV3ApiSpecs.GetAllCategoriesError>>;
    createCategories(requestBody: CategoryTreesV3ApiSpecs.CreateCategoriesData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, CategoryTreesV3ApiSpecs.CreateCategoriesError>>;
    updateCategories(requestBody: CategoryTreesV3ApiSpecs.UpdateCategoriesData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<CategoryTreesV3ApiSpecs.UpdateCategoriesResponse, CategoryTreesV3ApiSpecs.UpdateCategoriesError>>;
    deleteTreeCategories(query?: CategoryTreesV3ApiSpecs.DeleteTreeCategoriesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, CategoryTreesV3ApiSpecs.DeleteTreeCategoriesError>>;
    getCategoryTrees(query?: CategoryTreesV3ApiSpecs.GetCategoryTreesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<CategoryTreesV3ApiSpecs.CategoryTreeList, CategoryTreesV3ApiSpecs.GetCategoryTreesError>>;
    upsertCategoryTrees(requestBody: CategoryTreesV3ApiSpecs.UpsertCategoryTreesData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<CategoryTreesV3ApiSpecs.CategoryTree, CategoryTreesV3ApiSpecs.UpsertCategoryTreesError>>;
    deleteCategoryTrees(query?: CategoryTreesV3ApiSpecs.DeleteCategoryTreesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, CategoryTreesV3ApiSpecs.DeleteCategoryTreesError>>;
    getCategoryTree(treeId: CategoryTreesV3ApiSpecs.GetCategoryTreeData['path']['tree_id'], query?: CategoryTreesV3ApiSpecs.GetCategoryTreeData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<CategoryTreesV3ApiSpecs.CategoryNodeTree, CategoryTreesV3ApiSpecs.GetCategoryTreeError>>;
}
