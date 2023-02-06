"use strict";
export var WebItem;
(function (WebItem) {
    /*----------Strict Requirement----------*/
    class Restriction {
    }
    WebItem.Restriction = Restriction;
    /*----------DOMElement----------*/
    class DOMElement extends Restriction {
        /*----------Method must be private, unaccessable outisde the class----------*/
        element;
        constructor(tagName) {
            super();
            this.element = document.createElement(tagName);
        }
        /*----------Never use this----------*/
        error(error) {
            throw new Error(error);
        }
        /*----------Append Text Content----------*/
        addText(...params) {
            let text = '';
            params.forEach((param) => {
                text += param;
            });
            this.element.textContent = text;
            return this;
        }
        /*----------Add multiple classes with spread----------*/
        addClass(...params) {
            params.forEach((className) => {
                this.element.classList.add(className);
            });
            return this;
        }
        /*----------Set an attribute easily----------*/
        addAttribute(name, value) {
            this.element.setAttribute(name, value);
            return this;
        }
        /*----------Set an event Listener easy----------*/
        addEvent(eventName, handler) {
            this.element.addEventListener(eventName, handler);
            return this;
        }
        /*----------Append Child to the DOM Elements----------*/
        appendTo(parent) {
            parent.appendChild(this.element);
            return this;
        }
        /*----------append the element----------*/
        append(...children) {
            children.forEach(child => this.element.appendChild(child.element));
            return this;
        }
    }
    WebItem.DOMElement = DOMElement;
})(WebItem || (WebItem = {}));
