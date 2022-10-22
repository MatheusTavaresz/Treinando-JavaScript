const nomeViajante = prompt('Olá, turista! Nos informe seu nome')
let cidades = ""
let contagem = 0

var continuar = prompt('Você já visitou alguma cidade?')

while (continuar == 'sim') {
  var cidadeQueVisitou = prompt ('Qual o nome da cidade que você visitou?')
  cidades += " - " + cidadeQueVisitou + "\n"
  contagem ++
  var continuar = prompt('Você visitou outra cidade? ')
}
alert (nomeViajante + " é um cara vivido, olha só as cidades que já andou: " + cidades + " ao todo dá " + contagem)