const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]')
const cores = document.querySelectorAll('.producao');
const robo = document.querySelector('.robo')
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

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if(operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
} 

function atualizaEstatisticas(peca){
    estatisticas.forEach((elemento) => {
       elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

cores.forEach((cor) => {
    cor.addEventListener('click', (elemento) =>{
        let cor = elemento.target.value;
        if(cor == 'Amarelo') {
            robo.setAttribute('src', './cores/Robotron 2000 - Amarelo/Robotron 2000 - Amarelo.png');
        } else if(cor == 'Azul') {
            robo.setAttribute('src', './cores/Robotron 2000 - Azul/Robotron 2000 - Azul.png' );
        } else if(cor == 'Branco') {
            robo.setAttribute('src', './cores/Robotron 2000 - Branco/Robotron 2000 - Branco.png');
        } else if( cor == 'Preto') {
            robo.setAttribute('src', './cores/Robotron 2000 - Preto/Robotron 2000 - Preto.png');
        } else if(cor == 'Rosa') {
            robo.setAttribute('src', './cores/Robotron 2000 - Rosa/Robotron 2000 - Rosa.png');
        } else if(cor == 'Vermelho') {
            robo.setAttribute('src', './cores/Robotron 2000 - Vermelho/Robotron 2000 - Vermelho.png')
        }
    })
})