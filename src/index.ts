import {MyClass, ftest} from './lib'
import test from './test.json';
import MyElement from './elements/my-element';

const anObject = new MyClass('test');

ftest(anObject);

console.log(test);

let myElement = document.createElement('my-element');
let myElement2 = new MyElement(anObject);
document.body.appendChild(myElement);
document.body.appendChild(myElement2);
console.log(myElement);
