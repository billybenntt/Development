// Select Element
const parentElement = document.getElementById("sports")

// Delegate Event to Parent instead of every single child
parentElement.addEventListener("click", (event) => {

    // This prevents the parent from being Styled
    if (event.target.matches("li")) {
        // Toggle Pattern
        if (event.target.classList.contains("hasBlue") ) {
            event.target.classList.remove('hasBlue')
        } else {
            event.target.classList.add('hasBlue')
        }
    }

})

// Create Element

const newSport = document.createElement("li")
newSport.innerText = "Baseball"
newSport.setAttribute("id", "baseball")
parentElement.append(newSport)