import $ from 'jquery';
import 'jqwidgets-framework';
import 'jqwidgets-framework/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-framework/jqwidgets/styles/jqx.light.css';
import './elements/js-element'
import {dum} from'./test';

$(document).ready(() => {
    let butt = $('<button>test</button>');
    // $('body').html(dum);
    console.log(butt);
    // console.log(butt.jqxButton({theme: 'light'}));
});


// console.log(dum);
$('body').append(dum);
$('body').append('<js-element>');

console.log('SECOND');