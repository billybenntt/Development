const loginForm = document.getElementById("loginForm");
const baseUrl = "https://transport-fs1.st-fleetweb.com/employee.ashx";


// Helper Function to Parse JSON
const captureJsonInput = (inputForm) => {
    const iterator = new FormData(inputForm);
    let emptyObject = {};
    iterator.forEach((key, value) => emptyObject[value] = key)
    return emptyObject
}


const makeCall = async (formData) => {
    try {
        console.log("Username->", formData.username)
        console.log("Password->", formData.password)

        // Request Data
        const url = `${baseUrl}?cmd=login&username=${formData.username}&password=${formData.password}`

        console.log(url)
        // Send Request
        const response = await fetch(url);
        // Confirm Response
        if (response.ok) {
            const jsonResp = await response.json()
            console.log(jsonResp);
        }
    } catch (e) {
        console.log(e)
    }
}


loginForm.addEventListener("submit", (e) => {
    let formData = captureJsonInput(e.target)
    // console.log(formData)

    makeCall(formData);

    e.preventDefault();

})

