"use strict";
export namespace Structure {
    export type comment = string;

    export type objects = {}[];

    export type version = 1;

    export interface Level {
        "#comment"?: comment;
        objects: objects;
        readonly version: version;
    }
}