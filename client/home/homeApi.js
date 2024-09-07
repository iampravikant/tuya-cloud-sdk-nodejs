const ApiRequest = require('../common/request');
const HttpMethod = require('../common/HttpMethod');

class GetHomesApiRequest extends ApiRequest {

    constructor() {
        super();
    }

    getMethod() {
        return HttpMethod.GET;
    }

    getPath() {
        return `/v1.0/users/${global.userId}/homes`;
    }
}

module.exports = {
    GetHomesApiRequest
}
