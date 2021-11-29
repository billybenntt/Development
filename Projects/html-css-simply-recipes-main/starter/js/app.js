const getElement = (selector) => {
  var element = document.querySelector(selector);
  if (element) return element;
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  );
};

const links = getElement(".nav-links");
const navBTN = getElement(".nav-btn");

navBTN.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const date = getElement("#date");
const currentYear = new Date().getFullYear()+2;

date.textContent = currentYear;
