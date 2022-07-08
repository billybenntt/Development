
// Inventory Object
const inventory = {
    sunglasses: 1900, pants: 1088, bags: 1344,
}


const checkInventory = (order) => {
    // Pass Callback Inside
    return new Promise((resolve, reject) => {
        // Emulate Async
        setTimeout(() => {
            // Check if Every Item quantity is larger than the current Stock
            let inStock = order.every(item => inventory[item[0]] >= item[1])
            // Resolve or Reject Accordingly
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 10000)
    })
}


// Current Order Data
const order = [['sunglasses', 1], ['bags', 2]];



// Outcome Handling Functions
const handleSuccess = (successValue) => {
    console.log(successValue)
}

const handleFailure = (failValue) => {
    console.log(failValue)
}


// Test Outcome 
const orderProcess = checkInventory(order);

// See Outcome
const orderResult = orderProcess.then(handleSuccess, handleFailure)
console.log(orderResult)

