const RequestExecutor = require("./requestExecutor");
const RequestHelper = require('../common/requestHelper');

class AuthRequestExecutor extends RequestExecutor {
    static async execute(request) {
        const headers = await RequestHelper.getRequestHeaders(request.getPath(), request.getMethod().getName(), request.getHeaders(), request.getParams(), request.getBody());

        return this.executeAPI(
            request.getMethod().getName(),
            request.getPath(),
            request.getParams(),
            headers,
            request.getBody()
        );
    }
}

module.exports = AuthRequestExecutor;
