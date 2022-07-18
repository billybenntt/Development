// Post Requests

const inputForm = document.getElementById("dataForm");
const baseUrl = "http://localhost:3000"
const endPoint = "/users"
const url = `${baseUrl}${endPoint}`


// Helper Function to Parse JSON
const captureJsonInput = (inputForm) => {
    const iterator = new FormData(inputForm);
    let emptyObject = {};
    iterator.forEach((key, value) => emptyObject[value] = key)
    return emptyObject
}


const makeCall = async (formData) => {
    try {
        // Request Configuration
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": formData.name,
                "email": formData.email,
                "phone": formData.phone
            })
        }
        // Send Request
        const response = await fetch(url, config);
        // Confirm Response
        if (response.ok) {
            const jsonResp = await response.json()
            console.log(jsonResp);
        }
    } catch (e) {
        console.log(e)
    }
}




inputForm.addEventListener("submit", (e) => {
    let formData = captureJsonInput(e.target)
    makeCall(formData).then(response => console.log(response));

    // e.preventDefault();

})





