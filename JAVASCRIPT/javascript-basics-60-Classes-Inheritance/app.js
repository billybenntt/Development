// ------------- CLASS DECLARATION  -------------

class Car {
  constructor (name, year) {
    this.name = name
    this.year = year
  }

  /* Methods */
  displayName () {
    return this.name
  }

  displayManufacturingYear () {
    return this.year
  }
}

// ------------- OBJECT INSTANCE  -------------

toyotaCar = new Car('Toyota', 2022)

// ------------- METHOD CALLING  -------------

const displayBtn = document.querySelector('.btn')

displayBtn.addEventListener('click', () => {

  const container = document.querySelector('.container')
  const nameElement = document.createElement('p')
  nameElement.innerText = toyotaCar.displayName()
  const yearElement = document.createElement('p')
  yearElement.innerText = toyotaCar.displayManufacturingYear()
  container.appendChild(nameElement)
  container.appendChild(yearElement)
})


