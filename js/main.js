//variavel recebe toda a lista do data attributes adicionada ao html
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//função chama o nome do botão informado na função onclick no html e troca o nome conforme nome da imagem salva na pasta
//1ª solução
/*function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";  
}*/

//2ªsolução
/*function trocaImagem(elemento){
    const robo = document.querySelector(".robo")
    const img = "img/Robotron 2000 - "
    const png = ".png"

    robo.src = img + elemento + png
    console.log(elemento)
}*/

//3ªsolução
const btn = document.querySelectorAll("[data-botao]")

btn.forEach((elemento) =>{
    elemento.addEventListener("click", (evento) =>{
       mudaCor(elemento)
    })
})

function mudaCor(elemento){
    const altera = elemento.firstChild
    document.querySelector(".robo").src="img/Robotron 2000 - " + altera.textContent + ".png";
}

//obs.: o elemento é um parametro do html, pode ser um input, botão ou campo que recebe algum comando

//comando que recebe a função com os dois parâmetros de conversão necessários, elemento = aos botões de + e -
controle.forEach( (elemento) =>{
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

//função com a lógica de adiciona ou subtrai de acordo com o input dos botões
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}

//função para atualizar o painel de estatisticas ao clicar nos botões ou seja, ao clicar no elemento
function atualizaEstatisticas(peca){
    estatisticas.forEach( (elemento) =>{
        console.log(elemento.dataset.estatistica)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}
