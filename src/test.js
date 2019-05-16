import {MyClass, ftest} from './lib'

console.log('TEST');

let dum = $('<button>test</button>').jqxButton({theme: 'light'});

const anObject = new MyClass(true);

ftest(anObject);

console.log(anObject);


export {dum}
