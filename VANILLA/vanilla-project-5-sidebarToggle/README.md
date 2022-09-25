# Sidebar Toggle

A **sidebar toggle** is a button that when pressed will make either a left or a right region of a appear or disappear. This makes it possible to create a sidebar that is hidden by default and can be shown by clicking the button.

### Basic Steps

> - `HTML`  Createa a toggle button
> 
> - `HTML`  Create the <aside> element and include a logo and close button
> 
> - `HTML` Create the links and additional elements inside the <aside>
> 
> - `CSS` on the sidebar class add the `transform: translate(-100%)` to hide the sidebar to the left
> 
> - `CSS` create a class that shows the sidebar again using `transform: translate(0)`
> 
> - `JS` Select Trigger and Target Elements.
> 
> - `JS` Implement Toggle Funcionality inside event listeners.

### Functions

```javascript
document.querySelector()
element.addEventListener("click")
// Long Method
element.classList.contains()
element.classList.remove()
element.classList.add()
// Short Method
element.classList.toggle()
```

### Toggle Functionality

> The code below goes inside the event listener.

```js
 // This functionality creates the toggle effect
  if (sidebar.classList.contains("show-sidebar")){
      sidebar.classList.remove("show-sidebar")
  }
  else {
       sidebar.classList.add("show-sidebar")
  }

 // The same outcome is attained if we do the following
  const toggleSidebar = () => {
    sideBar.classList.toggle("show-sidebar")
}
```
