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

isDarkModeOn = false

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


// Practice 

// Switch

const car = 'BMW'
switch (car) {
    case 'VW':
    case 'AUDI':
    case 'Bentley':
    case 'Bugatti':
    case 'Lamborghini':
    case 'Porsche':
        console.log('VW GROUP')
        break;
    case 'BMW':
    case 'MINI':
    case 'Rolls-Royce':
        console.log('BMW GROUP')
        break;
    default:
        console.log('Bad Input')
        break;
}

let userInput = 'Apple'

switch (userInput) {
    case 'Pickle':
    case 'Tomato':
    case 'Cabbage':
        console.log('Plants')
        break;
    case 'Apple' :
    case 'Melon' :
    case 'WaterMelon' :
    case 'Mango' :
        console.log('Fruits')
        break;
    default:
        console.log('invalid input')
        break;
}

let weekday = +'5'

switch (weekday) {
    case 1:
        weekday = 'Monday'
        break;
    case 2:
        weekday = 'Tuesday'
        break;
    case 3:
        weekday = 'Wednesday'
        break;
    case 4:
        weekday = 'Thursday'
        break;
    case 5:
        weekday = 'Friday'
        break;
    case 6:
        weekday = 'Saturday'
        break;
    case 7:
        weekday = 'Sunday'
        break;

    default:
        console.log('invalid day')
        break;
}

let daytoday = weekday
console.log('daytoday -->', daytoday);

// Ternary

let names = 'Mariusss'

const lenghts = names.length <= 6 ? 'Shortname' : 'Long Name'
console.log('lenghts -->', lenghts);

let clientAge = 20
let legalAge = 18

const canDrive = clientAge < legalAge ? 'Cant drive' : 'Can Drive'
console.log('canDrive -->', canDrive);

const candrivecar = clientAge <= 0 || clientAge > 120 ? 'Invalid age' : clientAge < legalAge ? "cant" : 'can'
console.log('candrivecar -->', candrivecar);

const phone = 'Iphone' 
const isIphoneuser = phone === 'Iphone'
console.log('isIphoneuser -->', isIphoneuser);

// Cycles practice
//for(i = 1 ; i <= 10 ; i++) {
//    console.log(`${i} Marius`)
//}

for(i = 10 ; i >= 1 ; i--) {
    console.log(i)
}
