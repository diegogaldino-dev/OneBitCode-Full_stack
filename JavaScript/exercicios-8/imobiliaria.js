const imoveis = []

let opcao = ""

do {
  opcao = prompt(
    "Bem-vindo(a) ao Cadastro de Imóveis!\n" +
    "Total de Imóveis: " + imoveis.length + 
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
    )

    switch(opcao){
      case "1":
        const imovel = {}
        imovel.proprietario = prompt("Informe o nome do proprietario do imovel:")
        imovel.quartos = prompt("Quantos quartos possui o imovel?")
        imovel.banheiros = prompt("Quantos banheiros possuem o imovel?")
        imovel.garagem = prompt("O imovel possui garagem? (Sim/Não)")
        
        const confirmacao = confirm(
          "Salvar esse imovel?\n"+
          "\nProprietario: " + imovel.proprietario + 
          "\nQuartos: " + imovel.quartos +
          "\nBanheiros: " + imovel.banheiros + 
          "\nPossui garagem?" + imovel.garagem
        )

        if(confirmacao){
          imoveis.push(imovel)
          alert("Imovel salvo com sucesso!")
        } else {
          alert("Voltando ao menu.")
        }
        break

      case "2":
        for(let i = 0; i < imoveis.length; i++){
          alert(
            "Imovel " + (i + 1) + 
            "\nProprietario: " + imoveis[i].proprietario +
            "\nQuartos: " + imoveis[i].quartos +
            "\nBanheiros: " + imoveis[i].banheiros + 
            "\nPossui garagem? " + imoveis[i].garagem
          )
        }
        break
      case "3":
        alert("Encerando....")
        break
        default:
          alert("Opção invalida!!!")
    }
} while (opcao !== "3")