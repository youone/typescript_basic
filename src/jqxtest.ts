/// <reference path="../node_modules/jqwidgets-framework/jqwidgets-ts/jqwidgets.d.ts" />
/// <reference path="../node_modules/@types/jqueryui/index.d.ts" />
/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../node_modules/@types/qtip2/index.d.ts" />
/// <reference path="./easy.d.ts" />
import $$ from 'jquery'
import 'jquery-ui/ui/widgets/draggable'
import 'jqwidgets-framework/jqwidgets/jqxcore'
import 'jqwidgets-framework/jqwidgets/jqxbuttons'
import 'jqwidgets-framework/jqwidgets/jqxtoolbar'
import 'jqwidgets-framework/jqwidgets/jqxtabs'
import 'jqwidgets-framework/jqwidgets/styles/jqx.base.css'
import 'jqwidgets-framework/jqwidgets/styles/jqx.metro.css'
import 'jqwidgets-framework/jqwidgets/styles/jqx.light.css'
import 'qtip2/dist/jquery.qtip.min'
import 'qtip2/dist/jquery.qtip.min.css'
import './elements/my-element'
import './elements/js-element'

console.log($$);
// console.log($$.widget);

// const btn = $('<button id="theButton">hej</button>').appendTo('body');

$('<my-element name="test1">').appendTo('body');

$('body').on('atabclick', (event) => {
    console.log(event);
});

// const btn = $('<button>hej</button>').jqxButton({
//     theme: 'light',
// }).appendTo('body');

// const ButtonOptions: jqwidgets.ButtonOptions = {
//     theme: 'light',
//     width: 120,
//     height: 40
// };
//
// // creates an instance
// const myButton: jqwidgets.jqxButton = jqwidgets.createInstance('#theButton', 'jqxButton', ButtonOptions);
//
// myButton.addEventHandler('click', (event) => {
//     console.log(event);
// });