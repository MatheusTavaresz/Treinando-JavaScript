

var saldo = parseInt(prompt('Digite seu saldo atual'))
let opcao = ""

do{
  opcao = prompt (
    'Saldo disponível: R$ ' + saldo +
    '\n1. Adicionar dinheiro' +
    '\n2. Retirar dinheiro' +
    '\n3. Sair'
  )

  switch(opcao) {
    case '1':
      saldo += parseInt(prompt("Informe o valor a ser adicionado"))
      break
    case '2':
      saldo -= parseInt(prompt("Informe o valor a ser removido"))
      break
    case '3':
        alert('Saindo')
        break  
      default:
        alert('Alerta inválida')
  }
}while (opcao !== '3')

