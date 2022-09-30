// ------------------------ SELECT ELEMENTS ------------------------ //
const studentForm = document.getElementById("studentForm");
const nameInput = studentForm['name']
const ageInput = studentForm['age']
const rollInput = studentForm['roll']
const studentList = document.querySelectorAll(".students")[0]

// ------------------------ LOCAL STORAGE  ------------------------ //

// Hook Array To Local Storage
// if Local Storage is empty set to empty array
const students = JSON.parse(localStorage.getItem("students")) || []


// ------------------------ HELPER FUNCTION  ------------------------ //
const addStudent = (name, age, roll) => {
    // Push Object to Array of Objects
    students.push({name, age, roll})
    // Add New Array State to Local Storage
    localStorage.setItem("students", JSON.stringify(students))
    // Return Object
    return {age, name, roll}
}


// ------------------------ DOM MANIPULATION FUNCTION ------------------------//
const createStudentElement = ({name, age, roll}) => {
    //  Function Takes an Object using destructuring notation

    // Generate Elements Parent and Children
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h2");
    const studentAge = document.createElement("p");
    const studentRoll = document.createElement("p");

    // Fill Elements
    studentName.innerText = `Student Name: ${name}`
    studentAge.innerText = `Student Age: ${age}`
    studentRoll.innerText = `Student Roll: ${roll}`

    //Append Children Element (Multiple) .append
    studentDiv.append(studentName, studentAge, studentRoll);

    // Append Parent Element to Target Container (Single) .appendChild
    studentList.appendChild(studentDiv);

}

// ------------------------ EVENT LISTENER FUNCTION ------------------------//
studentForm.addEventListener("submit", (event) => {
    // Prevent Page from Refreshing
    event.preventDefault();

    // Add object to array with helper function and return object for DOM Manipulation function
    const newStudent = addStudent(nameInput.value, ageInput.value, rollInput.value);

    // Need elements need to be added, so we don't have to refresh the page
    createStudentElement(newStudent)

    // Clear the Fields
    nameInput.value = "";
    rollInput.value = "";
    ageInput.value = "";
})


// ------------------------ GENERATOR FUNCTION ------------------------//

// This Generates an existing list
// This will pass each element of the array of object to the DOM Manipulation function
students.forEach(createStudentElement)


// ------------------------ OTHER FUNCTIONS------------------------//
// Don't show container if the student array is empty
window.addEventListener("load", ()=>{
    studentList.style.display = students.length > 0 ? "flex" : "none";
})