export interface TuyaHome {
    geo_name: string
    home_id: number
    lat: number
    lon: number
    name: string
}

export class Home {
    static getHomes(): Promise<TuyaHome[]>;
    static getHome(homeId: number): Promise<TuyaHome>;
    static deleteHome(homeId: number): Promise<void>;
}
