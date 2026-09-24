import { BigCommerceStoreApiConfig } from '../../index.types';
import { RequestErrorResponse, RequestOptions, RequestSuccessResponse } from './request-service.types';
declare class RequestService {
    config: BigCommerceStoreApiConfig;
    constructor(config: BigCommerceStoreApiConfig);
    private resolveUrl;
    private request;
    get: <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(options: RequestOptions) => Promise<T_Success | T_Error>;
    post: <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(options: RequestOptions) => Promise<T_Success | T_Error>;
    put: <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(options: RequestOptions) => Promise<T_Success | T_Error>;
    delete: <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(options: RequestOptions) => Promise<T_Success | T_Error>;
    options: <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(options: RequestOptions) => Promise<T_Success | T_Error>;
    head: <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(options: RequestOptions) => Promise<T_Success | T_Error>;
    patch: <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(options: RequestOptions) => Promise<T_Success | T_Error>;
    trace: <T_Success extends RequestSuccessResponse<number, any>, T_Error extends RequestErrorResponse<number, any>>(options: RequestOptions) => Promise<T_Success | T_Error>;
}
export default RequestService;
