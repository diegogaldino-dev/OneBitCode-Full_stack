const arr = [
  "Frodo",
  "Sam",
  "Marry",
  "Pippin",
  "Gandalf",
  "Aragon",
  "Legolas",
  "Gimli"
]

console.log(arr)

//adicionar elementos
// push
arr.push("Boromir") 
console.log(arr)

// unshift
arr.unshift("teste")
console.log(arr)

//remover Elementos
//pop

let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//pesquisar por um elemento
//incluir

const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

//cortar e concatenar
//slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)

console.log(arr)
console.log(hobbits)
console.log(outros)

//concat
const sociedade = hobbits.concat(outros, "Diego", "Boromir")
console.log(sociedade)

//Substituição dos Elementos
// splice

const elementoRemovidos = sociedade.splice(indice, 1, 'Gandalf, o cinzento')
console.log(sociedade)
console.log(elementoRemovidos)

// iterar sobre os elementos

for (
  let indice = 0;
  indice < sociedade.length;
  indice++
  ){
    const elemento = sociedade[indice]
    console.log(elemento + "se encontra na posição " + indice)
  }