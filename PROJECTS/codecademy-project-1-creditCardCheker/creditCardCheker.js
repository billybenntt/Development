// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5,
  mystery1, mystery2, mystery3, mystery4, mystery5]

// Validate Card
const validateCred = (num) => {
  // Reverse the Array
  let arr = num.reverse()
  // Get the Last Digit and change initial array
  let lastDigit = arr.splice(0, 1)[0]
  // Get The SUM of Remaining Items
  let sum = arr.reduce((acc, val, i) => {
    if (i % 2 !== 0) {
      return acc + val
    } else {
      // if DoubleValue > 9 Subtract 9 else return same value
      let numberCheck = (val * 2) > 9 ? (val * 2) - 9 : (val * 2)
      // Add to Accumulator
      return acc + numberCheck
    }
  }, 0)
  // Add Last Digit Back
  sum += lastDigit
  // Perform Check
  return sum % 10 === 0
}

// Get Array of Invalid Cards
const findInvalidCards = (collection) => {
  return collection.filter(item => {
    if (!validateCred(item)) {
      return item.reverse()
    }
  })
}

const getCompanyName = (card) => {
  // Get Card First Digit
  const firstDigit = card[0]
  // Return String Accordingly
  switch (firstDigit) {
    case 3:
      return 'amex'
    case 4:
      return 'visa'
    case 5:
      return 'mastercard'
    case 6:
      return 'discover'
    default:
      return 'invalid'
  }
}

// Get list of Invalid Cards
const invalidCards = findInvalidCards(batch)

const idInvalidCardCompanies = (invalidCards) => {
  // Get All the Values
  const fullArray = invalidCards.map(getCompanyName)
  // Get Unique Values
  return fullArray.reduce((accumulator, currentItem) => {
    if (!accumulator.includes(currentItem)) {
      accumulator.push(currentItem)
    }
    return accumulator
  }, [])

}

// Final Result
console.log(idInvalidCardCompanies(invalidCards))