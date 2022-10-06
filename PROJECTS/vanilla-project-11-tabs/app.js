// ---------- SELECT ELEMENTS ----------

const aboutContainer = document.querySelector('.about')
const btns = document.querySelectorAll('.tab-btn')
const articles = document.querySelectorAll('.content')

// ---------- EVENT LISTENER - BUBBLING  ----------

aboutContainer.addEventListener('click', (event) => {

  // Grab the clicked button
  const id = event.target.dataset.id

  // Check that ID exists
  if (id) {

    // Style the buttons
    btns.forEach(button => {
      // Remove the class from other elements that have it
      button.classList.remove('active')
      // add it only to the target
      event.target.classList.add('active')
    })

    // Style the Articles
    articles.forEach(article => {
      // If article ID matches the clicked id apply style
      if (article.id === id) {
        article.classList.add('active')
      } else {
        // Remove on the others
        article.classList.remove('active')
      }
    })

  }
})