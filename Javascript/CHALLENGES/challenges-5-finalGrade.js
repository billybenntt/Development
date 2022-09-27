// Write your function here:

const finalGrade = (grade1, grade2, grade3) => {

    // Check that every value is greater than 0 and less than 100
    let isValid = (grade1 > 0 && grade1 <= 100) && (grade2 > 0 && grade2 <= 100) && (grade3 > 0 && grade3 <= 100);
    // Compute the Average or Show the Invalid Input
    let result = isValid ? (grade1 + grade2 + grade3) / 3 : "You have entered an invalid grade."

    // Return Result
    if (result > 0 && result <= 59) {
        return "F"
    } else if (result > 59 && result <= 69) {
        return "D"
    } else if (result > 69 && result <= 79) {
        return "C"
    } else if (result > 79 && result <= 89) {
        return "B"
    } else if (result > 89 && result <= 100) {
        return "A"
    } else {
        return result
    }

}


// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 101, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!