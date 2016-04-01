const log = require('.')

doLog = true

log('doLog is true right now\n')

function ex(ample){
  log(ample)
}

ex('testing from inside a function, here\n')

log('testing directly, here\n')

log('doLog is about to be false\n')

doLog = false

log('this is a pointless log lol\n')

