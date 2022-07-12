let hasSoap = false;

// Initiator Function
const washTheDishes = (soapCheck) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Washing Dishes")
            if (soapCheck) {
                let oneOrZero = (Math.random() >= 0.5) ? 1 : 0;
                resolve(oneOrZero)
            } else {
                reject("Dishes are Dirty, No Soap")
            }
        }, 5000)
    })
}


// Second Promise Function
const dryTheDishes = (cleanDishes) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cleanDishes) {
                resolve("Dry Dishes")
            } else {
                reject("Wet Dishes")
            }
        }, 5000)
    })
}


// Catch Function
const handleFailure = (someReason) => {
    console.log("Process Interrupted");
    console.log(someReason);
}


// Promise Chaining

async function doTheDishes() {
    try {
        const washedDishes = await washTheDishes(hasSoap);
        console.log(washedDishes);
        const driedDishes = await dryTheDishes(washedDishes);
        console.log(driedDishes)
    } catch (e) {
        handleFailure(e)
    }
}

doTheDishes();