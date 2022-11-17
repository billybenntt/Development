
// --------- HELPER VARIABLES  ---------
const author = 'Bob Dylan'
const statement = 'STATEMENT'

// --------- EXTRACTION FUNCTION  ---------
/*Extract Values using highlight function */

const quote = highLight`Here is the ${statement}, by ${author}.`


// --------- PROCESSING FUNCTION  ---------

  /* Text and Remaining Values using ...rest */
function highLight (text, ...vars) {
  /* Rearrange the string */
  let awesomeText = text.map((item, index) => {
    /* If Undefined return empty string*/
    return `${item} <strong class="blue">${vars[index] || ""}</strong>`
  })
  return awesomeText.join("")
}


// --------- INJECTING RESULTS BACK  ---------

/*Select Parent Target Element */
const targetElement = document.getElementById("result")

/*Inject the Result */
targetElement.innerHTML = quote
