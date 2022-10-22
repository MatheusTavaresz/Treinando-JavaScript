var nomeMonstro = prompt ('Digite o nome do seu personagem')
var pontosDeAtaque = parseInt (prompt ('Digite a pontuação ataque do monstro'))
var pontosDeDefesa = parseInt (prompt ('Digite a pontuação defesa do monstro'))


if(pontosDeAtaque > pontosDeDefesa){
  var temEscudo = prompt ('O monstro tem escudo? ') 
  if (temEscudo == 'nao'){
    var danoCausado = espada + pontosDeAtaque - pontosDeDefesa; 
    alert('O dano causado pelo '+ nomeMonstro + ' foi de ' + danoCausado)
    var restante = danoCausado - pontosDeDefesa
    alert('O restante de vida do '+ pontosDeDefesa + ' foi de' + resultado)
  }
  else if (temEscudo == 'sim'){
    var danoCausado = (pontosDeAtaque - pontosDeDefesa) / 2;
    alert('O dano causado pelo '+ nomeMonstro + ' foi de ' + danoCausado + ' graças ao escudo!!')
    alert('O restante de vida do '+ pontosDeDefesa +' foi de' + danoCausado)
  }
}

if(pontosDeDefesa >= pontosDeAtaque){
  var danoCausado = 0;
  alert ('O dano causado foi de 0')
}

