const palavra = prompt(
  "informe uma palavra:"
)

let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--){
  palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida){
  alert(palavra + " é um palindromo!")
} else {
  alert(
    palavra + " não é um palindromo!\n\n" + 
    palavra + " !==" + palavraInvertida
  )
}