// --------- SELECT ELEMENTS ---------

const toggleBtn = document.querySelector('.btn')
const articlesContainer = document.querySelector('.articles')

// --------- EVENT LISTENERS  ---------

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')

})

// --------- RENDER ITEMS  ---------

const articlesData = articles.map((item) => {

  /* Destructure Each Object */
  const { title, date, length, snippet } = item

  /* Use Moment JS to Format Date */
  const formatDate = moment(date).format("MMM Do, YYYY")

  /* Return Each Dressed Object */
  return `<article class="post">
                <h2>${title}</h2>
                <div class="post-info">
                    <span>${formatDate}</span>
                    <span>${length} Min Read</span>
                </div>
                <p>${snippet}</article>`
}).join('')

// --------- INJECT  ITEMS  ---------

/* Put Data inside Container */
articlesContainer.innerHTML = articlesData

