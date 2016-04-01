module.exports = function log(){
  if (doLog && console) {
    console.log(...arguments)
  }
}

