"use strict";
export namespace Interface {
    //#region 
    // Any strings
    export type zombie = string;

    // Integer Number from 0 to 5

    export type row = number;

    // Integer Number only
    export type plantfood = number;


    // data in row
    export interface RowZombie {
        row: row;
        type: zombie;
    }

    export type RandomSpawn = boolean;

    // groups
    export type ZombiesData = Array<RowZombie>;

    export type NMTEvent = string;
    // NMT Notification Events
    export type NotifyEvent = Array<NMTEvent>;

    // Wave Data Constructor
    export interface RowDataConstructor {
        notify?: NotifyEvent;
        plantfood?: plantfood;
        random?: RandomSpawn;
        groups: ZombiesData;
    }

    //#endregion
}