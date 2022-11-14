// ------------- SELECT ITEMS AND DATA -------------
const url = './api/sample.txt'
const targetContainer = document.querySelector('.container')
const button = document.querySelector('.btn')

// ------------- HELPER FUNCTION -------------

const getData = () => {
  /* Stage 1 */
  const xhr = new XMLHttpRequest()
  /* Stage 2 */
  xhr.open('GET', url)
  /* Stage 3 */
  xhr.onreadystatechange = () => {

    /* Get Connection Data */
    let connection = {
      status: xhr.status,
      statusText: xhr.statusText,
      state: xhr.readyState,
      responseText: xhr.responseText
    }

    if (connection.status === 200 && connection.state === 4) {
      targetContainer.innerHTML = `<p>${connection.responseText}</p>`
    } else {
      console.log(connection)
    }

  }
  /* Stage 4 */
  xhr.send()
}

// ------------- EVENT LISTENERS -------------


button.addEventListener('click', () => {
  getData()
})
