
var cartas = ['Exódia',' Dragao Alado de Rá', ' Slaifer', ' Obelisco']

var opcoes = parseInt(prompt ('Escolha a opção desejada \n' + cartas + '\n' +
'1. Adicionar Carta \n' + 
'2. Puxar Carta \n' +
'3. Sair do jogo'))

do{
  if (opcoes == 1){
    let cartaAdicionada = prompt ('Qual carta você deseja adicionar')
    cartas.push(cartaAdicionada)
    alert("A carta adicionada foi " + cartaAdicionada)
  } else if  (opcoes == 2)  {
    let cartaEscolhida = prompt ('Qual carta você deseja puxar? ' + cartas)
    cartas.slice(cartaEscolhida)
    alert("A carta escolhida foi " + cartaEscolhida)
  }
}while(opcoes == 3)