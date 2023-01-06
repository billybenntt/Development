# CSS Animation

### Description

Animations allow more control over changes in elements over time just like transitions but with the key difference that transition can only control states from 0 ~ 100% and animation allows more control in betweeen 0% ~ 10%~ 20% ~100% or multiple states (keyframes)

### Define KeyFrames

```css
/* Define Animation named "move" */
@keyframes move {
    0% {
        transform: translateX(20px);
    }
    50% {
        transform: translateX(100px);
        background-color: deeppink;
    }

    75% {
        transform: translateX(300px);
        background-color: coral;
    }
    100% {
        transform: translateX(0px);
        background-color: dodgerblue;

    }
}
```

### Assign Animation

The animation should be assigned to the target element that will animate

```css
/* Longhand Notation */
.box-animation {
    animation-name: move;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

/*Shorthand notation */
.box-animation {
     animation: move 2s infinite;
}
```

### Animation Fill Mode

Allows the animation to go to the final state instead of returning to the original state, this is not recommended for infinite iterations.

#### Example:

The element will have an animation of opacity  and initial state of opacity 0 (invisible) and will play 2 times, and will gradually become visible at the completion of keyframes,  at the end of the second iteration the opacity will stay in 1 instead of 0 if we use `animation-fill-mode: forwards`  

```css
.box-animation-fill {
    background-color: mediumseagreen;
    animation: appear 5s 2;
    animation-fill-mode: forwards;
    opacity: 0;
}

@keyframes appear {
    0% {
        opacity: 0.1;
    }
    25% {
        opacity: 0.25;
    }
    50% {
        opacity: 0.50;
    }
    75% {
        opacity: 0.75;
    }
    100% {
        opacity: 1;
    }
}
```


