import $ from 'jquery';
import 'jqwidgets-framework';
import 'jqwidgets-framework/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-framework/jqwidgets/styles/jqx.light.css';
import './elements/js-element'
import {dum} from'./test';
import {MyClass, ftest} from './lib'


$(document).ready(() => {
    let butt = $('<button>test</button>');
    // $('body').html(dum);
    console.log(butt);
    // console.log(butt.jqxButton({theme: 'light'}));

    const mc = new MyClass('test');
    console.log('MMMMMMMMMMMMMM', mc.myName());

});


// console.log(dum);
$('body').append(dum);
$('body').append('<js-element>');

console.log('SECOND');