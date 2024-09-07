const crypto = require("crypto");
const qs = require("qs");

class RequestHelper {

    static async getRequestHeaders(path, method, headers, query, body, token) {
        const timestamp = Date.now().toString();
        const [uri, pathQuery] = path.split('?');
        const queryMerged = Object.assign(query, qs.parse(pathQuery));
        const sortedQuery = {};
        Object.keys(queryMerged)
            .sort()
            .forEach((i) => (sortedQuery[i] = query[i]));

        const querystring = decodeURIComponent(qs.stringify(sortedQuery));
        const url = querystring ? `${uri}?${querystring}` : uri;
        const bodyStr = body === undefined ? '' : JSON.stringify(body);
        const contentHash = crypto.createHash('sha256').update(bodyStr).digest('hex');
        const stringToSign = [method, contentHash, '', url].join('\n');

        const signStr = token ? global.accessId + token + timestamp + stringToSign : global.accessId + timestamp + stringToSign;

        const allHeaders = {
            ...headers,
            ...{
                t: timestamp,
                sign_method: 'HMAC-SHA256',
                client_id: global.accessId,
                sign: await RequestHelper.encryptStr(signStr, global.accessSecret),
                path: url,
            }
        };

        if (token) {
            allHeaders.access_token = token;
        }

        return allHeaders;
    }

    static async encryptStr(str, secret) {
        return crypto.createHmac('sha256', secret).update(str, 'utf8').digest('hex').toUpperCase();
    }
}

module.exports = RequestHelper;
