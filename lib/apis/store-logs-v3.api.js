"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StoreLogsV3Api {
    constructor(request) {
        this.request = request;
    }
    getStoreSystemLogs(query) {
        return this.request.get({
            path: 'v3/store/systemlogs',
            query,
        });
    }
}
exports.default = StoreLogsV3Api;
