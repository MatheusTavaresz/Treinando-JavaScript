const vagas = []

function listarVagas(){
  const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
      textoFinal += indice + ". "
      textoFinal += vaga.nome
      textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
      return textoFinal
  }, "")

  alert(vagasEmTexto)
}

function novaVaga() {
  const nome = prompt('Informe um nome para a vaga: ')
  const descricao = prompt('Informe uma descrição para a vaga: ')
  const dataLimite = prompt('Informe uma data limite (dd/mm/aaaa) para a vaga')

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" + 
    "Nome: " + nome + "\nDescrição: " + descricao + "\nDataLimite: " + dataLimite
  )

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: []} //Adiciona a vaga e inicializa a variável "Candidatos" com valor de 0
    vagas.push(novaVaga) //Adiciona as entradas da função "novaVaga" no array de "vagas"
    alert('Vaga criada')
  }
}

function exibirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir: ")
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
    return textoFinal + "\n - " + candidato
  }, "")

    alert(
      "Vaga nº " + indice +
      "\nNome: " + vaga.nome +
      "\nDescrição: " + vaga.descricao +
      "\nQuantidade de candidatos: " + vaga.candidato.length +
      "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato(){
  const candidato = prompt('Informe nome do(a) candidato(a): ')
  const indice = prompt('Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever: ')
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga" + indice + "? \n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
  )

  if(confirmacao){
    vagas.candidatos.push(candidato)
    alert('Inscrição realizada')
  }

  alert(candidato)
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "Descrição" + vaga.descricao + "Data Limite: " + vaga.dataLimite
  )

  if(confirmacao){
    vagas.splice(indice, 1)
    alert("Vaga excluída. ")
  }
}

function exibirMenu(){
  const opcao = prompt(
    "Cadastro de vagas de Emprego: " +
    "\n\n Escolha uma das opções: " +
    "\n1. Listar vagas disponíveis: " + 
    "\n2. Criar uma nova vaga: " + 
    "\n3. Visualizar uma vaga: " + 
    "\n4. Inscrever um(a) candidato: " + 
    "\n5. Excluir uma vaga" +
    "\n6. Sair" 
  )

  return opcao
}

function executar(){
  let opcao = ""

  do{
    opcao = exibirMenu() //Exibe o menu e retorna a opção escolhida

    switch(opcao){
      case "1":
        listarVagas()
        
      case "2":
        novaVaga()
        
      case "3":
        exibirVaga()
        
      case "4":
        inscreverCandidato()

      case "5":
        excluirVaga()
        
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção Inválida")
    }
    
  } while (opcao !== "6")
}

executar()