# CSS Variables

Variables are also refered to as custom properties, allow to store values in one place and re-use them later in different parts of the document.

### Syntax - Declaration

##### Global Scope

can be used anywhere in the document

```css
:root {
    --bg-color-1: #dc143c;
    --bg-color-2: #1e90ff;
    --bg-color-0: #fff;
    --border-style-1: 1px solid black;
}

.box-3 {
    background-color: var(--bg-color-5);
    border-radius: var(--border-cicle);
}
```

##### Local Scope

Can only be used inside the declaration, or child classes

```css
div {
    --bg-color-special: #b3a33c;
    background-color: var(--bg-color-special);
}
```


