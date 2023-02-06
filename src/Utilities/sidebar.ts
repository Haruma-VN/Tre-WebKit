"use strict";
export namespace SideBar {
    export function ShowSideBar(): void {
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
    export async function ChangeDisplay(e: any): Promise<void> {
        const sidebar_element_a_active = document.querySelector('.sidebar .active');
        //#region 
        const sidebar_element_need_active = (e);
        sidebar_element_a_active?.classList.remove('active');
        sidebar_element_need_active.classList.add('active');
        //#endregion
        return;
    }

    export function AddOnClickFunctionOnSideBarClass(): void {
        document.addEventListener('DOMContentLoaded', async () => {
            const sidebar = document.querySelectorAll('.sidebar a');
            sidebar.forEach(function (sidebar_child) {
                (sidebar_child as any).onclick = function () {
                    SideBar.ChangeDisplay(this);
                }
            })
            return
        });
        return;
    }
}