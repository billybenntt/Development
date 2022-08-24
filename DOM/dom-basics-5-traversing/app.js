// Select Reference Element
const targetElement = document.getElementsByTagName("ul")[0];


// Show Current Element
console.log(targetElement)


// Show Parent Node
console.log("Parent Node of Current")
console.log(targetElement.parentNode)
console.log(targetElement.parentElement)
// Show Grandparent Node
console.log(targetElement.parentNode.parentNode)



// Show HTML Element
console.log("Parent Node of HTML")
const html = document.documentElement
console.log(html)
// Returns the document Object
console.log(html.parentNode)
// Returns Null since the document Object is not an element
console.log(html.parentElement)



// Children Element
console.log("Children Element of Current")
console.log(targetElement.childNodes)
console.log(targetElement.children)
// Careful with these suckers, they pick the text nodes
console.log(targetElement.firstChild)
console.log(targetElement.lastChild)
//  These are better, these don't pick the text nodes
console.log(targetElement.firstElementChild)
console.log(targetElement.lastElementChild)



// Sibling Elements
console.log("Sibling Elements")
console.log(targetElement.previousElementSibling)
console.log(targetElement.previousSibling)
console.log(targetElement.nextSibling)
console.log(targetElement.nextElementSibling)











