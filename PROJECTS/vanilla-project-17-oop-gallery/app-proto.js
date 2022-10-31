
function Gallery (element) {

  this.section = element;
  
}






// ------------  HELPER FUNCTION ------------

function getElement (selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  )
}
