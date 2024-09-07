const ApiRequest = require('../common/request');
const HttpMethod = require('../common/httpMethod');

class GetTokenRequest extends ApiRequest {

    constructor() {
        super();
    }

    getMethod() {
        return HttpMethod.GET;
    }

    getPath() {
        return `/v1.0/token?grant_type=1`;
    }
}

class GetRefreshTokenRequest extends ApiRequest {

    constructor() {
        super();
    }

    getMethod() {
        return HttpMethod.GET;
    }

    getPath() {
        return `/v1.0/token/${global.refreshToken}`;
    }
}

module.exports = {
    GetTokenRequest,
    GetRefreshTokenRequest
}
