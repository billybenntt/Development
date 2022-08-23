// Get Element by ID
const title = document.getElementById("main-heading")
console.log("By ID Name")
console.log(title)

// Get Elements by Class Name
const listItems = document.getElementsByClassName("list-items");
console.log("By Class Name")
console.log(listItems)


// Get Elements by Tag Name
const listItemsTag = document.getElementsByTagName("li")
console.log("By Tag Name")
console.log(listItemsTag)

// Get First Element of any Type
const container = document.querySelector("#main-heading")
console.log("Query Selector")
console.log(container)


// Get All elements of any Type
const allTheItems = document.querySelectorAll("div")
console.log("Query Selector All")
console.log(allTheItems)