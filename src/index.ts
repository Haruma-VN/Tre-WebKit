"use strict";
import { SideBar, Theme, WebItem, Disable } from './Utilities/utilities.js';
namespace Tre.LevelMaker.WebKit {
    export function Main(): void {
        SideBar.ShowSideBar();
        Theme.Change();
        SideBar.AddOnClickFunctionOnSideBarClass();
    }

    export async function ChangeSideBarChild(e: any): Promise<void> {
        return await SideBar.ChangeDisplay(e);
    }    
}


Tre.LevelMaker.WebKit.Main()