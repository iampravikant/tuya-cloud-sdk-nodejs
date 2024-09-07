const TokenClient = require('./token')

class TokenProvider {
    static async getAccessToken() {
        if (global.accessToken === undefined) {
            this.setToken(await TokenClient.fetchToken())
        } else {
            try {
                if (global.expireTime !== undefined && global.expireTime > (new Date().getTime() / 1000 + 30)) {
                    return global.accessToken;
                }

                this.setToken(await TokenClient.refreshToken());
            } catch (e) {
                this.setToken(await TokenClient.fetchToken())
            }
        }

        return global.accessToken;
    }

    static setToken(tokenData) {
        global.accessToken = tokenData.access_token
        global.refreshToken = tokenData.refresh_token;
        global.expireTime = new Date().getTime() / 1000 + tokenData.expire_time;
    }
}

module.exports = TokenProvider;
