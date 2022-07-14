// Step 1

const url = "https://api.rebrandly.com/v1/account";

const initObject = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "apikey": "ac2b4dbc612b4a3d9057b3d402742d73"
    }
}


// Step 2 - Convert Response to JSON and Return a Promise
const convertToJson = (response) => {
    if (response.ok) {
        return response.json()
    }
    throw new Error("Not Found")
}

// Step 3 - Handle Error
const handleError = (networkError) => {
    console.log(networkError.message)
}


// Step 4 - Log Response
const logResponse = (jsonResponse) => {
    console.log(jsonResponse)
}


fetch(url, initObject).then(convertToJson, handleError).then(logResponse)



