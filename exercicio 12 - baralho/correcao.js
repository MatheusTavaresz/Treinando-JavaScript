var cartas = ['Exódia',' Dragao Alado de Rá', ' Slaifer', ' Obelisco']

var opcao = prompt ('Escolha a opção desejada \n' + cartas + '\n' +
'1. Adicionar Carta \n' + 
'2. Puxar Carta \n' +
'3. Sair do jogo')


  switch (opcao) {
    case "1":
      const novaCarta = prompt ('Qual o seu nome? ')
      cartas.push(novaCarta)
      break
    case "2":
      const cartaPuxada = cartas.pop()  
      if(!cartaPuxada){
        alert('Não há nenhuma carta no baralho')
      } else {
        alert('VocÊ puxou um(a) ' + cartaPuxada)
      }
    case "3":
      alert ('Encerando')
      break
      default:
    alert ('Opção inválida')
  }while(opcao !== '3');