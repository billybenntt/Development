
// Select Trigger Element
const button1 = document.getElementsByClassName("btn-1")[0]
const box1 = document.getElementsByClassName("box-1")[0]
const box3 = document.getElementsByClassName("box-3")[0]




// Attach Event Listener "Click"
button1.addEventListener("click", (event)=>{
    console.log(event.target)
})


// Attach Event Listener "Mouseover" Changes the Box 3 Background
box3.addEventListener("mouseover",()=>{
    box3.style.backgroundColor = "blue"
})



