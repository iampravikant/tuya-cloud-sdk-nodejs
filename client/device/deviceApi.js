const ApiRequest = require('../common/request');
const HttpMethod = require('../common/httpMethod');

class GetDevicesApiRequest extends ApiRequest {

    constructor(homeId) {
        super();
        this.homeId = homeId;
    }

    getMethod() {
        return HttpMethod.GET;
    }

    getPath() {
        return `/v1.0/homes/${this.homeId}/devices`;
    }
}

class GetDeviceStatusRequest extends ApiRequest {

    constructor(deviceId) {
        super();
        this.deviceId = deviceId;
    }

    getMethod() {
        return HttpMethod.GET;
    }

    getPath() {
        return `/v1.0/devices/${this.deviceId}/status`;
    }
}

class RunDeviceCommandRequest extends ApiRequest {

    constructor(deviceId, command) {
        super();
        this.deviceId = deviceId;
        this.command = command;
    }

    getMethod() {
        return HttpMethod.POST;
    }

    getPath() {
        return `/v1.0/devices/${this.deviceId}/commands`;
    }

    getBody() {
        return { "commands": [ this.command ] };
    }
}

module.exports = {
    GetDevicesApiRequest,
    GetDeviceStatusRequest,
    RunDeviceCommandRequest
}
