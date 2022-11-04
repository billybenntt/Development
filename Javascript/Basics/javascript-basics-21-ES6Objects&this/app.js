// --------- ARROW FUNCTION SELECT ELEMENTS ---------

// Normal Function - Refers Parent, Left of Dot
// Arrow Function - Refers to its current surrounding Scope

const btn = document.getElementById('btn')
const bot = document.getElementById('bot')


/*This will point to window object*/

btn.addEventListener('click', function () {
  setTimeout(function () {
    console.log(this)
  }, 3000)
})


/*This will point to button */

bot.addEventListener('click', function () {
  setTimeout(() => {
    console.log(this)
  }, 3000)
})