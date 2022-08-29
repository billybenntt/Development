// Select Elements
const buttonOne = document.getElementById("button1");
const singleUser = document.getElementById("user");
const buttonTwo = document.getElementById("button2");
const manyUsers = document.getElementById("users");

// Event Handler Single User
const loadUser = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", "user.json", true);

    myRequest.onload = function () {
        if (this.status === 200) {
            const userData = JSON.parse(this.responseText);
            addSingleUser(userData);
        }
    }
    myRequest.send();
}

// Populate Data Single User
const addSingleUser = (userData) => {
    let output = '';
    output += `<ul><li>ID: ${userData.id}</li><li>Name: ${userData.name}</li><li>Email: ${userData.email}</li></ul>`
    singleUser.innerHTML = output;
}


// Event Handler Multiple Users
const loadUsers = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", "users.json", true);

    myRequest.onload = function () {
        if (this.status === 200) {
            const usersData = JSON.parse(this.responseText);
            console.log(usersData)
            addManyUsers(usersData);
        }
    }
    myRequest.send();
}

// Populate Data Many Users
const addManyUsers = (usersData) => {
    let output = '';
    for (let i = 0; i < usersData.length; i++) {
        output += '<ul>'
        output += `<li>ID: ${usersData[i].id}</li><li>Name: ${usersData[i].name}</li><li>Email: ${usersData[i].email}</li>`
        output += '</ul>'
    }
    manyUsers.innerHTML = output;
}


// Event Listener
buttonOne.addEventListener("click", loadUser)
buttonTwo.addEventListener("click", loadUsers)



