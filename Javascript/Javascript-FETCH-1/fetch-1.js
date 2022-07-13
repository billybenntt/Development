// Target API
const url = "https://reqres.in/api/users";

// Init Object
const initObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
}

// Step 2 - Convert Response to JSON and Return a Promise
const convertToJson = (response) => {
    if (response.ok) {
        return response.json()
    }    throw new Error("Not Found")
}

// Step 3 - Log Response
const logResponse = (response) => {
    console.log(response)
}

// Step 4 - Handle Error
const logError = (reason) => {
    console.log(reason)
}

fetch(url, initObject).then(convertToJson).then(logResponse).catch(logError)

