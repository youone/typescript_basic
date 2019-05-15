import {MyClass} from "../lib";

class MyElement extends HTMLElement {

    private readonly template = `
        <style>
            my-element #content {
                color: blue;
            }
        </style>
        <div id="content">content of my-element</div>
    `;

    constructor(obj: MyClass) {
        super();
        console.log('my-element constructed');
    }

    connectedCallback() {
        this.innerHTML = this.template;
        console.log('my-element connected');
    }
}

window.customElements.define('my-element', MyElement);
export default MyElement;