
// Selectors and General Variables
let counterValue = 1
let btn = document.getElementById("btn");
let animalContainer = document.getElementById("animal-info");


// API Calling Function
const retrieveData = () => {
    const ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', "https://learnwebcode.github.io/json-example/animals-" + counterValue + ".json");
    ourRequest.onload = () => {
        const animalData = JSON.parse(ourRequest.responseText);
        renderHTML(animalData);
    }
    ourRequest.send()
    counterValue++;
    if (counterValue > 3) {
        btn.classList.add("hide-me");
    }
}

// Render HTMl Function
const renderHTML = (data) => {
    let htmlString = "";
    for (let i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + "is a " + data[i].species + " that likes to eat ";
        for (let j = 0; j < data[i].foods.likes.length; j++) {
            if (j === 0) {
                htmlString += data[i].foods.likes[j]
            } else {
                htmlString += " and " + data[i].foods.likes[j]
            }
        }
        htmlString += " and dislikes "
        for (let j = 0; j < data[i].foods.dislikes.length; j++) {
            if (j === 0) {
                htmlString += data[i].foods.dislikes[j]
            } else {
                htmlString += " and " + data[i].foods.dislikes[j]
            }
        }
        htmlString += "</p>"
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}


// Event Listener
btn.addEventListener("click", retrieveData)
