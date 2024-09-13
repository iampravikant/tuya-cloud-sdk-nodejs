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

class GetHomeApiRequest extends ApiRequest {

    constructor(homeId) {
        super();
        this.homeId = homeId;
    }

    getMethod() {
        return HttpMethod.GET;
    }

    getPath() {
        return `/v1.0/homes/${this.homeId}`;
    }
}

class DeleteHomesApiRequest extends ApiRequest {

    constructor(homeId) {
        super();
        this.homeId = homeId;
    }

    getMethod() {
        return HttpMethod.DELETE;
    }

    getPath() {
        return `/v1.0/homes/${this.homeId}`;
    }
}

module.exports = {
    GetHomesApiRequest,
    GetHomeApiRequest,
    DeleteHomesApiRequest
}
