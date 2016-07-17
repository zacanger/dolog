const log = require('.')
doLog = true
const foo = bar => log(bar)
foo('hi')
log('hello')
doLog = false
log('node')
doLog = true
process.env.NODE_ENV = 'production'
log('bye')
