const DeviceApi = require('./deviceApi');
const BasicRequestExecutor = require("../common/basicRequestExecutor");

class Device {

    static async getDevices(homeId) {
        const request = new DeviceApi.GetDevicesApiRequest(homeId);
        return BasicRequestExecutor.execute(request);
    }

    static async getDeviceSwitch(deviceId) {
        const request = new DeviceApi.GetDeviceStatusRequest(deviceId);
        return BasicRequestExecutor.execute(request).then(statuses => {
            return statuses.find(status => status.code === "switch_1").value;
        });
    }

    static async setDeviceSwitch(deviceId, on) {
        const request = new DeviceApi.RunDeviceCommandRequest(deviceId, { "code": "switch_1", "value": on });
        return BasicRequestExecutor.execute(request);
    }
}

module.exports = Device;
