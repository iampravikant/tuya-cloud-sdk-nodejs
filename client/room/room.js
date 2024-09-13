const HomeApi = require("./roomApi");
const BasicRequestExecutor = require("../common/basicRequestExecutor");

class Room {

    static async getRooms(homeId) {
        const request = new HomeApi.GetRoomsApiRequest(homeId);
        return BasicRequestExecutor.execute(request).then(response => {
            return response.rooms;
        });
    }

    static async createRoom(homeId, roomName) {
        const request = new HomeApi.CreateRoomApiRequest(homeId, roomName);
        return BasicRequestExecutor.execute(request);
    }

    static async deleteRoom(homeId, roomId) {
        const request = new HomeApi.DeleteRoomApiRequest(homeId, roomId);
        return BasicRequestExecutor.execute(request);
    }
}

module.exports = Room;
