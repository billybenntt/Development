/* Function that gets the element */
function getElement (selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  } else {
    throw new Error('No Element Selected')
  }
}

/* Function that returns a collection of elements */

function getCollection (collection) {
  if (collection) {
    return [...document.querySelectorAll(collection)]
  } else {
    throw new Error('Invalid Collection')
  }
}




export { getElement, getCollection }