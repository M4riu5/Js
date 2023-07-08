//types 
console.log( typeof('good mornining'));
console.log( typeof(true));
console.log( typeof((365/12)));
console.log( typeof(window));
console.log( typeof(console.log));
// Conver
 const lol = String(23)
String(true)
Number('23')
console.log('String(23) -->', String(23)+10);
console.log('String(true) -->', String(true));
console.log('lol -->', typeof(lol));
console.log(23+'')
console.log("23"+23)

// boolean
Boolean(1) // true
Boolean(0) // false

// if fasle 
const mike = false

if (mike === true) {
    console.log("User exsits")
} else {
    console.log('User dont exists')
}

const x = '5' 

console.log(x === 5)
console.log(x == 5)
console.log(x != 5)
console.log(x !== 5)
console.log(x < 5)
console.log(x > 5)
console.log(x >= 5)

const age = -10
if (age >= 18) {
    console.log('Can drive')
} else {
    console.log('Cant drive')
}

if (age < 18) {
    console.log('Kid')
} else if (age < 70) {
    console.log('Adult')
} else if (age < 150) {
    console.log('Senior')
} else {
    console.log('Something went wrong')
}

// logic    ADN
console.log('true && true ===' , true && true)
console.log('true && true ===' , true && false)
console.log('true && true ===' , false && true)
console.log('true && true ===' , false && false)

// OR 
console.log('true || true ===' , true || true)
console.log('true || true ===' , true || false)
console.log('true || true ===' , false || true)
console.log('true || true ===' , false || false)

// NOT
console.log('!true ==', !true)
console.log('!false ==', !false)


if (age < 0 || age > 150 ) {
    console.log('Bad Input', age)
} else if (age > 0 && age <=18) {
    console.log('Kid')
} else if (age < 150) {
    console.log('Senior')
} else  {
    console.log('Bad input')
}


// JS MATH
let num1 = 11.41312
console.log(Math.PI)
console.log(Math.sqrt(9))

// Roudning
let round = Math.round(num1)
console.log(round)
// ceiling
let ceil = Math.ceil(num1)
console.log(ceil)
// floor
let floor = Math.floor(num1)
console.log(floor)
//
let trunc = Math.trunc(num1)
console.log(trunc)

// pakelt laipsniu
let pow = 2 ** 3;
console.log('pow -->', pow);

// Math max 
console.log('math min' , Math.min(0,120,30,40,10,-10,-20,-30))
// Math max 
console.log('math max' , Math.max(0,120,30,40,10,-10,-20,-30))

// Random never 1 
console.log('Math random' , Math.random())
console.log('Math random' , Math.random())
console.log('Math random' , Math.random())

// generate random number between 1 to 10 
let random = Math.floor(Math.random()* 10) + 1
console.log('random -->', random);

let price = 45.4575
let priced = price.toFixed(2)
console.log('price -->', price);
console.log('priced to fixed-->', priced);
console.log('price.toPrecision(2) -->', price.toPrecision(2));
console.log('price.toPrecision(4) -->', price.toPrecision(4));
console.log('price.toPrecision(3) -->', price.toPrecision(3));