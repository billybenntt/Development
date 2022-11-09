# Module Exports

* Named Export

* Default Export

### Default Exports (Method 1)

- Only one per file 

```javascript
const showPeople = (people) => {
  return people.map((item) => {
    const { name, job } = item
    return `<p>${name}-> <strong>${job}</strong></p>`
  }).join('')
}

/* Only 1 Export Per File */

export default showPeople
```

### Default Exports (Method 2)

- Only one per file 

```javascript
export default = (people) => {
  return people.map((item) => {
    const { name, job } = item
    return `<p>${name}-> <strong>${job}</strong></p>`
  }).join('')
}
```

### Default Imports

* You can name the export whatever you want

```js
// -------- IMPORT STUFF DEFAULT   ---------
import whatever from './utils/showPeople.js'

// -------- APPLY THE FUNCTIONALITY   ---------
btn.addEventListener('click', () => {
  container.innerHTML = whatever(people)
})'
```


