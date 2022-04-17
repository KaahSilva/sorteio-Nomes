//INTERCEPTAR O CLICK NO BOTÃO
//
//PEGAR AS INFORMAÇÕES QUE ESTÃO NO CAMPO

const btnSortear = document.querySelector(".botaoSortear")
const textarea = document.querySelector("textarea")
const tagResultado = document.querySelector(".resultado p")
const popUpResultado = document.querySelector(".resultado")
const btnFechar = document.querySelector(".fechar")

console.log(textarea)

function pegarDadosFormulario(){
    const valorCampo = textarea.value
    const listaNomes = valorCampo.split("\n")
    const tamanhoArray = listaNomes.length
    const posicaoNome = gerarNumeroAleatorio(tamanhoArray)
    const nome = listaNomes[posicaoNome]
    mostrarResultado(nome)


   
}


btnSortear .addEventListener("click" , pegarDadosFormulario)

function gerarNumeroAleatorio(tamanhoArray){
    return Math.floor(Math.random () * (tamanhoArray-0) + 0)

}



function mostrarResultado(nome){
    tagResultado.innerText = `Resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")
}

function fecharPopUp(){
    popUpResultado.classList.remove("mostrarResultado")
}

btnFechar.addEventListener("click", fecharPopUp)