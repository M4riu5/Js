'use strict';
// Using stict code
// Terenarty

let hours = 15;

hours = 6;
//                         true          false
let laikas = hours < 6 ? 'its night' :  'its day'
console.log('laikas -->', laikas);

// Block scopme variable only works in this block let = laikas
if (hours < 6) {
    let laikas = 'its a night'
} else {
   let laikas = 'its a day'
}

console.log('laikas if else -->', laikas);

let isDarkModeOn = false;
const darkColor = '#333';
const lightColor = '#fff';

isDarkModeOn = true

//  if (isDarkModeOn === true) {
//     document.body.style.backgroundColor = darkColor;
// } else {
//     document.body.style.backgroundColor = lightColor;
// }

document.body.style.backgroundColor = isDarkModeOn === true ? darkColor : lightColor

// Switch

// let day = prompt('What day is it today ?')
let day = "6"
// converts to number
day = +day
console.log('day -->', day);

if (day === 1) {
    console.log('Monday')
}else if (day === 2) {
    console.log('Thursday')
} else if (day === 3) {
 console.log('wednesday')
} else {
    console.log('Invalid number')
}

// Switch statement
switch (day) {
    case 1:
        console.log('Monday')
        break;
        case 2: 
        console.log('Thursday')
        break;
        case 3:
            console.log('Wednesday')
            break;
            case 6 :
            case 7 :
                console.log('Weekend') 
                break;
            default: 
            console.log('Invalid number')
}