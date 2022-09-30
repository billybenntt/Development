# Modal Container

### Basic Steps

> - `HTML` Create the modal trigger button.
> 
> - `HTML` Modal requires an overlay that will cover the whole screen when the modal is opened, add this and the modal itself.
> 
> - `HTML` The overlay goes below the trigger container and needs to have a class of `visibility: hidden` and `z-index: -10` to make it invisible
> 
> - `CSS` After adding the styling to hide the modal create a class that shows the modal and cancels out the classes above `visibility: visible` and z-`z-index: -10`
> 
> - `HTML` Inside the modal remember to create button to close the modal
> 
> - `JS` Select the Target(Modal Overlay) and Trigger Elements(Close and Open)
> 
> - `JS` Apply Remove or Toggle classList functions inside Event Listeners
> 
> - `JS` Apply `keydown` event to Window to remove class

### Functions

```javascript
document.querySelector()
element.addEventListener("click")
element.classList.toggle()
element.classList.remove()
window.addEventListener("keydown")
e.key === "Escape"
```

### Toggle Functionality

> The code below goes inside the event listener.

```js
 // This functionality creates the toggle effect
  if (modalContainer.classList.contains("open-modal")){
      modalContainer.classList.remove("open-modal")
  }
  else {
       modalContainer.classList.add("open-modal")
  }

 // The same outcome is attained if we do the following
    modalContainer.classList.toggle("open-modal")
```
