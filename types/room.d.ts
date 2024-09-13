export interface TuyaRoom {
    name: string;
    room_id: number;
}

export class Room {
    static getRooms(homeId: number): Promise<TuyaRoom[]>;
    static createRoom(homeId: number, roomName: string): Promise<number>;
    static deleteRoom(homeId: number, roomId: number): Promise<boolean>;
}
