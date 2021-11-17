'use strict';

if (1) {
    console.log('Ok!');

} else {
    console.log('Error');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Okay');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');
// : значит если / 

const num = 50;

switch (num) {
 case 49: 
 console.log('Неверно');
 break;
case 100: console.log('Unright');
break;
case 50: console.log('All right');
break;
default: console.log(' not that time');
break;
}
