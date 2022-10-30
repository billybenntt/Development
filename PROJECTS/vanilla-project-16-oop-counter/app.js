// Constructor Function
function Counter (element, value) {
  this.counter = element
  this.value = value
  this.resetBtn = element.querySelector('.reset')
  this.decreaseBtn = element.querySelector('.decrease')
  this.increaseBtn = element.querySelector('.increase')
  this.valueDOM = element.querySelector('.value')
  this.valueDOM.innerText = value
}

// Add function to Proto
Counter.prototype.increase = function () {
  console.log(this)
  this.value++
  this.valueDOM.innerText = this.value
}

Counter.prototype.decrease = function () {
  console.log(this)
  this.value--
  this.valueDOM.innerText = this.value
}

Counter.prototype.reset = function () {
  console.log(this)
  this.value = 0
  this.valueDOM.innerText = this.value
}

// Select Element Function
function getElement (selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  } else {
    throw new Error(`${selection} is wrong`)
  }

}

// First Instance
const firstCounter = new Counter(getElement('.first-counter'), 0)
// Second Instance
const secondCounter = new Counter(getElement('.second-counter'), 300)



