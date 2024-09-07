const RequestExecutor = require('./requestExecutor');
const RequestHelper = require('./requestHelper');
const {TokenProvider} = require("../token");

class BasicRequestExecutor extends RequestExecutor {
    static async execute(request) {
        const token = await TokenProvider.getAccessToken();
        const headers = await RequestHelper.getRequestHeaders(request.getPath(), request.getMethod().getName(), request.getHeaders(), request.getParams(), request.getBody(), token);

        return this.executeAPI(
            request.getMethod().getName(),
            request.getPath(),
            request.getParams(),
            headers,
            request.getBody()
        );
    }
}

module.exports = BasicRequestExecutor;
