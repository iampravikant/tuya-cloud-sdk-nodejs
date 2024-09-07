const httpClient = require('./httpClient')

class RequestExecutor {

    static async executeAPI(method, path, params, headers, body) {
        const { data } = await httpClient().request({
            method: method,
            data: body,
            params: params,
            headers: headers,
            url: path,
        });

        return data.result;
    }
}

module.exports = RequestExecutor;
