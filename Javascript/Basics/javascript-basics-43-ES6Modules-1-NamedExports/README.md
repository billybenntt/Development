# Module Exports

* Named Export

* Default Export

#### Named Export

```javascript
export const random = 'random value'
export const people = {data: "111"}
```

#### Named Import

The file needs to include the extension

```javascript
import { random, people } from './utils/data.js'
```

The script needs to notify that accepts imports

```html
<script src="app.js" type="module" ></script>
```


