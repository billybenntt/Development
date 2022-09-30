// Select All the Parent Elements Collection
const questionCollection = document.querySelectorAll(".question");


// Select all the Parent Elements
questionCollection.forEach((question) => {


    // Instead of using document we create an instance of a single toggle button
    // THis limits where we are looking for
    const toggleBtn = question.querySelector(".question-btn");


    // For each toggle BTN we apply an event listener that styles the parent
    toggleBtn.addEventListener("click", () => {

        // remove the class if it's not the item being clicked
        questionCollection.forEach((item) => {
            if (question !== item) {
                item.classList.remove("show-text")
            }

        })

        question.classList.toggle("show-text")
    })
})