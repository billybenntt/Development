// Grab elements

const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Something went wrong! ${selector} ain't real bro`);
};

//Nav styles on scroll

// Open menu & search pop-up

const menuToggleIcon = selectElement("#menu-toggle-icon");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// Open/Close search form popup

const formOpenBtn = selectElement("#open-menu-icon");
const formCloseBtn = selectElement("#close-menu-btn");
const searchContainer = selectElement("#search-form-container");

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper
