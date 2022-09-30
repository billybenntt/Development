// Write your function here:


const lifePhase = (age) => {

    // for Range Base condition use true
    switch (true) {
        // 0-3 should return 'baby'
        case(age >= 0 && age < 4):
            return "baby";
        //  4-12 should return 'child'
        case(age >= 4 && age < 13):
            return "child";
        //    13-19 should return 'teen'
        case(age >= 13 && age < 20):
            return "teen";
        //    20-64 should return 'adult'
        case(age >= 20 && age < 65):
            return "adult";
        //    65-140 should return 'senior citizen'
        case(age >= 65 && age <= 140):
            return "senior citizen";
        default:
            return "This is not a valid age"
    }


}


// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(-1)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!