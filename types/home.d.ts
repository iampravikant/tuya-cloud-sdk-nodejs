export interface TuyaHome {
    home_id: number;
}

export class Home {
    static getHomes(): Promise<TuyaHome[]>;
}
