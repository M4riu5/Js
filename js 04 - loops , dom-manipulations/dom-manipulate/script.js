'use strict';
console.log('script.js');

// document.getElementsByClassname('class')[get array of classes where can we selecet].textContect='Hello World'
// const text = document.querySelector('body')
// text.innerHTML=('<h2>Hello World!</h2>')

document.querySelector('h1').textContent = 'Hello World!'

const cheese = document.querySelectorAll('li')
console.log('cheese -->', cheese[2].textContent=('Cheese'));
// Selects first element can select inside element
document.querySelector('p').textContent= 'first'
// Selects all in object
console.log(document.querySelectorAll("p")[1].textContent='second')

// Practice
const test = document.querySelectorAll('p')[4]
test.querySelector('span').style = ' color : yellow'



// document.querySelectorAll('ol > li')[2].innerHTML = 'BMW GROUP'
// document.querySelectorAll('ol>li')[0].textContent = 'GE'

const firstListItem = document.querySelector('li:first-child');
const secondListItem = document.querySelector('li:nth-child(2)');

const bmw_group = firstListItem.textContent;
const vw_group = secondListItem.textContent;

firstListItem.textContent = vw_group;
secondListItem.textContent = bmw_group;
