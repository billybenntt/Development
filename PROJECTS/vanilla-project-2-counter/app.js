// Set Initial Value
let count = 0;

// Select Elements

const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");


// ForEach to iterate over each element

buttons.forEach(function (item) {

    // Attach Event Listener to each item
    item.addEventListener("click", () => {

        // Check Class list
        if (item.classList.contains("decrease")) {
            count--;
        } else if (item.classList.contains("increase")) {
            count++;
        } else if (item.classList.contains("reset")) {
            count = 0;
        }


        // Modify Color according to value
        if (count > 0) {
            value.style.color = "green"
        } else if (count < 0) {
            value.style.color = "red"
        } else {
            value.style.color = "#222"
        }

        // Modify Display Value
        value.innerText = count.toString()

    })

})
