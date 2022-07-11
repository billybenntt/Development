const url = "https://learnwebcode.github.io/json-example/animals-1.json"


// Establish a connection with and URL and sends and receive data

const ourRequest = new XMLHttpRequest();


// Receive Data


ourRequest.open('GET', url);

// What should Happen once the page is loaded


ourRequest.onload = () => {


    const animalData = JSON.parse(ourRequest.responseText);
    console.log(animalData[0].name)


}


// Send Request to Load the File

ourRequest.send()


let someButton =  document.getElementById("btn")

const eventLogger = (event) => {
    console.log(event)
}


someButton.addEventListener("click",eventLogger )


