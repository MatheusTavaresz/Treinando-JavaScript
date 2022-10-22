
do{
  var opcoes = prompt ('Escolha o número da opção desejada \n' +
  '1. Fumar apenas um cigarro \n' + 
  '2. Fumar dois cigarros \n' +
  '3. Fumar três cigarros \n' +
  '4. Fumar quatro cigarros \n' +
  '5. Nao fumar nada')
  if (opcoes == 1){
    alert('Ele escolheu a opção 1 e irá Fumar apenas UM cigarro')
  }
  else if (opcoes == 2){
    alert('Ele escolheu a opção 2 e irá Fumar apenas DOIS cigarros')
  }
  else if (opcoes == 3){
    alert('Ele escolheu a opção 3 e irá Fumar apenas TRÊS cigarros')
  }
  else if (opcoes == 4){
    alert('Ele escolheu a opção 4 e irá Fumar QUATRO cigarros')
  }
  var encerrar = prompt("Deseja encerrar o código?")
}while(encerrar == 'nao')


