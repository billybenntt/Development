# React Project 9

## Birthday Reminder

This project implements basic React concepts such as initalizing state with an object to render a list of items that are mapped from a js file, as well as a button that changes the state of the object to an empty array.



### Basic Steps

> `JSX` Start with the static components from App.js 
> 
> `JSX` Initialize state on App.js with the data array of objects
> 
> `JSX` Inside the container put the child <List/> and pass the state as prop
> 
> `JSX` Inside the child container destructure the object with its name 
> 
> `JSX` Use the `Array.map` to dress up the incoming prop into a <Section><Section> element with all the datafields, ensure to create a single item before mapping everything to ensure it looks good.
> 
> `JSX` back on the parent attach an event listener `onclick()` to the button and pass a function to change the current state of the data array into an empty array.



### Relevant Functions



```jsx
React.useState(dataArrayObjects)
Array.map(item => <section>item<section>)
onClick()
 
```
