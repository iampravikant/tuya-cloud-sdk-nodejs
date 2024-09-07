const TokenApi = require('./tokenApi');
const AuthRequestExecutor = require('../common/authRequestExecutor');

class TokenClient {
    static async fetchToken() {
        const request = new TokenApi.GetTokenRequest();
        return AuthRequestExecutor.execute(request);
    }

    static async refreshToken() {
        const request = new TokenApi.GetRefreshTokenRequest();
        return AuthRequestExecutor.execute(request);
    }
}

module.exports = TokenClient;
