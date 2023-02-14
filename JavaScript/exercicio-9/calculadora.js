function calcularAreaTriangulo(){
  const base = prompt("Informe a Base do Triangulo: ")
  const altura = prompt("Informe a altura do triangulo: ")
  return base + altura /2
}

function calcularAreaRetangulo(){
  const base = prompt("Informe a Base do Retangulo: ")
  const altura = prompt("Informe a altura do Retangulo: ")
  return base * altura
}

function calcularAreaQuadrado(){
  const lado = prompt("Informe o lado do quadrado: ")
  return lado * lado
}

function cacularAreaTrapezio(){
  const baseMaior = parseFloat (prompt("Informe a base maior do trapezio: "))
  const baseMenor = parseFloat (prompt("Informe a base menor do trapezio: "))
  const altura = prompt("Informe a altura do trapezio: ")
  return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo(){
  const raio = prompt("informe o raio do circulo: ")
  return(3.14 * raio * raio)
}

function exibirMenu(){
  return prompt(
    "Calculadora Geométrica\n" +
    "1. Calcular area do triangulo\n" +
    "2. Calcular area do retangulo\n" +
    "3. Calcular area do quadrado\n" +
    "4. Calcular area do trapezio\n" +
    "5. Calcular area do circulo\n" +
    "6. Sair\n"    
  )
}

function executar(){
  let opcao = ""

  do {
    opcao = exibirMenu()
    let resultado

    switch (opcao) {
      case "1":  
      resultado = calcularAreaTriangulo()
        break
      case "2":
        resultado = calcularAreaRetangulo()
        break
      case "3":
        resultado = calcularAreaQuadrado()
        break        
      case "4":
        resultado = cacularAreaTrapezio()
        break
      case "5":
        resultado = calcularAreaCirculo()
        break
      case "6":
        alert("saindo...")
        break
        default: 
        alert("opção invalida!!!")    
    }

    if(resultado){
      alert("Resultado: " + resultado)
    }
  } while (opcao !== "6")
}

executar()