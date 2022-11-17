const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']

// -------- SELECT ELEMENTS  --------

const btn = document.getElementById('btn')
const color = document.getElementsByClassName('color')[0]

// -------- UTILITY FUNCTIONS  --------

const getFixedColor = (e) => {
  console.log(e)
  // Change the Background Color Style
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
  // Change Inner Text Content from Span
  color.innerText = colors[Math.floor(Math.random() * colors.length)]
}

const getRandomColor = () => {
  // Get A Randomly generated color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`

  // Assign the color to the background and to the span
  document.body.style.backgroundColor = randomColor
  color.innerText = randomColor.toUpperCase()
}

// -------- EVENT LISTENER --------

btn.addEventListener('click', getFixedColor)


