# Accordion Questions Project

This variant of accordion uses `display: block` and `display:none` to hide the content unlike the other variant that uses `height: 0` and `height: n` ,

The accordion effect is achieved by using idle and active states, active states are applies whenever one of the buttons is pressed, CSS implementation needs to be done first to visualize the effects, JS implementation is followed.

Event Delegation is usually applied on these cases, the question container is attached an event listener, the event is delegated to a child button that triggers the toggle styling on the parent element we must consider event bubbling 

Events [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture) by default. So the difference between the two is:

- `target` is the element that triggered the event (e.g., the user clicked on)
- `currentTarget` is the element that the event listener is attached to.

This method uses the Parents isolation Delegation method which uses selectors inside parent elements as an alternative to the standard traversing method.

### Basic Steps

> - `HTML` Create a questions container, the container needs to have a questions body and a response text, the response text will be the target item, it's recommended to use a `-` and `+` Icons for the triggers.
> 
> - `CSS` Prepare the toggle classes, by default the response text and the minus icon should be set to `display:none`
> 
> - `CSS` The active state of the class should cancel out the effects from the default `display:block` and the plus icon should be hidden with `display: inline`
> 
> - `JS` Apply `forEach` Parents Isolation Delegation method on the question container.

### Functions

## Accordion Functionality

The accordion functionality is implemented in two steps the implementation is as follows.

#### CSS Implementation

```css
// The following pattern should be used to 
// implement the toggle functionality

/* Idle State */
.question-text {
  display: block;
}
/* Active State*/
.show-text .question-text {
 display: none;
}
```

#### JS Implementation

**Parent Isolation Delegation Method**

We use a `forEach` to isolate all the parent elements, each parent element will have a single parameter that will act as its own instance, instead of using `document.querySelector` we using `element.querySelector` to isolate each element child element, on which we can apply the same event listener, which applies the toggle style to the parent element in this case

```js

// Select all the Parent Elements
questionCollection.forEach((question)=>{

    // Instead of using document we create an instance of a single toggle button
    const toggleBtn = question.querySelector(".question-btn");

    // For each toggle BTN we apply an event listener that styles the parent
    toggleBtn.addEventListener("click", ()=>{
        question.classList.toggle("show-text")
    })

})
```
