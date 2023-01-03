# CSS Transform

The transform property applies some type of transformation to the element, 

`translate()` translation along the X or Y Axis,  `rotate()` Rotation,  `skew()`Skewing and `scale()` Scaling



### Translate

Moves the element along the X or Y Axis, if using percentage it will move it in relation to the width of the element or absolute values such as pixels

```css
.box {
    width: 150px;
    height: 150px;
}
/* Move element 75px to the right */
.box-1 {
  transform: translateX(50%);
}
```



### Scale

Scale grows or shrinks an element in either X or Y Axis, or both

```css
.box-6 {
    margin: 100px;
    /* Make Element twice as big 300px*/
    transform: scale(2);
    background-color: lightseagreen;
}
```

### Rotate

Rotates the element in either direction X or Y, the rotate values requires a value in degrees.

```css
.box-7 {
    margin: 100px;
    background-color: crimson;
    transform: rotate(45deg);
}
```

### Skew

Distorts or skews the element in either direction X or Y, the skew values requires a value in degrees.

```css
.box-12 {
    transform: skew(120deg);
}
```
