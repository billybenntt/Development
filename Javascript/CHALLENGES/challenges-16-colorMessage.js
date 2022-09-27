const colorMessage = (favoriteColor, shirtColor) => {
    return favoriteColor === shirtColor ? "The shirt is your favorite color!" : "That is a nice color.";
}


console.log(colorMessage("red","blue"))
console.log(colorMessage("red","red"))