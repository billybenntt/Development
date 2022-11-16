import { getElement, getCollection } from './utils/getElement.js'

// ---------- DATA AND SELECT ELEMENTS ----------

const url = 'https://randomuser.me/api/'
const userImage = getElement('.user-image')
const userTitle = getElement('.user-title')
const userName = getElement('.user-value')
const randomButton = getElement('.btn')
const userButtons = getCollection('.icon')

// ----------  UTILITY FUNCTION  ----------

const getData = async () => {
  const response = await fetch(url)
  /* Extract Object inside Array and Assign to Variable data */
  const { results: [data] } = await response.json()
  /* Destructure deep Levels of [data] Object into single variables */
  const {
    name: { first, last },
    picture: { large: image },
    location: { street: { name: streetName, number: streetNumber } },
    dob: { age },
    login: { password },
    phone,
    email
  } = data
  /* Adding Values Together */
  const fullName = `${first} ${last}`
  const address = `${streetNumber} ${streetName}`
  /* Pack new Object and Return */
  return { fullName, age, email, address, phone, image, password }
}

const showUser = (e) => {

  getData().then(data => console.log(data))

  console.log('Show Users')
  console.log(e)
}

// ----------  EVENT LISTENER  ----------
window.addEventListener('DOMContentLoaded', showUser)

randomButton.addEventListener('click', showUser)

