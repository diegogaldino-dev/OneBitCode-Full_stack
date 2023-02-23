import { label, br, input } from './functions.js'

console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
console.log(br())