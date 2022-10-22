var carro1 = parseInt(prompt ('Digite a velocidade em KM do primeiro carro'));
var carro2 = parseInt(prompt ('Digite a velocidade em KM do segundo carro'));

if (carro1 > carro2){
  alert('O carro 1 está mais motivado');
}

else if (carro2 > carro1){
  alert('O carro 2 está mais motivado');
}

else {
  alert('Ambos estão motivados e a mais de 80KM');
}