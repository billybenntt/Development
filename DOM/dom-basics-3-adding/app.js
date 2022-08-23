
// Creating Element
const firstElement = document.createElement("li")
const secondElement = document.createElement("li")
const thirdElement = document.createElement("li")

// Add Text Content
firstElement.innerText = "First element";
secondElement.innerHTML = "<strong>Second Element</strong>"
// *** This Has Shitty Formatting ***
thirdElement.textContent = "Third Element"

// Add Styles
firstElement.style.color = "red";
secondElement.style.color = "black"
thirdElement.style.color = "green"

// Add Attributes
firstElement.setAttribute("class", "juas")
firstElement.setAttribute("style", "color: white")

// Get Attribute List
console.log(firstElement.getAttributeNames())


// Add Classes
firstElement.classList.add('list-items')
secondElement.classList.add('list-items')
thirdElement.classList.add('list-items')


// Select Parent
const parentElement = document.querySelector("ul");

// Appending Child
parentElement.appendChild(firstElement)
parentElement.append(secondElement)
parentElement.append(thirdElement)

