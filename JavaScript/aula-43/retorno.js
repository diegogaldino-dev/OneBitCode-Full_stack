function calcularMedia(a, b){
  const media = (a+b) / 2
  return media
}

const resultado = calcularMedia(7,2)

console.log(resultado)

function CriarProduto(nome, preco){
  const produto = {
    nome,
    preco,
    estoque: 1
  }
  return produto
}

const notebook = CriarProduto("Notebook intel", 2500, )

console.log(notebook)

function areaRatangular(base, altura){
  return base * altura
}

console.log(areaRatangular(3,5))

