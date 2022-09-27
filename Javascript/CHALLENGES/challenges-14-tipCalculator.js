const tipCalculator = (quality, totalCost) => {

    switch (quality) {
        case "bad":
            return totalCost * 0.05
        case "ok":
            return totalCost * 0.15
        case "good":
            return totalCost * 0.20
        case "excellent":
            return totalCost * 0.30
        default:
            return totalCost * 0.18
    }

}

console.log(tipCalculator('good', 100))
console.log(tipCalculator('ok', 100))
console.log(tipCalculator('excellent', 100))
console.log(tipCalculator('bad', 100))
