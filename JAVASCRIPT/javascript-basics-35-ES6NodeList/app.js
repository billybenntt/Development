// --------- ES6: NODE LIST  ---------

const paragraphs = document.querySelectorAll('p')
const result = document.getElementById('result')
const second = document.getElementById('second')



// --------- ES6: NODE LIST CONVERSION LONG WAY  ---------

let newText = Array.from(paragraphs)

newText = newText.map((item) => {
  return `<span>${item.textContent}</span>`
}).join('')


result.innerHTML = newText


// --------- ES6: NODE LIST CONVERSION SHORT WAY  ---------

/* Array From has already the Map Function Integrated in the second argument */

const text = Array.from(document.querySelectorAll('p'), (item)=>{
 return `<span>${item.textContent}</span>`
}).join("")


second.innerHTML = text

