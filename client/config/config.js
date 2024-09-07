const Region = require('../region/region');

class Config {
    static init(accessId, accessSecret, region, userId) {
        if (!accessId) {
            throw new Error('Invalid access id');
        }

        if (!accessSecret) {
            throw new Error('Invalid access key');
        }

        if (!(region instanceof Region)) {
            throw new Error('Invalid region');
        }

        if (!userId) {
            throw new Error('Invalid userId');
        }

        global.accessId = accessId;
        global.accessSecret = accessSecret;
        global.apiBaseUrl = region.getUrl();
        global.userId = userId;
    }
}

module.exports = Config;
