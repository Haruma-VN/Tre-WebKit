"use strict";
export namespace WebItem {
    /*----------Strict Requirement----------*/
    export abstract class Restriction {
        protected abstract error(error: any): never;
        public abstract addText(...params: string[]): DOMElement;
        public abstract addClass(...params: string[]): DOMElement;
        public abstract addAttribute(name: string, value: string): DOMElement;
        public abstract addEvent(eventName: string, handler: EventListener): DOMElement;
        public abstract appendTo(parent: HTMLElement): DOMElement;
        public abstract append(...children: DOMElement[]): DOMElement;
    }

    /*----------DOMElement----------*/
    export class DOMElement extends Restriction{

        /*----------Method must be private, unaccessable outisde the class----------*/
        private readonly element: HTMLElement;

        constructor(tagName: string) {
            super();
            this.element = document.createElement(tagName);
        }

        /*----------Never use this----------*/
        protected error(error: any): never {
            throw new Error(error);
        }

        /*----------Append Text Content----------*/
        public addText(...params: string[]): DOMElement {
            let text: string = '';
            params.forEach((param: string) => {
                text += param;
            });
            this.element.textContent = text;
            return this;
        }

        /*----------Add multiple classes with spread----------*/
        public addClass(...params: string[]): DOMElement {
            params.forEach((className: string) => {
                this.element.classList.add(className);
            });
            return this;
        }

        /*----------Set an attribute easily----------*/
        public addAttribute(name: string, value: string): DOMElement {
            this.element.setAttribute(name, value);
            return this;
        }

        /*----------Set an event Listener easy----------*/
        public addEvent(eventName: string, handler: EventListener): DOMElement {
            this.element.addEventListener(eventName, handler);
            return this;
        }

        /*----------Append Child to the DOM Elements----------*/
        public appendTo(parent: HTMLElement): DOMElement {
            parent.appendChild(this.element);
            return this;
        }

        /*----------append the element----------*/
        public append(...children: DOMElement[]): DOMElement {
            children.forEach(child => this.element.appendChild(child.element));
            return this;
        }
    }
}