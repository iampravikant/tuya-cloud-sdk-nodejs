module.exports = {
    TuyaConfig: require('./config').Config,
    TuyaClient: {
        Home: require('./home').Home,
        Device: require('./device').Device
    },
    TuyaRegion: require('./region').Region
};
