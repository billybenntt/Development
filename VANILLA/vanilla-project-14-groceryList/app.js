// --------------- SELECT ITEMS ---------------
const alertElement = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const groceryAdd = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const groceryContainer = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// --------------- EDIT OPTIONS---------------
let editElement;
let editFlag = false;
let editID = '';


// --------------- FUNCTIONS FOR EVENT LISTENER ---------------
const addItem = (event) => {
    //Prevent Refresh
    event.preventDefault();

    // Capture Form Input
    const value = groceryAdd.value
    const id = new Date().getTime().toString()

    if (value && !editFlag) {
        console.log("Adding New")


    } else if (value && editFlag) {
        console.log("Editing")


    } else {
        displayAlert("Please enter value", "danger")
    }


}

const displayAlert = (text, action) => {
    alertElement.textContent = text;
    alertElement.classList.add(`alert-${action}`)

    setTimeout(() => {
        alertElement.textContent = "";
        alertElement.classList.add(`alert-${action}`)
    }, 1000)
}

// --------------- EVENT LISTENERS---------------

form.addEventListener("submit", addItem);


// --------------- LOCAL STORAGE --------------

// --------------- SETUP ITEMS ---------------
