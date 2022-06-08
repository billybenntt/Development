
// Regular Function
function rectangleArea(width, height) {
    return width * height;
}

// Variable Function
const rectangleArea2 = function (width, height){
    return width * height;
}

// Arrow Function
const rectangleArea3 = (width, height) => {
    return width * height + 1;
}

// Arrow Compact Function - No Return Key Needed
const rectangleArea4 = (width, height) =>   width * height +5;


console.log(rectangleArea(5, 7)) // Prints 35
console.log(rectangleArea2(5, 7)) // Prints 35
console.log(rectangleArea3(5, 7)) // Prints 36
console.log(rectangleArea4(5, 7)) // Prints 40