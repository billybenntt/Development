
// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


// Select Elements
const btn = document.getElementById("btn");
const color = document.getElementsByClassName("color")[0];


 let getRandomColor = () => {
    // Get A Randomly generated color
    const randomColor =`#${Math.floor(Math.random() * 16777215).toString(16)}`

    // Assign the color to the background and to the span
    document.body.style.backgroundColor = randomColor;
    color.innerText = randomColor.toUpperCase();
}



btn.addEventListener("click", getRandomColor)


