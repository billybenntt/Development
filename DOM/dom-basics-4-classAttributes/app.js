
const firstElement = document.getElementsByClassName("list-items")[0]
const secondElement = document.getElementsByClassName("list-items")[1]
const thirdElement = document.getElementsByClassName("list-items")[2]


// Adding and Removing Classes
firstElement.classList.add("customClass")
secondElement.classList.remove("customClass")

// Check if Element Contains a class
if (firstElement.classList.contains("customClass")){
    thirdElement.style.color = "blue"
}

