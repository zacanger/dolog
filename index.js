function log () {
  if (doLog && process.env.NODE_ENV !== 'production' && console) {
    console.log(...arguments)
  }
}

module.exports = log
