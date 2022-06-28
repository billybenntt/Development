const numbers = [5, 3, 9, 30];


const smallestPowerOfTwo = arr => {
    let results = [];
    let power = 0;
    for (let i = 0; i < arr.length; i++) {

        // Initialize Power for every Iteration
        power = 1;

        // Condition While Power is less than current element keep iterating
        while (power < arr[i]){
            // Condition Changer
            power *= 2;
        }
        // Store the last Element
        results.push(power)
    }
    return results
}

// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

console.log(smallestPowerOfTwo(numbers))


