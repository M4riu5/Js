// Arrays
const u1 = 'James'
const u2 = 'Arthur'
const u3 = 'Michael'

 
// Array Starts from 0      1          2
const names = ['James' , 'Arthur' , 'Micheal']
console.log('names -->', names[1]);
console.log('names -->', names[0]);
console.log('names -->', names);


// Number Array 
const numers = [1,5,8,9,12,23]
console.log('numers -->', numers);

// Mixed numbers 
const mixed = [45, 'James', true , null , [5,2]]
console.log('mixed -->', mixed);
// Sellect array in array 
console.log(mixed[4][1])

// Cycle array 
const colors = ['Greem' , 'Yellow', 'Orange']
for(let i = 0 ; i < 3 ; i++) {
    console.log(colors[i])
}

const pav = ['apple', 'sister', 'hammer' , 'sun', 'table', 'sky', 'lake']
const pgl = ['in', 'with', 'on', 'my', 'is', 'a', 'the', '']
console.log(pgl[3], pav[1], pgl[4] , pgl[0] , pgl[6], pav[6] )

// Array lenght
const num = [46,1,4,78,9,5,1,4,5,521]
console.log('num -->', num);
console.log('num -->', num.length);
// select last number in massive
console.log('num -->', num[num.length -1]);

// Get all numbers from array
for (let index = 0; index < num.length; index++) {
    const element = num[index];
    console.log('element -->', element);
}

// ARRay methods
const colorss = ['green', 'blue', 'red']
console.log('colorss -->', colorss);
// Array push adds to end of array gets added to original
const pushResult = colorss.push('violet')
console.log('pushResult -->', colorss);

// Array unsift('new') - adds to begining still modificates original
const unshiftres= colorss.unshift('brown')
console.log('unshiftres -->', colorss);

// The shift() method removes the first item of an array.

// pop() - removes last element

// array.slice(start, finish) - slice array wont modify original
let sliceres = colorss.slice(2,4)
sliceres = colorss.slice(2)
sliceres = colorss.slice(-2)
console.log('slice -->', sliceres);

console.log(typeof colorss)
console.log(Array.isArray(colorss))

// OBJECTS 
const user1 = {
    firstName: 'James',
    age: 27,
    town: 'Glasgow',
    email: 'JamesBronz@gmail.com',
    greet: function() {
        console.log('Hello', user1.firstName)
    }
}
console.log(user1['firstName'])
console.log('user1 -->', user1.email);
// Add to object 
user1.email = 'uknown'
console.log('user1 -->', user1.email);

// Functions

function greet() {
    console.log('Hello world!')
}
// need to summon function
greet()

// function summon in object
// summoning function in object is method
user1.greet()

function sayHello(person) {
    console.log(`${person} Says hello`)
}
sayHello('Marius')

// function that sum two digits
// RETURN = ends function execution and specifies a value to be returned to the function caller
function sum(num1, num2) {
   let suma = num1 + num2
   console.log(`If we add ${num1} with ${num2} we get ${suma}`)
   return suma
}
const suma = sum(20,2)
const sum2 = sum(3,23)
// after return function returns numbers and we can use them
console.log('suma -->', suma);
console.log('sum2 -->', sum2);
sum(suma + sum2)
// we can function use with function

function getWalls(lenght , width , height) {
    const per = (lenght+width) * 2
    const wallwidth = per * height
    console.log('wallwidth -->', wallwidth);
   return wallwidth
}

function printtoHTML(rez) {
    const divEl = document.getElementById('app');
   // divEl.innerHTML += `<p> wall witdh is ${wallwidth} </p>`
   const pEl = document.createElement('p')
   pEl.textContent = ` wall witdh is ${rez} `
   // append(inser) insert to 
   divEl.append(pEl)
}
const siena1 = getWalls(10,5,3)
const siena2 = getWalls(10,51,3)
const siena3 = getWalls(10,53,3)
getWalls(10,5,33)

printtoHTML(siena1)
printtoHTML(siena2)
printtoHTML(siena3)

function makeBgColor() {
    if(document.body.style.backgroundColor === 'tomato') {
        document.body.style.backgroundColor = 'snow'
    } else {
        document.body.style.backgroundColor = 'tomato'
    }
}

const h1el = document.querySelector('h1')
const hel = h1el.style.fontSize= '26px'
function bigger() {
    console.log('parseInt(hel) -->', parseInt(hel) +=2);
    
}