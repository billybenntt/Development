//setup date
const date = document.getElementById('date');
if (date) {
  date.innerText = new Date().getFullYear();
}


// -------------- SELECT ELEMENTS --------------
const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');



// -------------- EVENT LISTENERS  --------------

/* Show Navbar  */
if (navBtn) {
  navBtn.addEventListener('click', () => {
    navbar.classList.add('show');
  });
}

/* Hide  Navbar  */
if (navClose) {
  navClose.addEventListener('click', () => {
    navbar.classList.remove('show');
  });
}
