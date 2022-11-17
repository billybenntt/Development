// --------- ES8: SPREAD OPERATOR ... DOM SELECTING  ---------

const headings = document.querySelectorAll('h1')
const resultElement = document.getElementById('result')

/* Convert NodeList into Array and add extra element */
let elements = [...headings, resultElement]

/*Iterate over each item and apply styles */
elements.map(item => {
  item.style.color = 'red'
})