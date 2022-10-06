# Scroll Project

This project implements 4 techniques mostly related to scroll behavior, and dynamic styling, the techniques are explained as follows: 

**Dynamic Date**

Instead of using a hardcoded date the page will use the date that is generated from the Javascript and will display the current year

**Dynamic Menu Items**

The navbar menu items will have a toggle functionality, the given toggle
container will adapt its size dynamically based on the number of items
contained in the menu.

**Scroll Styles**

The Navbar menu will alter its styles based on its vertical position in addition a button that sends the user back to the top of the page will be rendered.

**Scroll Responsive**

This technique replaces the conventional technique of jumping to sections using the default click behavior and ensures

<span style="color:yellow">****REWORK THIS PART***</span>

### Functions

```js
// Date Change
Date().getFullYear()
element.innerText
// Dynamic Link Menu
document.querySelector()
element.addEventListener("click")
element.getBoundingClientRect().height
element.style.height
// Scroll Styles
window.addEventListener("scroll")
window.scrollY
element.classList.remove()
element.classList.add()
// Scroll Responsive
element.getAttribute()
String.slice()
document.getElementById()
element.offsetTop
window.scrollTo({})
event.preventDefault()
document.querySelectorAll()
Elements.forEach()
```

### Glossary

- `Element.getBoundingClientRect()` method returns the size of an element and its position relative to the viewport. 

- `slice` extracts a section of a string without modifying original string  

- `offsetTop` - A Number, representing the top position of the element, in pixels
