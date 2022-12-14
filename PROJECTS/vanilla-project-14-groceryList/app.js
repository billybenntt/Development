// --------------- SELECT ITEMS ---------------------------------------------
const alertElement = document.querySelector('.alert')
/* Form Container*/
const form = document.querySelector('.grocery-form')
const groceryAdd = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const groceryContainer = document.querySelector('.grocery-container')

/*Target Container*/
const groceryList = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// --------------- EDIT OPTIONS ---------------------------------------------
let editElement = ''
let editFlag = false
let editID = ''

// --------------- FUNCTIONS FOR EVENT LISTENER -------------------------------

/* CLEAR ALL ITEMS */
function clearItems () {
  // Capture list
  let items = document.querySelectorAll('.grocery-item')
  // Check that there are items
  if (items.length > 0) {
    // Access each child parent container and remove it from there
    items.forEach(item => {
      groceryList.removeChild(item)
    })
  }
  // Hide the Grocery container
  groceryContainer.classList.remove('show-container')
  // Display alert
  displayAlert('Empty List', 'danger')
  // Set back to default
  setBackToDefault()
  // Clear Entire Local Storage
  localStorage.removeItem('list')
}

/* DELETE ITEMS */
function deleteItem (event) {
  // Capture Element
  const currentElement = event.currentTarget.parentElement.parentElement
  // Get Element ID
  const id = currentElement.dataset.id
  // Delete Element via the parent
  groceryList.removeChild(currentElement)
  // If No Items remove the class
  if (groceryList.children.length === 0) {
    groceryContainer.classList.remove('show-container')
  }
  // Display alert
  displayAlert('Item removed', 'danger')
  // Set back to default
  setBackToDefault()
  // Remove ID from Local Storage
  removeFromLocalStorage(id)

}

/* EDIT ITEMS */
function editItem (event) {
  // Select Clicked Element
  const currentElement = event.currentTarget.parentElement.parentElement
  // Select Edit Value Paragraph Item
  editElement = event.currentTarget.parentElement.previousElementSibling
  // Set form Value
  groceryAdd.value = editElement.innerHTML
  // Update Global Edit Flags (To Use Second Option)
  editFlag = true
  editID = currentElement.dataset.id
  // Change Button Text
  submitBtn.textContent = 'Edit'
}

/* ADD ITEMS*/
function addItem (event) {
  //Prevent Refresh
  event.preventDefault()
  // Capture Form Input
  const value = groceryAdd.value
  // Generate Unique Value
  const id = new Date().getTime().toString()

  // Adding New Item
  if (value !== '' && !editFlag) {

    createListItem(id, value)

    //  Display alert
    displayAlert('Item Added to the list', 'success')
    //  Show Container
    groceryContainer.classList.add('show-container')
    // Add to Local Storage
    addToLocalStorage(id, value)
    // Set Back to Default (Restore the List)
    setBackToDefault()

  } // Edit Item
  else if (value !== '' && editFlag) {
    editElement.innerHTML = value
    // Display Alert
    displayAlert('value changed', 'success')
    // Edit Item Data on Local Storage
    editLocalStorage(editID, value)
    // Set Back to Default (Restore the List)
    setBackToDefault()
  } else {
    displayAlert('Please enter value', 'danger')
  }

}

/* DISPLAY ALERTS */
function displayAlert (text, action) {
  alertElement.textContent = text
  alertElement.classList.add(`alert-${action}`)
  // Remove Alert after 2 Seconds
  setTimeout(() => {
    alertElement.textContent = ''
    alertElement.classList.remove(`alert-${action}`)
  }, 1000)
}

// --------------- EVENT LISTENERS ---------------------------------------------

form.addEventListener('submit', addItem)
clearBtn.addEventListener('click', clearItems)
window.addEventListener('DOMContentLoaded', setupItems)

// --------------- SET BACK TO DEFAULT  ------------------------------------------
function setBackToDefault () {
  groceryAdd.value = ''
  editFlag = false
  editID = ''
  submitBtn.innerText = 'Submit'
}

// --------------- LOCAL STORAGE -----------------------------------------------------

/* Add New Item to Local Storage */
function addToLocalStorage (id, value) {
  // Create Generic Object - Match Destructuring Notation {id:id, value:value}
  const grocery = { id, value }
  // Get Local Storage
  let items = getLocalStorage()
  // Add the newly created values to the temporary array,
  items.push(grocery)
  // Replace updated values into Local Storage / convert items into string
  localStorage.setItem('list', JSON.stringify(items))
}

/* Delete Given Item from Local Storage */
function removeFromLocalStorage (id) {
  // Get Local Storage
  let items = getLocalStorage()
  // Filter and return the items that are not the given id
  items = items.filter(item => {
    // Criteria -> Only Items that do not match id
    if (item.id !== id) {
      return item
    }
  })
  // Replace updated values into Local Storage / convert items into string
  localStorage.setItem('list', JSON.stringify(items))

}

function editLocalStorage (editId, newValue) {
  // Get Local Storage
  let items = getLocalStorage()
  // Return a copy of the array
  items = items.map(item => {
    // Criteria -> If Item Matches replace it, either case return item per iteration
    if (item.id === editId) {
      item.value = newValue
    }
    return item
  })
  // Replace updated values into Local Storage / convert items into string
  localStorage.setItem('list', JSON.stringify(items))
}

/* FETCH LOCAL STORAGE HELPER */
function getLocalStorage () {
  // Check that Storage is empty or not
  let checkStorage = localStorage.getItem('list')
  // Return all values from local storage, else assign empty array (first time)
  return checkStorage ? JSON.parse(checkStorage) : []
}

// --------------- SETUP ITEMS -----------------------------------------------------

function setupItems () {
  let items = getLocalStorage()
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value)
    })
  }
  groceryContainer.classList.add('show-container')
}

function createListItem (id, value) {
  // Create new <article> element
  const element = document.createElement('article')
  //  Add class to it
  element.classList.add('grocery-item')
  // Add data-id Attribute
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

  // Select Dynamically Created Elements (Buttons exist after this point)
  const collectionDelete = document.querySelectorAll('.delete-btn')
  const collectionEdit = document.querySelectorAll('.edit-btn')

  // Attach Event Listeners to each item in the list
  collectionDelete.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', deleteItem)
  })
  collectionEdit.forEach(editBtn => {
    editBtn.addEventListener('click', editItem)
  })

}