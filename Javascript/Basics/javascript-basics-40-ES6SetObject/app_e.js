// --------- ES6: SET OBJECT USE CASE  ---------
// Replacement to Reduce Method

const products = [
  {
    title: 'High Back Bench',
    company: 'IKEA'
  },
  {
    title: 'Albany Table',
    company: 'Marcos'
  },
  {
    title: 'Accent Chair',
    company: 'Caress'
  },
  {
    title: 'Wooden Table',
    company: 'IKEA'
  }

]

// --------- ES6: SET GET UNIQUE VALUES LONG METHOD ---------


/* Extract all the values */
const companies = products.map((item) => {
  return item.company
})
console.log(companies)

/* Create Set with Unique values */
const uniqueCompanies = new Set(companies)
console.log(uniqueCompanies)

/*Convert back to Array using Spread Method */
const finalCompanies = ['All', ...uniqueCompanies]
console.log(finalCompanies)

// --------- ES6: SET GET UNIQUE VALUES SHORT METHOD ---------

/*One liner Result */
const result = ['All',...new Set(products.map(item => item.company))]
console.log(result)