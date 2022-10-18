// --------------- SELECT ITEMS ---------------
const alertElement = document.querySelector('.alert')
/* Form Container*/
const form = document.querySelector('.grocery-form')
const groceryAdd = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const groceryContainer = document.querySelector('.grocery-container')

/*Target Container*/
const groceryList = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// --------------- EDIT OPTIONS---------------
let editElement
let editFlag = false
let editID = ''

// --------------- FUNCTIONS FOR EVENT LISTENER ---------------

/* CLEAR ITEMS */
const clearItems = () => {
  // Capture list
  const items = document.querySelectorAll('.grocery-item')

  // Check that there are items
  if (items.length > 0) {
    // Access each child parent container and remove it from there
    items.forEach(item => {
      groceryList.removeChild(item)
    })

  }
  // Hide the grocery container
  groceryContainer.classList.remove('show-container')

  // Display alert
  displayAlert('Empty List', 'danger')

//   Set back to default
//   setBackToDefault()
//   Clear Entire Local Storage
//   localStorage.removeItem("list")
}

/* ADD ITEM S*/
const addItem = (event) => {
  //Prevent Refresh
  event.preventDefault()

  // Capture Form Input
  const value = groceryAdd.value
  const id = new Date().getTime().toString()

  // Adding New Item
  if (value && !editFlag) {
    // Create new element
    const element = document.createElement('article')
    //  Add Class
    element.classList.add('grocery-item')
    // Add ID Attribute
    const attr = document.createAttribute('data-id')
    // Assign Unique value
    attr.value = id
    element.setAttributeNode(attr)
    // Fill the Element generic content
    element.innerHTML = `<p class="title">${value}</p>
                    <div class="btn-container">
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                     </div>`
    // Append Child
    groceryList.appendChild(element)
    //  Display alert
    displayAlert('Item Added to the list', 'success')
    //  Show Container
    groceryContainer.classList.add('show-container')
    // Add to Local Storage
    addToLocalStorage(id, value)
    // Set Back to Default (Restore the List)
    setBackToDefault(id, value)

  } else if (value && editFlag) {
    console.log('Editing')

  } else {
    displayAlert('Please enter value', 'danger')
  }

}

/* DISPLAY ALERTS */
const displayAlert = (text, action) => {
  alertElement.textContent = text
  alertElement.classList.add(`alert-${action}`)
  // Remove Alert after 2 Seconds
  setTimeout(() => {
    alertElement.textContent = ''
    alertElement.classList.remove(`alert-${action}`)
  }, 2000)
}

// --------------- EVENT LISTENERS---------------

form.addEventListener('submit', addItem)
clearBtn.addEventListener('click', clearItems)




// --------------- SET BACK TO DEFAULT  --------------

const setBackToDefault = (id, value) => {
  groceryAdd.value = ''
  editFlag = false
  editID = ''
  submitBtn.innerText = 'Submit'
  console.log('Set back to default')
}
// --------------- LOCAL STORAGE --------------

const addToLocalStorage = (id, value) => {
  console.log('Added to local storage')
}

// --------------- SETUP ITEMS ---------------
