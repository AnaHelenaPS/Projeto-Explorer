const respostas = [
"Não",
"Sim",
"Talvez",
"Você não vai gostar da resposta",
"Eu não gostei dessa pergunta",
"foque mais na pergunta!",
"Você não precisa saber disso",
"Tem certeza que quer fazer essa pergunta?",
"Sinto no fundo do meu coração que sim",
"Completamente sim",
"Está no seu destino isso",
"Provavelmente sim",
"No próximo ano",
"Não, pode chorar",
"Gostaria de dizer sim",
"Você não colabora",
"Pense novamente na pergunta",
"Você vai sim",
"Você já conseguiu"
]

const resultado = document.querySelector("#camporesposta")
const inputPergunta = document.querySelector("#facapergunta")
const perguntacampo = document.querySelector("#pergunta")
const buttonelemento = document.querySelector("#botao")


function fazerpergunta()
{
  if(inputPergunta.value == ""){
  alert(" Digite sua pergunta! ")
  return
  }

buttonelemento.setAttribute("disabled",true)

  const totalfrases = respostas.length;
  const numeroAleatorio = Math.floor(Math.random()*totalfrases)

  perguntacampo.innerHTML = inputPergunta.value
  resultado.innerHTML = respostas[numeroAleatorio]
  resultado.style.opacity = 1
  perguntacampo.style.opacity = 1


  setTimeout (function (){
    resultado.style.opacity = 0
    perguntacampo.style.opacity = 0
    buttonelemento.removeAttribute("disabled")
  },3000)

}
