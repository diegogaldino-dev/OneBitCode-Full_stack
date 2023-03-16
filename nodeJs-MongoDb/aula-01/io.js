const process = require('process')

process.stdin.on('data', (keyboard) => {
  process.stdout.write(`texto do usuario:${keyboard}`)
  process.exit()  
})