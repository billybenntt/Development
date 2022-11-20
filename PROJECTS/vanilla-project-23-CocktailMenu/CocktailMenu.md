# Cocktail Menu

Function map detail and hierarchical relationship amongst functions

# 🔹Primary Functions

>  Functions that affect all the items in the main page

### App.js

Main function that runs upon loading the page and tied to `index.html` and renders items upon loading the main page.

1. RenderDrinks

2. SearchForm.js

### searchForm.js

Sibling of the `App.js` function and its function is to render items based on a search

1. RenderDrinks.js

2. getElement.js

### renderDrinks.js

Child function of `App.js` and `searchForm.js` to fetch and display data and set event listener on rendering section.

1. fetchData.js

2. displayDrinks.js

3. setDrinks.js

### displayDrinks.js

Child function of `renderDrinks.js` and manipulates the DOM directly.

1. getElement.js

2. toggleLoading.js -> (hide)

# 🔸 Secondary Functions

>  Functions that affect single Items and depend from items inside the main page

### singleDrink.js

Main function that runs upon loading the single item page and tied to `drink.html` and runs upon loading the page.

1. fetchData.js

2. displaySingleDrink

### displaySingleDrink.js

Child function of `singleDrink.js` and manipulates the DOM directly.

toggleLoading.js -> (hide)

getElement.js

# 💠 Utility Functions

>  Reusable functions that can be used by the primary and secondary functions

### fetchData.js

Reusable function that gets data from the `API` and returns all the data regarless of query.

1. toggleLoading.js -> (Show)

### toggleLoading.js

Reusable function that hides the container with class `loading` by applying the class `hide-loading` works in either type of function.

1. getElement.js

### setDrink.js

Reusable function used by the Primary functions that uses localStorage to set data related to a single item so the Secondary functions can refer to such item, this is the connection between the primary and secondary functions.

1. localStorage - (setItem)


