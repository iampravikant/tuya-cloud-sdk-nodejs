module.exports = {
    TuyaConfig: require('./config').Config,
    TuyaClient: {
        Home: require('./home').Home,
        Room: require('./room').Room,
        Device: require('./device').Device
    },
    TuyaRegion: require('./region').Region
};
