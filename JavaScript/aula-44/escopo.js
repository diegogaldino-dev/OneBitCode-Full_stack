let pokemon = "Charmander"

function evoluir(){  
  pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

function avaliarNota(nota){
  if (nota > 60){
    var aprovado = true
    let situacao = "Aprovado"
  } else {
    var aprovado = false
    let situacao = "reprovado"
  }
  console.log(nota)
  console.log(aprovado)
  console.log(situacao)
}

avaliarNota(83)
avaliarNota(49)