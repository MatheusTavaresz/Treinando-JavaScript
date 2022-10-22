let opcoes = ""

opcoes = prompt ('Escolha o que deseja calcular \n1. Area do Triangulo\n2. Area do Retangulo' +
'\n3. Area do Quadrado \n4. Area do Trapézio \n5. Area do Circulo \n6. Sair')

switch(opcoes){
  case '1':
    function areaDoTriangulo (base, altura){
      let triangulo = {
        base,
        altura
      }
      base = parseInt (prompt ('Digite a Base'))
      altura = parseInt (prompt ('Digite a Altura'))
      return (base * altura) / 2
    }
    alert ('O valor da área do Triangulo é ' + areaDoTriangulo())
    break

  case '2':
    function areaDoRetangulo (base, altura){
      const retangulo = {
        base,
        altura
      }
      base = parseInt (prompt ('Digite a Base'))
      altura = parseInt (prompt ('Digite a Altura'))
      return (base * altura)
    }
    alert ('O valor da área do Retangulo é ' + areaDoRetangulo())
    break

  case '3':
    function areaDoQuadrado (lado, lado){
      const quadrado = {
        lado
      }
      lado = parseInt (prompt ('Digite o lado'))
      return (lado * lado)
    }
    alert ('O valor da área do Quadrado é ' + areaDoQuadrado())
    break

  case '4':
    function areaDoTrapezio (baseMaior, baseMenor, altura){
      const trapezio = {
        baseMaior,
        baseMenor,
        altura
      }
      baseMaior = parseInt (prompt ('Digite o Base Maior'))
      baseMenor = parseInt (prompt ('Digite a Base Menor'))
      altura = parseInt (prompt ('Digite a Altura'))
      return (baseMaior + baseMenor) * altura / 2
    }
    alert ('O valor da área do Trapézio é ' + areaDoTrapezio())
    break

  case '5':
    function areaDoCirculo (pi = 3.14, raio){
      const trapezio = {
        pi,
        raio
      }
      raio = parseInt (prompt ('Digite o raio'))
      return pi * raio**2
    }    
    alert ('O valor da área do Circulo é ' + areaDoCirculo())

  case '6':
    alert ('Saindo...')
    break
  
  default:
    alert ('Opção inválida')
}


