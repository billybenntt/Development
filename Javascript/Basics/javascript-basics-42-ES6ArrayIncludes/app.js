// --------- ES6: ARRAY INCLUDES METHOD  ---------
// Useful in conditional Statements

const groceries = ['Milk', 'Bread', 'Meat']


/* Check if Item Exists Inside Array*/
console.log(groceries.includes("Milk"))

/* Check if Item Exists Inside Array (Case Sensitive Test)*/
console.log(groceries.includes("milk"))

/* Check if Item Exists Inside Array*/
console.log(groceries.includes("Lemon"))

/* Check if Item Exists after position 2*/
console.log(groceries.includes("Milk",2))

/* Check if Item Exists after position 2*/
console.log(groceries.includes("Meat",2))