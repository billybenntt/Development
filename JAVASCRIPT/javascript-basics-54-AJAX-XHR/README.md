# AJAX - XHR Object

### Stages

- Create Object

- Open Request

- Process Data

- Send Request

### State Changes

These changes happen during the process data stage, these are visible with the `readyState` property from the `XHR` Object

> `0` Request not initialized
> `1` Server Connection Established
> `2` Request Received
> `3` Processing Request
> `4` Request Finished and Response is ready

### Create Object

```javascript
/* Initiate Object */
const xhr = new XMLHttpRequest()
```

### Open Request

```javascript
/* Request Data */
xhr.open("GET", url)
```

### Process Data

the `onreadystatechange` is typically the most used method, all these methods take a CB function

```javascript
//  readyState Changes 0, 1 and 4
xhr.onload = function () { }
//  readyState Changes 0, 1 , 2, 3 and 4
xhr.onreadystatechange = function () {}
//  Used for Loaders
xhr.onprogress = function () { }
//  Used for Errors
xhr.onerror = function () { }
```

### Send Data

```javascript
xhr.send()
```
