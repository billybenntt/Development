// Window Level
window.addEventListener("click", (e) => {
    console.log("Window Bubbling", e.eventPhase)
}, false)

window.addEventListener("click", (e) => {
    console.log("Window Capturing", e.eventPhase)
}, true)

// Document Level
document.addEventListener("click", (e) => {
    console.log("Document Bubbling", e.eventPhase)
}, false)

document.addEventListener("click", (e) => {
    console.log("Document Capturing", e.eventPhase)
}, true)

// Inner DIV 2 Level
document.querySelector(".div2").addEventListener("click", (e) => {
    console.log("DIV2 Bubbling", e.eventPhase)
}, false)

document.querySelector(".div2").addEventListener("click", (e) => {
    console.log("DIV2 Capturing", e.eventPhase)
}, true)

// Inner DIV 1 Level
document.querySelector(".div1").addEventListener("click", (e) => {
    console.log("DIV1 Bubbling", e.eventPhase)
}, false)

document.querySelector(".div1").addEventListener("click", (e) => {
    console.log("DIV1 Capturing", e.eventPhase)
}, true)


// Button Level
document.querySelector("button").addEventListener("click", (event) => {
    console.log(event, event.eventPhase)
    event.target.innerHTML = "clicked"
    // If there are more than one event attached to an element this will prevent the other to propagate to other events
}, false)

