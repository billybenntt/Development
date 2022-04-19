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
  if (window.scrollY >= 15) {
    headerElement.classList.add("activated");
  } else {
    headerElement.classList.remove("activated");
  }
};

// Define function Trigger
window.addEventListener("scroll", scrollHeader);

// Open menu & search pop-up

const menuToggleIcon = selectElement("#menu-toggle-icon");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// Open/Close search form popup3
const formOpenBtn = selectElement("#search-icon");
const formCloseBtn = selectElement("#form-close-btn");
const seachFormContainer = selectElement("#search-form-container");

// -- Close the search form popup on ESC keypress
formOpenBtn.addEventListener("click", () => {
  seachFormContainer.classList.add("activated");
  console.log("ra");
});

formCloseBtn.addEventListener("click", () => {
  seachFormContainer.classList.remove("activated");
});

window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    seachFormContainer.classList.remove("activated");
  }
});

// Switch theme/add to local storage

const bodyElement = document.body;
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  bodyElement.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("light-theme");

  if (bodyElement.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});

// Swiper

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevtEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    700: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});
