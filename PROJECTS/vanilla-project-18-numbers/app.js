// ----------- SELECT ELEMENTS -----------

/*Convert NodeList into Array */
const numbers = [...document.querySelectorAll('.number')]

// ----------- HELPER FUNCTION  -----------

const updateCount = (element) => {
  /* Extract the value from data- */
  const value = parseInt(element.dataset.value)
  /* Calculate Increment Rate */
  const increment = Math.ceil(value / 100)
  console.log(increment)
  /* Changing Initial Value */
  let initialValue = 0

  const increaseCount = setInterval(() => {
    initialValue += increment
    /* Stop Condition - Prevent Exceeding Initial Value*/
    if (initialValue > value) {
      element.innerText = `${value}`
      /* Remove Interval once condition is met */
      clearInterval(increaseCount)
      /* Exit from CBFunction */
      return
    }

    /* Update the DOM */
    element.innerText = `${initialValue}+`
  }, 1)

}

// ----------- DOM ITERATOR  -----------
/* Apply Same Function to all the elements */

numbers.forEach((item) => {

  updateCount(item)

})



