const checkAvailability = (itemName, distributorName) => {
    console.log(`Checking availability of ${itemName} at ${distributorName}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (restockSuccess()) {
                console.log(`${itemName} are in stock at ${distributorName}`)
                resolve(itemName);
            } else {
                reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
            }
        }, 1000);
    });
};


// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
    return (Math.random() > .2);
}


const onFulfill = (itemsArray) => {
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
    console.log(rejectionReason);
};

// Add Promise Result to Variables

const checkSunglasses = checkAvailability("sunglasses", 'Favorite Supply Co.');
const checkPants = checkAvailability("pants", 'Favorite Supply Co.');
const checkBags = checkAvailability("bags", 'Favorite Supply Co.');

// Add Promises into Array

const allThePromises = [checkSunglasses, checkPants, checkBags]

// Use All and Pass Then and Catch functions To Outcome

Promise.all(allThePromises).then(onFulfill).catch(onReject)