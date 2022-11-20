
/* Function to Set ID Into LocalStorage*/
const setDrink = (section) => {

  section.addEventListener('click', (e) => {
      /* Get ID Attribute*/
      const id = e.target.parentNode.dataset.id
      localStorage.setItem('drink', id)
    }
  )
}

export default setDrink