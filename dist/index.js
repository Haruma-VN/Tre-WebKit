"use strict";
import { SideBar, Theme, WebItem } from './Utilities/utilities.js';
var Tre;
(function (Tre) {
    var LevelMaker;
    (function (LevelMaker) {
        var WebKit;
        (function (WebKit) {
            function Main() {
                SideBar.ShowSideBar();
                Theme.Change();
                SideBar.AddOnClickFunctionOnSideBarClass();
                WebItem.AddCollapseToBtn();
            }
            WebKit.Main = Main;
            async function ChangeSideBarChild(e) {
                return await SideBar.ChangeDisplay(e);
            }
            WebKit.ChangeSideBarChild = ChangeSideBarChild;
        })(WebKit = LevelMaker.WebKit || (LevelMaker.WebKit = {}));
    })(LevelMaker = Tre.LevelMaker || (Tre.LevelMaker = {}));
})(Tre || (Tre = {}));
Tre.LevelMaker.WebKit.Main();
