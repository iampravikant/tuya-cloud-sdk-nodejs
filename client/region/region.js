class Region {
    constructor(url) {
        this.url = url;
    }

    getUrl() {
        return this.url;
    }
}

Region.CN = new Region('https://openapi.tuyacn.com');
Region.US = new Region('https://openapi.tuyaus.com');
Region.EU = new Region('https://openapi.tuyaeu.com');
Region.IN = new Region('https://openapi.tuyain.com');

module.exports = Region;
