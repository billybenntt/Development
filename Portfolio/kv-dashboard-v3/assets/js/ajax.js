const inputForm = document.getElementById("dataForm");

const baseUrl = "https://simple-books-api.glitch.me"
const endPoint = "/books?type=fiction"
const url = `${baseUrl}${endPoint}`
const initObject = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
}

const captureJsonInput = (inputForm) => {
    const iterator = new FormData(inputForm);
    let emptyObject = {};
    iterator.forEach((key, value) => emptyObject[value] = key)
    return emptyObject
}


const makeCall = async () => {

    const response = await fetch(baseUrl, initObject)

    console.log(response)


}


inputForm.addEventListener("submit", (e) => {

    let formData = captureJsonInput(e.target)

    makeCall();


    console.log(formData)

    e.preventDefault();

})