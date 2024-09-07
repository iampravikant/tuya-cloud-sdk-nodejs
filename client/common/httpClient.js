const axios = require('axios');

let httpClient = null;

function getHttpClient() {
    if (!global.apiBaseUrl) {
        throw new Error('Please initialise region in config properly');
    }

    if (!httpClient) {
        httpClient = axios.create({
            baseURL: global.apiBaseUrl,
            timeout: 10000,
        });
    }
    return httpClient;
}

module.exports = getHttpClient;
