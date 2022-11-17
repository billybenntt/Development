import { getElement, getCollection } from './utils/getElement.js'
import { getData } from './utils/getData.js'
import { displayData } from './utils/displayData.js'

// ---------- DATA AND SELECT ELEMENTS ----------

const url = 'https://randomuser.me/api/'


const elements = {
  userImage: getElement('.user-image'),
  userTitle: getElement('.user-title'),
  userValue: getElement('.user-value'),
  randomButton: getElement('.btn'),
  userButtons: getCollection('.icon')
}

// ----------  TRIGGER FUNCTION  ----------

const showUser = async () => {
  /*Get User Data*/
  const person = await getData(url)
  /* Render DATA to DOM*/
  displayData(person, elements)
}


// ----------  EVENT LISTENERS  ----------

/*  Trigger upon Loading the Page*/
window.addEventListener('DOMContentLoaded', showUser)

/*  Trigger upon Loading Clicking Random Button*/
elements.randomButton.addEventListener('click', showUser)

