import { getElement, getCollection } from './utils/getElement.js'
import { getData } from './utils/getData.js'

// ---------- DATA AND SELECT ELEMENTS ----------

const url = 'https://randomuser.me/api/'
const userImage = getElement('.user-image')
const userTitle = getElement('.user-title')
const userValue = getElement('.user-value')
const randomButton = getElement('.btn')
const userButtons = getCollection('.icon')

// ----------  UTILITY FUNCTION  ----------

const displayUser = (person) => {
  userImage.src = person.image
  userTitle.innerText = 'My Name is'
  userValue.innerText = person.fullName
  userButtons[0].classList.add('active')

  userButtons.forEach((button) => {

    button.addEventListener('click', () => {
      const label = button.dataset.label
      userTitle.innerText = `My ${label} is`
      userValue.innerText = person[label]
      /* Remove Active Class From All Buttons*/
      userButtons.forEach(button => button.classList.remove('active'))
      /* Apply Active Class to current button*/
      button.classList.add('active')
    })
  })
}

const showUser = async () => {
  const person = await getData(url)
  displayUser(person)
}

// ----------  EVENT LISTENER  ----------
window.addEventListener('DOMContentLoaded', showUser)

randomButton.addEventListener('click', showUser)

