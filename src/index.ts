import $$ from 'jquery';
import 'jquery-ui/ui/widgets/draggable'
import {MyClass, ftest} from './lib'
import test from './test.json';
import MyElement from './elements/my-element';
import './elements/my-element'
import 'jqwidgets-framework';
import 'jqwidgets-framework/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-framework/jqwidgets/styles/jqx.light.css';
import 'qtip2/dist/jquery.qtip.min'
import 'qtip2/dist/jquery.qtip.min.css'
import {dum} from './test';


const anObject = new MyClass('test');
//
// ftest(anObject);

// console.log(test);

let myElement = <MyElement> document.createElement('my-element');
myElement.setAttribute('name', 'hej');
let myElement2 = new MyElement(anObject);
let myElement3 = $('<my-element name="testing">');
document.body.appendChild(myElement);
document.body.appendChild(myElement2);
$('body').append(myElement3);
// console.log(myElement);
console.log(myElement3[0]);

// myElement.prop1 = 5;
// myElement2.prop1 = 5;
(<MyElement> myElement3[0]).prop1 = 7;

// console.log(dum);
// $('body').append(dum);


$('<my-element name="testttt">').appendTo('body');