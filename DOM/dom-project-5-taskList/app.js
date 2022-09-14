// Variables

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

addTask.addEventListener("click", () => {

    // Create Empty DIV
    let task = document.createElement("div")

    // Add Class to Style it
    task.classList.add("task")

    // Add Inner Elements
    // List Element
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li)

    // Button Elements
    let checkButton = document.createElement("button");
    checkButton.classList.add("checkTask");
    checkButton.innerHTML = '<i class="fa-solid fa-check">'
    task.appendChild(checkButton)
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteTask");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can">'
    task.appendChild(deleteButton)


    // Do Validation
    if (inputTask.value === '') {
        alert("Add Something")
    } else {
        taskContainer.append(task)
    }


    // Task Marked Function
    checkButton.addEventListener("click", () => {
        checkButton.parentElement.style.textDecoration = "line-through"
    })


     // Task Delete Function
    deleteButton.addEventListener('click', function (e) {

        // Isolate the Target
        let target = e.target;

        // Use this method to avoid total deletion
        if (target.matches('button')) {
            target.parentElement.remove();
        }
        if (target.matches('i')) {
            target.parentElement.parentElement.remove();
        }
    });


    // Clear the Text from the input box
    inputTask.value = ""
})