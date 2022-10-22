
let pacientes = ['Matheus', ' Junior ',' Hitler',' Osama Bin Laden']

alert ('Os pacientes aguardando atendimento são ' + pacientes)

opcoes = prompt ('1. Deseja adicionar um novo paciente? \n' +
'2. Realizar nova consulta? \n' + 
'3. Encerrar o atendimento')

do{
  switch(opcoes){
    case "1":
    let  novoPaciente = prompt ('Digite o nome do Paciente ');
    pacientes.push(" " + novoPaciente);
    alert ('Os pacientes aguardando atendimento são ' + pacientes);
    break
    case "2":
    let pessoaAtendida = pacientes.shift();
    alert ('O paciente escolhido foi o ' + pessoaAtendida)
    alert ('Os pacientes aguardando atendimento são ' + pacientes);
    break
  }
}while(opcoes !== '3')