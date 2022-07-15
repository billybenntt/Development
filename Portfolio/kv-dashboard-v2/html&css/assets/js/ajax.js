const targetBTN = document.getElementById("submitBtn")
const inputField = document.querySelectorAll("#data input")


const url = "https://simple-books-api.glitch.me/orders"
const init = {
    method: "POST",
    Headers: {
        "Content-Type": "application/json"
    }
}


const orderBook = async () => {

const request = await fetch(url, init)

    if (request.ok){

    }


}


const logValues = () => {
     console.log(inputField[0].value)
}


targetBTN.addEventListener("click", logValues)