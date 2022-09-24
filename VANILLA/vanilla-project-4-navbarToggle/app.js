// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// Select Elements
const toggleBtn = document.getElementById("nav-toggle")
const links = document.querySelector(".links")


const longMethod = () => {
    if (links.classList.contains("show-links")) {
        //   toggle: If class is already there remove it
        links.classList.remove("show-links")
    } else {

        //toggle: If it's not there add it
        links.classList.add("show-links")
    }
}

const shortMethod = () => {
    links.classList.toggle("show-links")
}

// Event Listeners

toggleBtn.addEventListener("click", shortMethod)