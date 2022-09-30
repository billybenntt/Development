// Select Element
const accordion = document.getElementsByClassName("content-container")


// For loop to attach event listeners to all the elements
for (let i = 0; i < accordion.length; i++) {

    // Use Function declaration instead of arrow function, otherwise <This> keyword won't work
    accordion[i].addEventListener("click", function () {

        // Apply the class on current element
        this.classList.toggle("active")
    })

}