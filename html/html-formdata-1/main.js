// Event Listener on Submit


inputForm = document.getElementById("form-id")


const captureJsonInput = (inputForm) => {
    const iterator = new FormData(inputForm);
    let emptyObject = {};
    iterator.forEach((key, value) => emptyObject[value] = key)
    return emptyObject
}


const showValues = (inputForm) => {
    const iterator = new FormData(inputForm);
    iterator.forEach((key, value) => console.log(key,value))
}




inputForm.addEventListener("submit", (e) => {
    // Prevent the page from reloading when submitting the form

    showValues(inputForm)

    e.preventDefault()
})