const imoveis = []
let opcao = ""

do{
  opcao = prompt ('Bem vindo ao Cadastro de Imóveis! \n' +
  'Total de imóveis: ' + imoveis.length + '\n\n Escolha uma opção \n1. Novo imóvel \n2. Lista imóveis \n 3.Sair')

  switch (opcao){
    case "1":
      const imovel = {}
      imovel.proprietário = prompt('Informe o nome do proprietário do imóvel: ')
      imovel.quartos = prompt ('Quantos quartos possui o imóvel? ')
      imovel.banheiros = prompt ('Quantos banheiros o imóvel tem? ')
      imovel.garagem = prompt ('O imóvel possui garagem? ')

      const confirmation = confirm('Salvar este imóvel? \n' +  '\nProprietário:' + imovel.proprietário + 
      '\nQuarto: ' + imovel.quartos + '\nBanheiros: ' + imovel.banheiros + '\nPossui garagem? ' + imovel.garagem)
        
      if(confirmation) {
          imoveis.push (imovel)
          alert ('Imóvel salvo com sucesso! ')
        } else {
          alert ('Voltando para o menu ')
        }

      break

    case "2":
      for (let i = 0; i < imoveis.length; i++){
        alert (
          "Imóvel " + (i+1) + 
          "\nProprietário: " + imoveis[i].proprietário + '\nQuartos: ' + imoveis[i].proprietário +
          '\nBanheiros: ' + imoveis[i].banheiros + "\nGaragem: " + imoveis[i].garagem
          )
      }
    case "3":
      alert('Encerrando')
      break
    default: 
      alert('Opção Inválida')
  }
} while (opcao !== '3')