import { Config as _Config } from './config';
import { Home } from './home';
import { Device } from './device';
import { Region as _Region } from './region';

export const TuyaConfig: typeof _Config;
export const TuyaClient: {
    Home: typeof Home,
    Device: typeof Device
}
export const TuyaRegion: {
    CN: _Region;
    US: _Region;
    EU: _Region;
    IN: _Region;
};
