// Select Elements

const myButton = document.getElementById("btn")
const myText = document.getElementById("text")


// Handler Function
const loadText = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.open("GET", "sample.txt", true);
    myRequest.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            myText.innerHTML = this.responseText

        } else if (this.status === 404) {
            myText.innerHTML = "Not Found"
        }
    }
    myRequest.send()
}


// Event Listener

myButton.addEventListener("click", loadText)