﻿/****************************************************************************
  ambient module for interfaces (copied and modified from T4TS.d.ts)
****************************************************************************/

declare module AppSpace {

    export interface IBroadcastMessage {
        ConnectionId: string;
        Message: string;
        Added: string;
    }

}