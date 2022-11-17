# AsyncAwait Functions

Async Await is considered syntax sugar as an alternative to chaining promises with `.then()` and `.catch()`,  `await`  can only be run inside a function with `async` keyword.

- Callbacks, Promises, Async/Await

- Must have Async

- Await waits till promise is setttled

- Error handling Try and Catch

#### Declaration

These functions also return a promise by default 

```javascript
// Regular Function

async function someFunction () {
  await addColor(heading1, 1000, 'red')
  await addColor(heading2, 1000, 'green')
  await addColor(heading3, 1000, 'blue')
}

// Arrow Function
const otheFunction = async () => {
  await addColor(heading1, 1000, 'red')
  await addColor(heading2, 1000, 'green')
  await addColor(heading3, 1000, 'blue')
}
```

#### Try and Catch

The try and catch is the alternative to chaining, if any of the await statements fails it will skip the remaining if any, and the error will be directed to the catch block where the rejected value should appear.

```javascript
btn.addEventListener('click', async () => {

  /* Chaining all promises with await */
  try {
    /* The Resolved Values will be handled  here */

    await addColor(heading1, 1000, 'red')
    await addColor(heading2, 2000, 'blue')
    await addColor(heading3, 1000, 'green')
  } catch (error) {

    /* The Reject Value will appear here */
    console.log(error)

  }

})
```
