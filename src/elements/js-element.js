const template = `
<style>
    js-element #content {
        color: blue;
    }
</style>
<div id="content"><button>test2</button></div>
`;

class JsElement extends HTMLElement {


    constructor(obj) {
        super();
        console.log('js-element constructed', obj);
    }

    connectedCallback() {
        this.innerHTML = template;

        $(this).find('#content button').jqxButton({theme: 'light'});

        // let butt = $('<button>test</button>');
        // console.log(butt);
        // console.log(butt.jqxButton({theme: 'light'}));

        console.log('js-element connected');
    }

}

window.customElements.define('js-element', JsElement);
export default JsElement;