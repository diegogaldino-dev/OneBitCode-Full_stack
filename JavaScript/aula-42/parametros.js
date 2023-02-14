function dobro(x){
  alert("O drobo de "+ x + "e" + (x *2))

}

// dobro(5)
// dobro(7)

// dobro()

function dizerOla(nome = 'mundo'){
  alert("Olá, " + nome + "!")
}

// dizerOla("Diego")
// dizerOla()

function soma(a, b){
  alert("O resultado da soma é " + (a + b))
}

// soma(7, 6)

function criarUsuario(nome, email, senha ,tipo = 'admin'){
  const usuario = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(usuario)
}

function muitosParametros(nome, telefone, endereco, aniversario, email, senha){

}
function ObjetoComoParametro(usuario){
  usuario.nome
  usuario.email
}

muitosParametros('nome', 'telefone', 'endereco', 'aniversario', 'email', 'senha')


const dadosDoUsuario = {
  nome: '',
  telefone: '',
  email: '',
  senha: '',
  endereco: '',
  aniversario
}

ObjetoComoParametro(dadosDoUsuario)