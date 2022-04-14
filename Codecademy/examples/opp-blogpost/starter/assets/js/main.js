// Grab elements

//  Check that element exist function
const selectElement = (selector) => {
  // Store the value whatever we pass in
  const element = document.querySelector(selector);
  // If Element Exists Return ELement
  if (element) return element;
  // Else Throw an error
  throw new Error(`Something went wrong, make sure ${selector} exists`);
};

//Nav styles on scroll

const scrollHeader = () => {
  // Select Heaader
  const headerElement = selectElement("#header");
  if (this.scrollY >= 15) {
    headerElement.classList.add("activated");
  } else {
    headerElement.classList.remove("activated");
  }
};

// Define function Trigger
window.addEventListener("scroll", scrollHeader);

// Open menu & search pop-up

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper
