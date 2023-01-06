# Position

### Static

This is the normal position, default and always positioned according to the normal flow

### Relative

Position relative to it's normal position and we are able to use props `top`, `bottom`,`left`,`right` to move the element from it's normal position, `body`element is by default relative.

### Absolute

Position relative to the parent with `relative` position. We are able to use props `top`, `bottom`,`left`,`right` to move the element from the parent. 

if there are no closest ancestors with rrelative position it will be relative to the `body`

### Fixed

Position relative to viewport (Screen) and stays as we are scrolling 

### Sticky

Toggles between relative and fixed once the position is met in the viewport  then it sticks or becomes fixed requires at least one  props `top`, `bottom`,`left`,`right`
