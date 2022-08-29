// Variables
const openButton = document.getElementById("open-btn")
const modalContainer = document.getElementById("modal-container")
const closeButton = document.getElementById("close-btn")


// event Listener

// Open Modal
openButton.addEventListener("click", () => {
    modalContainer.style.display = "block"
})

// Close Modal With Button
closeButton.addEventListener("click", () => {
    modalContainer.style.display = "none"
})

// Close Modal Using Window
window.addEventListener("click", (event) => {
    if (event.target === modalContainer) {
        modalContainer.style.display = "none"
    }
})
