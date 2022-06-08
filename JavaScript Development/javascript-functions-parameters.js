// Function with Parameters
function sayThanks(name) {
    console.log(`Thank you for your purchase ${name}! We appreciate your business.`);
}

// Expression Function with Parameters
const sayThanks2 = function (name) {
    console.log(`Thank you for your purchase ${name}! We appreciate your business.`);
}

// Arrow Function with Parameters
const sayThanks3 = (name) => {
    console.log(`Thank you for your purchase ${name}! We appreciate your business.`);
}

// Arrow Compact Function with Parameters

const sayThanks4 = (name) => console.log(`Thank you for your purchase ${name}! We appreciate your business.`);


 // Regular Function
  function defaultParameter(name = "Stranger") {
     console.log(`Hello Mr. ${name}`)
 }

// Variable Function
const defaultParameter2 = function (name = "Stranger2") {
    console.log(`Hello Mr. ${name}`)
}

// Arrow Function
const defaultParameter3 = (name = "Stranger3") =>{
    console.log(`Hello Mr. ${name}`)
}

 // Arrow Compact Function
const  defaultParameter4 = (name = "Stranger4") => console.log(`Hello Mr. ${name}`);

sayThanks("Bill");
sayThanks2("red");
sayThanks3("blue");
sayThanks4("yellow");

 defaultParameter("Bill");
 defaultParameter();
 defaultParameter2("Bill");
 defaultParameter2();
 defaultParameter3("Bob");
 defaultParameter3();
 defaultParameter4();
 defaultParameter4("Pepe");




