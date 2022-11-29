# Array FROM

Used to iterate on each item from an array and apply a callback function to each item inside the array, this returns a transformed array.

### Parameters

- Takes an Array like element as first argument

- Takes a CB Function that will be executed on each item

### Example:

```javascript
const stringElement = 'abcdefghijklmnopqrstuvwxyz'

const result = Array.from(stringElement, item => item + item.toUpperCase()))


// result 

  'aA', 'bB', 'cC', 'dD', 'eE',
  'fF', 'gG', 'hH', 'iI', 'jJ',
  'kK', 'lL', 'mM', 'nN', 'oO',
  'pP', 'qQ', 'rR', 'sS', 'tT',
  'uU', 'vV', 'wW', 'xX', 'yY',
  'zZ'
```
