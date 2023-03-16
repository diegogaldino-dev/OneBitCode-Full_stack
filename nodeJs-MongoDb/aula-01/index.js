const monent = require('moment')

function sayMyName(name){
  console.log(name)
  console.log(monent().format('HH:mm'))

}

sayMyName('Diego Galdino')