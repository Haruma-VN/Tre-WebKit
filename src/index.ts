"use strict";
import { SideBar, Theme } from './Utilities/utilities.js'; 
namespace Tre.LevelMaker.WebKit {
    export function Main(): void {
        SideBar.ShowSideBar();
        Theme.Change();
    }
}


Tre.LevelMaker.WebKit.Main()