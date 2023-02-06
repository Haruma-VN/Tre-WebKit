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
                sidebar.style.transition = 'all 0.5s ease-in-out';
            });
            closeBtn?.addEventListener('click', () => {
                sidebar.style.display = 'none';
                sidebar.style.transition = 'all 0.5s ease-in-out';
            });
        }
    }
    SideBar.ShowSideBar = ShowSideBar;
    async function ChangeDisplay(e) {
        const sidebar_element_a_active = document.querySelector('.sidebar .active');
        //#region 
        const sidebar_element_need_active = (e);
        sidebar_element_a_active?.classList.remove('active');
        sidebar_element_need_active.classList.add('active');
        //#endregion
        return;
    }
    SideBar.ChangeDisplay = ChangeDisplay;
    function AddOnClickFunctionOnSideBarClass() {
        document.addEventListener('DOMContentLoaded', async () => {
            const sidebar = document.querySelectorAll('.sidebar a');
            sidebar.forEach(function (sidebar_child) {
                sidebar_child.onclick = function () {
                    SideBar.ChangeDisplay(this);
                };
            });
            return;
        });
        return;
    }
    SideBar.AddOnClickFunctionOnSideBarClass = AddOnClickFunctionOnSideBarClass;
})(SideBar || (SideBar = {}));
