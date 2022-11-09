// -------- IMPORT STUFF NAMED   ---------
import { people } from './utils/data.js'
// -------- IMPORT STUFF DEFAULT   ---------
import showPeople from './utils/showPeople.js'

// -------- SELECT ELEMENTS    ---------
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
console.log(people)

// -------- EVENT LISTENER  ---------

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people)
})