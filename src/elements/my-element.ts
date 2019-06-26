/// <reference path="../../node_modules/jqwidgets-framework/jqwidgets-ts/jqwidgets.d.ts" />
import uuid from 'uuid/v4';
import $$ from 'jquery';
import {MyClass} from "../lib";

class MyElement extends HTMLElement {

    private name: string;
    private myButton: jqwidgets.jqxButton;
    private toolbar: jqwidgets.jqxToolBar;
    private tabs: jqwidgets.jqxTabs;
    private uuid: string = uuid();

    private readonly template = `
        <style>
            my-element #content {
            }
        </style>
        <div id="content">
            <button id="theButton" title="description"></button>
            <div id="theToolbar"></div>
            <div id="theTabs">
                <ul>
                    <li>Tab1</li>                
                    <li>Tab2</li>
                </ul>
                <div></div>
                <div></div>
            </div>
        </div>
    `;

    public prop1: number;

    constructor(obj: MyClass) {
        super();
        console.log('my-element constructed', obj);
    }

    connectedCallback() {

        this.name = this.getAttribute('name');
        this.setAttribute('id', this.name);
        this.setAttribute('uuid', this.uuid);

        this.innerHTML = this.template;
        console.log('my-element connected', $$);

        $$(this).find('#theToolbar').draggable();
        $$(this).find('#theButton').html(this.name).qtip();

        const ButtonOptions: jqwidgets.ButtonOptions = {
            theme: 'light',
            // width: 400,
            // height: 40
        };
        const ToolbarOptions: jqwidgets.ToolBarOptions = {
            theme: 'light',
            width: 400,
            height: 40,
            tools: 'toggleButton | toggleButton ',
            initTools: function (type, index, tool, menuToolIninitialization) {
                switch(index) {
                    case 0:
                        $$(tool).qtip({
                            content: {
                                text: (event, api) => {
                                    return 'hej';
                                }
                            }
                        });
                        break;
                    case 1:
                        break;
                }
            }
        };
        const TabsOptions: jqwidgets.TabsOptions = {
            theme: 'light',
            width: 400,
            height: 300
        };

// creates an instance
        this.myButton = jqwidgets.createInstance(`my-element[uuid="${this.uuid}"] #theButton`, 'jqxButton', ButtonOptions);
        this.toolbar = jqwidgets.createInstance(`my-element[uuid="${this.uuid}"] #theToolbar`, 'jqxToolBar', ToolbarOptions);
        this.tabs = jqwidgets.createInstance(`my-element[uuid="${this.uuid}"] #theTabs`, 'jqxTabs', TabsOptions);

        this.myButton.addEventHandler('click', (event) => {
            console.log(this.name);
        });
        this.tabs.addEventHandler('selected', (event) => {
            console.log('TAB CLICKED', this.tabs.getTitleAt(event.args.item));
            $(this).trigger('atabclick');
        });

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