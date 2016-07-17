`console.log` can get annoying. you could go through all your code and comment
it out. or you could just use this.

usage:

set `doLog` to `true` and `NODE_ENV` to anything that's not `production`

```javascript
const log = require('doLog')

doLog = true

log('hello')

function ex(ample){
  log(ample)
}

ex('stuff to be logged')

doLog = false

log('this will not be logged')

doLog = true

process.env.NODE_ENV = 'production'

log('this will also not be logged')
```

license: wtfpl
