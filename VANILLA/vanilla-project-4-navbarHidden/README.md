# Navbar Toggle

This type of navbar has a submenu that is displayed in full when the toggle button is pressed, the same submenu is hidden when the toggle button is pressed again, media queries are also involved as the toggle button must be hidden on bigger screens, the submenu is shown in larger screens.

### Basic Steps

> - `HTML` Add the logo and the toggle button 
> 
> - `CSS` the toggle button is hidden on bigger screens and shown when media query is mobile size.
> 
> - `HTML` should have a links container, you need to get the height.
> 
> - `CSS` Use the height to create a toggle class with REM
> 
> - `CSS`  The links container *MUST* use `height:auto` when applying toggle class on bigger screen.
> 
> - `CSS` Hide or show elements depending on the media query size and wether you are implemeting mobile first design
> 
> - `JS` Select the target and trigger elements
> 
> - `JS` Implement the toggle functionality with the description below

### Functions

```javascript
document.getElementById()
element.addEventListener("click")
// Long Method
element.classList.contains()
element.classList.remove()
element.classList.add()
// Short Method
element.classList.toggle()
```

### Toggle Funcionality

> The code below goes inside the event listener.

```js
 // This functionality creates the toggle effect
  if (links.classList.contains("show-links")){
      links.classList.remove("show-links")
  }
  else {
       links.classList.add("show-links")
  }

 // The same outcome is attained if we do the following
    links.classList.toggle("show-links")e
```
