
// Regular Function Can Be Hoisted
firstFunction();

// Regular Function
function firstFunction() {
    console.log("this is a regular function without parameters");
}

// Expression Function
const secondFunction = function () {
    console.log("this is a variable function without parameters");
};

// Arrow Function
const thirdFunction = () => {
    console.log("this is an arrow function without parameters");
}

// Arrow Function without Brackets
const fourthFunction = () =>   console.log("this is a arrow function without parameters and brackets");


// Variable and Arrow Functions Cannot be Hoisted
secondFunction();
thirdFunction();
fourthFunction();
