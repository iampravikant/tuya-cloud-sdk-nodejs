# Tuya Cloud SDK - NodeJS

[![npm version](http://img.shields.io/npm/v/node-abi.svg)](https://www.npmjs.com/package/@iampravikant/tuya-cloud-sdk-nodejs)

Access Tuya supported devices via this SDK

## Installation
```
npm i @iampravikant/tuya-cloud-sdk-nodejs
```
## Prerequisite
- [Login](https://auth.tuya.com/) into your Tuya account (If you don't have an account yet, [Sign up](https://auth.tuya.com/register))
- Goto [Cloud](https://platform.tuya.com/cloud) and create a new project. Make sure your select the correct region and make a note of it (You will need while initialising the SDK).
- Once created, open it and go to Overview tab.
- Make a note of Access ID and Access Secret (You will need while initialising the SDK).
- Open Devices tab and link your app account. Click on "Link your app account" and once the QR code opens, scan it from your app (example: [SmartLife](https://play.google.com/store/apps/details?id=com.tuya.smartlife)). (In SmartLife app, there is a button on top right to scan QR code.)
- Now you should see your app account added. Make a node of the UID. This is be your User ID (You will need while initialising the SDK).

## Usage
### Initial configuration
```typescript
import { TuyaConfig, TuyaRegion, TuyaClient } from '@iampravikant/tuya-cloud-sdk-nodejs';

TuyaConfig.init('YOUR_ACCESS_ID_FROM_TUYA', 'YOUR_ACCESS_SECRET_FROM_TUYA', 'YOUR_REGION_FROM_TUYA', 'YOUR_USER_ID_FROM_TUYA');
```
Example: 
```typescript
TuyaConfig.init('...', '...', TuyaRegion.EU, 'eu...');
```

### Get list of homes
```typescript
TuyaClient.Home.getHomes();
```

### Get list of devices in a home
```typescript
TuyaClient.Device.getDevices(homeId);
```

### Get the switch status of a device
```typescript
TuyaClient.Device.getDeviceSwitch(deviceId);
```

### Set the switch status of a device
```typescript
TuyaClient.Device.setDeviceSwitch(deviceId, on);
```

## Finally
- Feel free to open an [issue](https://github.com/iampravikant/tuya-cloud-sdk-nodejs/issues).
- Star the repo if you found it useful 😀
