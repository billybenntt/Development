
const displayData = (person, elements) => {

  const { userImage, userTitle, userValue, userButtons } = elements

  userImage.src = person.image
  userTitle.innerText = 'My name is'
  userValue.innerText = person.fullName
  /* Remove Active Class From All Buttons*/
  userButtons.forEach(button => button.classList.remove('active'))
  /* Apply Active Class to current button*/
  userButtons[0].classList.add('active')

  userButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const label = button.dataset.label
      userTitle.innerText = `My ${label === 'fullName' ? 'name' : label} is`
      userValue.innerText = person[label]
      /* Remove Active Class From All Buttons*/
      userButtons.forEach(button => button.classList.remove('active'))
      /* Apply Active Class to current button*/
      button.classList.add('active')
    })
  })
}


export {displayData}