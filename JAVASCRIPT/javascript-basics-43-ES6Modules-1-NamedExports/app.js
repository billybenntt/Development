import { random, people } from './utils/data.js'

console.log(random)

// -------- SELECT ITEMS  ---------

const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

// -------- UTILITY FUNCTIONS  ---------

const showPeople = () => {
  container.innerHTML = people.map((item) => {
    const { name, job } = item
    return `<p>${name}-> <strong>${job}</strong></p>`
  }).join('')
}

// -------- EVENT LISTENER  ---------

btn.addEventListener('click', () => {
  showPeople()
})