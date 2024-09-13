const HomeApi = require("./homeApi");
const BasicRequestExecutor = require("../common/basicRequestExecutor");

class Home {

    static async getHomes() {
        const request = new HomeApi.GetHomesApiRequest();
        return BasicRequestExecutor.execute(request);
    }

    static async deleteHome(homeId) {
        const request = new HomeApi.DeleteHomesApiRequest(homeId);
        return BasicRequestExecutor.execute(request);
    }
}

module.exports = Home;
