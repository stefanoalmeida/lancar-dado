const elementoResposta = document.querySelector("#resposta")
const botaoPerguntar = document.querySelector('#botaoPerguntar')

const facesDado = [1, 2, 3, 4, 5, 6]

const inputPergunta = document.querySelector("#inputPergunta")

function lancarDado(){
  const tamanhoArray = facesDado.length

  if (inputPergunta.value == ""){
    alert("Faça uma aposta!")
    return
  } else if (inputPergunta.value > 6 || inputPergunta.value == 0){
    alert("Escolha um número de 1 a 6")
    return
  }

  botaoPerguntar.setAttribute('disabled', true)

  const numeroAleatorio = Math.floor(Math.random() * tamanhoArray)

  const resultado = document.querySelector("#resultado")

  resultado.innerHTML = "Face sorteada: " + facesDado[numeroAleatorio]

  if (inputPergunta.value == facesDado[numeroAleatorio]){
    resultado.style.color = "#006400"
    resultado.innerHTML = "Face sorteada: " + facesDado[numeroAleatorio]
    elementoResposta.innerHTML = "Acertou na mosca! 🎯"
  } else {
    resultado.style.color = "#8B0000"
    resultado.innerHTML = "Face sorteada: " + facesDado[numeroAleatorio]
    elementoResposta.innerHTML = "Você não está com sorte hoje! 😂"
  }

  elementoResposta.style.opacity = 1
  resultado.style.opacity = 1

  setTimeout(function(){
    elementoResposta.style.opacity = 0
    resultado.style.opacity = 0
    botaoPerguntar.removeAttribute('disabled')
  }, 3000)



}

