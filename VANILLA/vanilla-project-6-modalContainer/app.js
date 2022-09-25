// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


// Select the Elements

const openModalBtn = document.querySelector(".modal-btn")
const closeModalBtn = document.querySelector(".close-btn")
const modalContainer = document.querySelector(".modal-overlay")

// DOM Manipulation Function
const toggleElement = () => {
    modalContainer.classList.toggle("open-modal")
}


// Apply Event Listeners

// Click Events
openModalBtn.addEventListener("click", toggleElement)
closeModalBtn.addEventListener("click", toggleElement)
// Keyboard Events
window.addEventListener("keydown", (e) => {
    e.key === "Escape" ? modalContainer.classList.remove("open-modal") : false
})