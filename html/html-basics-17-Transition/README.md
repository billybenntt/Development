# CSS Transition

Transition is in charge of making state changes over time in an element it should be used with pseudo classes `:hover` or `:active`



### Transition Flow

1. Select Element.

2. Apply Static Styles.

3. Target `transition-property` of the static style.

4. Specify duration of transition



### Background Transition

```css
/* Initial State*/
.box {
    width: 150px;
    height: 150px;
    display: inline-block;
    margin: 10px;
    background-color: dodgerblue;
}

/* Static Style*/
.box:hover {
    background-color: crimson;
}

/* Target Static Property and Change Duration */
.box-3 {
    transition-property: background-color;
    transition-duration: 4s;
}


```

### Multiple Transitions

Change background and border radius in 3 seconds on hover after 2 second delay

```css
.box-1:hover {
    border-radius: 50%;
    background-color: crimson;
}

.box-1 {
    transition-property: border-radius, background-color;
    transition-duration: 3s;
    transition-delay: 2s;
}
```

### Transition Shorthand

change background color and border radius in 3 seconds after 5 seconds delay

```css
/* Descriptive Way */
.box-1 {
   transition: background-color 3s 5s, border-radius 3s 5s;;
}

/* Inclusive All Way Same Parameters*/
.box-1 {
    transition: all 3s 5s;
}
```

### Transition Timing Function

This controls how the transition takes place, below some basic functions but there are more

- ease:  slow start, fast, slow end

- linear: same speed start to end

- ease-in: slow start

- ease-out: slow end

- ease-in-out: slow start, fast, slow end
  
  ```css
  /* All Properties, Duration 3 Seconds, 
  ease-in-out timing and 200ms Delay*/
  
  .box-1 {
      transition: all 3s ease-in-out 200ms;
  }
  ```


