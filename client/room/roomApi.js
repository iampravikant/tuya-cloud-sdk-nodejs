const ApiRequest = require('../common/request');
const HttpMethod = require('../common/HttpMethod');

class GetRoomsApiRequest extends ApiRequest {

    constructor(homeId) {
        super();
        this.homeId = homeId;
    }

    getMethod() {
        return HttpMethod.GET;
    }

    getPath() {
        return `/v1.0/homes/${this.homeId}/rooms`;
    }
}

class CreateRoomApiRequest extends ApiRequest {

    constructor(homeId, roomName) {
        super();
        this.homeId = homeId;
        this.roomName = roomName;
    }

    getMethod() {
        return HttpMethod.POST;
    }

    getPath() {
        return `/v1.0/homes/${this.homeId}/room`;
    }

    getBody() {
        return { name: this.roomName };
    }
}

class DeleteRoomApiRequest extends ApiRequest {

    constructor(homeId, roomId) {
        super();
        this.homeId = homeId;
        this.roomId = roomId;
    }

    getMethod() {
        return HttpMethod.DELETE;
    }

    getPath() {
        return `/v1.0/homes/${this.homeId}/rooms/${this.roomId}`;
    }
}

module.exports = {
    GetRoomsApiRequest,
    CreateRoomApiRequest,
    DeleteRoomApiRequest
}
