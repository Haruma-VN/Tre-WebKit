"use strict";
import { SideBar, Theme } from './Utilities/utilities.js';
var Tre;
(function (Tre) {
    var LevelMaker;
    (function (LevelMaker) {
        var WebKit;
        (function (WebKit) {
            function Main() {
                SideBar.ShowSideBar();
                Theme.Change();
            }
            WebKit.Main = Main;
        })(WebKit = LevelMaker.WebKit || (LevelMaker.WebKit = {}));
    })(LevelMaker = Tre.LevelMaker || (Tre.LevelMaker = {}));
})(Tre || (Tre = {}));
Tre.LevelMaker.WebKit.Main();
