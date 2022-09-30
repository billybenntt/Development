# Menu Filter Project

This project goal is to render items dinamically, this will also include a filter functionality that is achieved with buttons, all the items will load upon loading the page as well as dynamically adding categories whenever the JSON data is changed

### Basic Steps

> - `HTML` Layout the Title, Filter Buttons and Menu Items Markup
> - `HTML` Inside the Menu Items Markup layout a single item, we will use this as a template for the remaining items.
> - `CSS` Once the single item has been completed. copy paste several times the same item to test the column layout, if good delete the items
> 
> **Dynamically Displaying Items**
> 
> - `JS` Create a Window envent listener to load the data upon DOM Loaded and create the DOM Manipulation function, the DOM manipulation function will render the items at any given time.
> - `JS` Inside the DOM manipulation function use the .map method to return a template of the single item with the values mapped into each field
> - `JS` Once the map array of elements has been created use the Array.join method to join all the elements into a single string.
> 
> **Filtering Items**
> 
> - `HTML` Once the buttons are in place ensure the markup has the `data-*`attribute
> - `JS` use `forEach` to attach event listener to all the buttons and listen for click event
> - `JS` Inside the iterative event listener, isolate the dataset from `event.currentTarget` and use this value to filter the dataset array and return a filetred array using the `Array.filter()` method
> - `JS` Call the DOM Manipulation function on the filtered array to render the fitlered items. 
> 
> **Dynamically Adding Categories** 
> 
> * a

### Functions

```js
document.querySelector()
// Get Data when page loads
window.addEventListener("DOMContentLoaded")
// Inside DOM Manipulation Function
Array.map(item => `<h1>${item.title}</h1>`)
// Filtering Functionality
itemCollection.forEach(item)
item.addEventListener("click", filter)
Array.filter()
event.currentTarget.dataset
// Inject HTML
Array.join("")
Parent.innerHTML
```
