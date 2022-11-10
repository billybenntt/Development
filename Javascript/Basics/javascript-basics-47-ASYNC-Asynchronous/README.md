# Asynchronous Javascript



These are browser provided functions not essentially JavaScript, the callback is handed to the browser,

```javascript
setTimeout();
setTimer();
fetch()
getGeolocation()
```



Callback gets handed over to the browser and executes in a minimun time, not exact time provided, if and if Javascript is busy, the execution time will be the minimum provided to the function, the max will include the time it took Javascript to complete the other tasks.

```javascript
  setTimeout(() => {
    console.log(`Done boiling ${time} Miliseconds`)
  }, time)
```


