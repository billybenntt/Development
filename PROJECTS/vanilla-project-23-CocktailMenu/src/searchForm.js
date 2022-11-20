import getElement from './getElement.js'
import renderDrinks from './renderDrinks.js'

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const form = getElement('.search-form')
const input = getElement('[name=drink]')

form.addEventListener('keyup', (event) => {
  event.preventDefault()
  const value = input.value

  if (!value) return
  renderDrinks(`${baseUrl}${value}`).then()

})