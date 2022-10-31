// ------------  CONSTRUCTOR FUNCTION ------------

function Counter (element, value) {

  /* Function Body includes all variables,bindings and event listeners */
  this.value = value
  this.resetBtn = element.querySelector('.reset')
  this.decreaseBtn = element.querySelector('.decrease')
  this.increaseBtn = element.querySelector('.increase')
  this.valueDOM = element.querySelector('.value')
  this.valueDOM.innerText = value

  /* Bind the current back to [Counter] Object and not the [DOM Element] button
  return function back to this.function   */
  this.increase = this.increase.bind(this)
  this.decrease = this.decrease.bind(this)
  this.reset = this.reset.bind(this)

  /* Attach Event Listeners */
  this.increaseBtn.addEventListener('click', this.increase)
  this.decreaseBtn.addEventListener('click', this.decrease)
  this.resetBtn.addEventListener('click', this.reset)

}

// ------------  PROTOTYPE FUNCTIONS ------------

/* Inject Increase function */
Counter.prototype.increase = function () {
  console.log(this)
  this.value++
  this.valueDOM.innerText = this.value
}
/* Inject Decrease function */
Counter.prototype.decrease = function () {
  console.log(this)
  this.value--
  this.valueDOM.innerText = this.value
}
/* Inject Reset function */
Counter.prototype.reset = function () {
  console.log(this)
  this.value = 0
  this.valueDOM.innerText = this.value
}

// ------------  HELPER  FUNCTIONS ------------

/* Function to Validate Elements */
function getElement (selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  } else {
    throw new Error(`${selection} is wrong`)
  }

}

// ------------ OBJECT INSTANCES  ------------

/* Instantiation Counter # 1 */
const firstCounter = new Counter(getElement('.first-counter'), 0)
/* Instantiation Counter # 2 */
const secondCounter = new Counter(getElement('.second-counter'), 300)
