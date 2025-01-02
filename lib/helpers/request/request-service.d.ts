import { BigCommerceStoreApiConfig } from '../../index.types';
import { RequestOptions, RequestResponse } from './request-service.types';
declare class RequestService {
    config: BigCommerceStoreApiConfig;
    constructor(config: BigCommerceStoreApiConfig);
    private request;
    get: <T_Success = any, T_Error = any>(options: RequestOptions) => Promise<RequestResponse<T_Success, T_Error>>;
    post: <T_Success = any, T_Error = any>(options: RequestOptions) => Promise<RequestResponse<T_Success, T_Error>>;
    put: <T_Success = any, T_Error = any>(options: RequestOptions) => Promise<RequestResponse<T_Success, T_Error>>;
    delete: <T_Success = any, T_Error = any>(options: RequestOptions) => Promise<RequestResponse<T_Success, T_Error>>;
    options: <T_Success = any, T_Error = any>(options: RequestOptions) => Promise<RequestResponse<T_Success, T_Error>>;
    head: <T_Success = any, T_Error = any>(options: RequestOptions) => Promise<RequestResponse<T_Success, T_Error>>;
    patch: <T_Success = any, T_Error = any>(options: RequestOptions) => Promise<RequestResponse<T_Success, T_Error>>;
    trace: <T_Success = any, T_Error = any>(options: RequestOptions) => Promise<RequestResponse<T_Success, T_Error>>;
}
export default RequestService;
