# Selected Tabs Project

This project implements a tabset and uses event bubbling to delegate events to a `element.target` and apply an active class to a set of tabs and content boxes. 

### Basic Steps

> - `HTML` Layout the buttons and content containers
> * `HTML` Add `data-id` to the buttons
> * `HTML` Add `#id` to the content boxes
> * `CSS`  Create `active` class for boxes and buttons and test it on a single item, then add the remaining content without the active class.
> * `JS` Select the Parent Container, buttons and content boxes
> * `JS` Using bubbling attach a general event listener to the parent container
> * `JS` Capture the id and iterate over the buttons and content articles boxes and add or remove the active class

### Functions

```js
document.querySelector()
document.querySelectorAll()
event.target()
event.target.dataset.id()
element.id()
item.classList.add()
item.classList.remove()
```
