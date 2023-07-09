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

const month = 10

switch (month) {
    case 1:
    case 2:
    case 12:
        console.log('winter')
        break;
    case 3:
    case 4:
    case 5:
        console.log('Spring')
        break;
        case 6:
        case 7:
        case 8:
            console.log('Summer')
            break;
            case 9:
            case 10:
            case 11:
                console.log('Autumn')
                break;
    default:
        console.log('Invalid numer')
        break;
}

// WHILE 
//while(condition) {
//   till === true
//   have to have something that changes to false
// }

let i = 1;
// i + 1 adds later           later
// if ++i then it adds now    now
let plusone = i++

//while (i <= 8) {//
//     console.log(`cycle ${i}`)
//     // if one time using i++ if more then i += 2
//      i += 2 ;
// }
 // if we want to go from negative
// while (i >= -5) {
//     console.log(`cycle ${i}`)
//      i-- ;
// }

// DO WHILE LOOP
// Do loop while atleast one conditional is true
// do {
//     console.log(`do while cikle ${i}`)
//     i++;
// } while (i <=8);

// FOR LOOP
// loop number form 0 to 30

// for () {}
///              if true = starts
// for (let i = 0 ; i <= 10 ; i += 3) {
//     // code at work
//     console.log(i , 'forcycle')
// }


// Practice 

// for (let i = 15 ; i <= 55 ; i++) {
//     console.log(`cycle ${i}`)
// }

// for (let i = 100 ; i >= 40 ; i--) {
//     console.log(`${i} cycle`)
// }

// for(let i = 1 ; i <=10 ; i++) {
//     console.log(`${i+i}`)
// }

// let avg = 0
// for(let i = 2 ; i <= 10 ; i++) {
//    avg += i
// }
// console.log('avg -->', avg/8);

// for(let i = 11 ; i <= 22; i++) {
// console.log(i*2)
// }

for (let i = 0 ; i <= 10 ; i+=1) {
    document.body.insertAdjacentHTML('afterbegin', `<p>Hello World ${i}</p>`)
}