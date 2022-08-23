// Dom Manipulation

const title = document.getElementById("main-heading")

// Showing the Item
console.log("Item Selected")
console.log(title)

// Changing the Style
console.log("Apply Style")
console.log(title)
title.style.backgroundColor = "red"



// Dom Manipulation Multiple elements

const listItems = document.getElementsByClassName("list-items");

for (const listItem of listItems) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    listItem.style.backgroundColor = `#${randomColor}`
}
