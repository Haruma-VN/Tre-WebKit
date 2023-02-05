"use strict";
export var SideBar;
(function (SideBar) {
    function ShowSideBar() {
        const menuBtn = document.querySelector("#menu-btn");
        const closeBtn = document.querySelector("#close-btn");
        const sidebar = document.querySelector("aside");
        if (sidebar) {
            menuBtn?.addEventListener('click', () => {
                sidebar.style.display = 'block';
            });
            closeBtn?.addEventListener('click', () => {
                sidebar.style.display = 'none';
            });
        }
    }
    SideBar.ShowSideBar = ShowSideBar;
})(SideBar || (SideBar = {}));
