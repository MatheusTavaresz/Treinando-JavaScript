const valorEmMetros =  parseInt (prompt ('Digite o valor em metros'))

var unidadeDeMedida = prompt ('Escolha em qual unidade de medida você deseja coverter os números\n Mílimetro - mm \n Decímetro - dm \n Decâmetro - dam \n Hectômetro - hm \n Quilômetro - km \n')


switch (unidadeDeMedida){
  case 'mm':
    resultado = valorEmMetros * 10 * 10 * 10;
    alert(valorEmMetros + ' metros, equivalem a '+ resultado + unidadeDeMedida)
    break
  case 'cm':
    resultado = valorEmMetros * 10 * 10;
    alert(valorEmMetros + ' metros, equivalem a '+ resultado + unidadeDeMedida)
    break
  case 'dm':
    resultado = valorEmMetros * 10;
    alert(valorEmMetros + ' metros, equivalem a '+ resultado + unidadeDeMedida)
    break
  case 'dam':
    resultado = valorEmMetros / 10;
    alert(valorEmMetros + ' metros, equivalem a '+ resultado + unidadeDeMedida)
    break
  case 'hm':
    resultado = valorEmMetros / 10 / 10;
    alert(valorEmMetros + ' metros, equivalem a '+ resultado + unidadeDeMedida)
    break
  case 'km':
    resultado = valorEmMetros / 10 / 10 / 10;
    alert(valorEmMetros + ' metros, equivalem a '+ resultado + unidadeDeMedida)
    break
}