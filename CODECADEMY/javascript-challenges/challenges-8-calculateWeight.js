const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
        case 'Mercury':
            return earthWeight * 0.378
        case 'Venus':
            return earthWeight * 0.907
        case 'Mars':
            return earthWeight * 0.377
        case 'Jupiter':
            return earthWeight * 2.36
        case 'Saturn':
            return earthWeight * 0.916
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }

}

const weight = calculateWeight(100, 'Jupiter');

console.log(weight)