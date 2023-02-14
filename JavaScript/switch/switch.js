const resultado = prompt("Escolha uma alternativa \nA \nB \nC")


const resultadoNumerico = parseFloat(resultado)



switch(resultadoNumerico){
  case 1:
    alert("O resultado é 'a'")
    break
  case 2:
    alert("O resultado e 'b'")
    break
  case 3:
    alert("O resultado é 'c'")
    break
    default:
      alert("Finalizando...")
}