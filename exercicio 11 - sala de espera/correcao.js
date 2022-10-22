let fila = []
opcao = ""

do{
  let pacientes = ""
  for (let i = 0; i < fila.length; i++){
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
  }

  opcao = prompt( "Pacientes: \n" + pacientes +
  "\nEscolha uma ação:\n1. Novo Paciente\n2. Consultar Paciente \n3. Sair" )

  switch (opcao) {
    case "1":
      const novoPaciente = prompt ('Qual o seu nome? ')
      fila.push(novoPaciente)
      break
    case "2":
      const pacienteConsultado = fila.shift()  
      alert(pacienteConsultado + 'o paciente escolhido foi')
      break
    case "3":
      alert ('Encerando')
      break
      default:
    alert ('Opção inválida')
}while(opcao !== '3')