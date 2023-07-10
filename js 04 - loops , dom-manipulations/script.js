'use strict';
console.log('script.js');

let sum = 0
// debugger - takes step by step
for(let i = 1 ; i < 6 ; i++) {
    sum += i
    console.log(`This loop is ${i}. Sum = ${sum += i} `)
}
console.log(`Sum after cycle  = ${sum}`)

// Print from 10 to 20 but skip 15
// Break - stops the code
// continue - skips 
for(let i = 10 ; i <= 20 ; i++) {
    if(i==15) { continue;}
    console.log(i)
}

// Change dinamicly

// Saves element path
const h1El  = document.getElementById('main-heading')
console.log('h1El -->', h1El);
// Textcontentent goes for text
h1El.textContent = 'Bonjorno'

const pel = document.getElementById('text')
console.log('pel -->', pel);
const result = pel.textContent
console.log('result -->', result);

// Add new element to div with id box
const divel = document.getElementById('box')
// innerHTML append HTML code from sting
divel.innerHTML = "<h3>I am Dinamic <i>element</i></h3>"