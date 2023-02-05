"use strict";
export namespace SideBar {
    export function ShowSideBar(){
        const menuBtn = document.querySelector("#menu-btn");
        const closeBtn = document.querySelector("#close-btn");
        const sidebar = document.querySelector("aside");
        if(sidebar){
            menuBtn?.addEventListener('click', ()=>{
                sidebar.style.display = 'block';
            });
            closeBtn?.addEventListener('click', ()=>{
                sidebar.style.display = 'none';
            })
        }
    }
}