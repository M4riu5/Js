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

// h2 change to Super tittle
// p change to friday 
// p append text 

const mainel = document.getElementById('title')
const maindate = document.getElementById('date')
const mainp = document.getElementById('paragraph')

mainel.textContent = 'Super Title'
maindate.textContent = new Date().toLocaleString('en-En', {dateStyle:'long'})
const newtext = ' Hello'
mainp.textContent = newtext + mainp.innerText

const color = document.getElementById('violet')
color.style.color = 'violet'

//querySelector

const colors = document.querySelector('#colors li:last-child')
console.log('colors -->', colors);
colors.textContent = 'Violet'

//Adding 
color.innerHTML += '<li>Added element</li>'

const itemsUlEl = document.getElementById('items')
// with cycle 
let liString = '';
console.time('generating 1000 items')
for (let i = 0; i <= 10; i++) {
    liString += `<li>Item ${i}</li>`
}
itemsUlEl.innerHTML = liString
console.timeEnd('generating 1000 items')

// Practice
// print 3 times
let vards = ''
let i = 0
while (i<3) {
    vards += 'Marius'
    i++
}
console.log('vards -->', vards);

// DO while executes atleast one time if false
let times = 2
let is = 0
let name = ''
do {
    name += 'Marius'
 is++ 
} while (is < times);
console.log('whiledo--->', name)

// Random number 1-5
const rndmnum = Math.floor(Math.random()*5)+1
console.log('rndmnum -->', rndmnum);
// Random number from 5 and 12
const rndm = Math.floor(Math.random()*8+5)
console.log('rndm -->', rndm);
// winner
const lotternumer = Math.floor(Math.random()*10)+1
if (lotternumer === 5) {
    console.log('you are a winner')
} else {
    console.log('Not so much')
}
