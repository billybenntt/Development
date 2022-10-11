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
let futureDate = new Date(2023, 9, 22, 11, 30, 0)
// Extract Values using destructuring
const [year, hours, minutes, month, day] = [futureDate.getFullYear(), futureDate.getHours(),
  futureDate.getMinutes(), months[futureDate.getMonth()], weekdays[futureDate.getDay()]]


// ----------  DOM MANIPULATION ----------

giveaway.innerText = `Giveaway Ends On ${day}, 24 ${month} ${year}, ${hours}:${minutes}am`

// Get Future Time
const futureTime = futureDate.getTime()

const getRemainingTime = () => {
  // Get Current Time
  const todayTime = new Date().getTime()
  // Get Time Difference
  const diffTime = futureTime - todayTime
}

getRemainingTime()

