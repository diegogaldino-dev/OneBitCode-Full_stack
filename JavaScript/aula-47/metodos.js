let pessoa ={
  nome: "Diego",
  idade: 28,
  dizerOla(){
    console.log("Ola Mundo" + this.nome)
  }
}

console.log(pessoa)

pessoa.dizerOla()