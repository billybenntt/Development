// ----------- SELECT ELEMENTS -----------

/*Convert NodeList into Array */
const numbers = [...document.querySelectorAll('.number')]

// ----------- HELPER FUNCTION  -----------
const updateCount = (element) => {
  const value = parseInt(element.dataset.value)
  const increment = Math.ceil(value / 1000)
  console.log(increment)
  let initialValue = 0
}


numbers.forEach((item) => {
  console.log(item)
  updateCount(item)

})



