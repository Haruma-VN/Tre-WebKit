"use strict";
export namespace Theme {
    export function Change(): void {
        const themeBtn = document.querySelector('.theme-btn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                themeBtn.querySelector('span:first-child')?.classList.toggle('active');
                themeBtn.querySelector('span:first-child')?.classList.toggle('active');
            })
        }
    }
}