// ----------  HELPER ARRAYS  ----------
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

// ----------  SELECT ITEMS  ----------
const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

// ----------  DATE VALUES  ----------
// Define date and object

let tempDate = new Date();
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

// Set 10 Days
let futureDate = new Date(tempYear, tempMonth, tempDay+10, 0, 0, 0)

// Extract Values using destructuring
const [year, hours, minutes, month, day] = [futureDate.getFullYear(), futureDate.getHours(),
  futureDate.getMinutes(), months[futureDate.getMonth()], weekdays[futureDate.getDay()]]

// ----------  DOM MANIPULATION  - COUNTDOWN FUNCTION----------

giveaway.innerText = `Giveaway Ends On ${day}, 24 ${month} ${year}, ${hours}:${minutes}am`


//  Function that adds padding to the current number
const formatValue = (item) => {
  return item < 10 ? item = `0${item}` : item
}

// Get Future Time
const futureTime = futureDate.getTime()

const getRemainingTime = () => {
  // Get Current Time
  const todayTime = new Date().getTime()
  // Get Time Difference
  let t = futureTime - todayTime
  // Get Single Units
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMin = 60 * 1000
  // Get Computed Values by using remainders
  let days = Math.floor(t / oneDay)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMin)
  let seconds = Math.floor((t % oneMin) / 1000)
  // Assign Values
  const timeValues = [days, hours, minutes, seconds]
  // Modify DOM with Values
  items.forEach((item, index) => {
    item.innerText = formatValue(timeValues[index])
  })
// Clear Interval if difference becomes negative and update DOM
  if (t < 0) {
    clearInterval(countDown)
    deadline.innerHTML = `<h4 class="expired">Sorry this Giveaway has expired</h4>`
  }

}

// ----------   AUTO REFRESH FUNCTION ----------

//  Execute the function every second
let countDown = setInterval(getRemainingTime, 1000)

// Call Function again to ensure clearInterval is applied
getRemainingTime()
