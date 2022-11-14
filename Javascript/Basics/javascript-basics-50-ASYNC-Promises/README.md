# Promises

Alternatives to callback hells, they have three states 

### Promise Creation

Create the promise using the `new Promise()` constructor, and pass a callback function that accept two functions as parameters, `resolve` and `reject`, these return the value inside in case the promise is resolved

```javascript
  const promise = new Promise((resolve, reject) => {
    if (value) {
      resolve([1, 1, 1, 1, 1, 1, 1])
    } else {
      reject(['X', 'X', 'X', 'X', 'X', 'X'])
    }
  })
```

## Promises States

- Pending

- Resolved

- Rejected

## Pending State

The promise takes this state if nothing happens inside the code block, or hasn't been resolved yet, the message above is returned whenever we `console.log` the Promise Prototype

`Promise { <state>: "pending" }`

## Resolved State

the promise returns the value inside `resolve` if the state is "fulfilled" 

`Promise { <state>: "fulfilled", <value>: "this value is true" }`

the value can be accessed using `.then()` with a callback function and the value will be the value returned from the definition

```javascript
  promise.then((value) => {
    console.log('Promise Resolved')
    console.log(value)
  })
```

## Rejected State

`Promise { <state>: "rejected", <reason>: "This Value is False" }`

Promises with rejected state need to be handled using `catch`, this is chained at the end of the promise 

```javascript
.catch((value) => {
    console.log('Promise Rejected')
    console.log(value)
  })
```
