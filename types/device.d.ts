export interface TuyaDevice {
    active_time: number
    biz_type: number
    category: string
    create_time: number
    icon: string
    id: string
    ip: string
    lat: string
    local_key: string
    lon: string
    model: string
    name: string
    online: boolean
    owner_id: string
    product_id: string
    product_name: string
    status: TuyaDeviceStatus[]
    sub: boolean
    time_zone: string
    uid: string
    update_time: number
    uuid: string
}

export interface TuyaDeviceStatus {
    code: string
    value: any
}

export class Device {
    static getDevices(homeId: number): Promise<TuyaDevice[]>;
    static getDeviceSwitch(deviceId: string): Promise<boolean>;
    static setDeviceSwitch(deviceId: string, on: boolean): Promise<void>;
}
