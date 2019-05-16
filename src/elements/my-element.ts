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

    public prop1: number;

    constructor(obj: MyClass) {
        super();
        console.log('my-element constructed', obj);
    }

    connectedCallback() {
        this.innerHTML = this.template;
        console.log('my-element connected');
    }

    set prop2(value: number) {
        console.log('setting prop1', value);
    }

    get prop2(): number {
        console.log('getting prop1');
        return 99;
    }
}

window.customElements.define('my-element', MyElement);
export default MyElement;