let order = [];
let clickedOrder = [];
let score = 0;

// 0 - green
// 1 - red
// 2 - yellow
// 3 - blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Cria ordem aleatória
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checa se os botões clicados são os mesmo da ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert (`Prontuação: ${score}!\n Você acertou! Iniciando o próximo nível!`);
        nextLevel();
    }
}

//Função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

//Função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//Função para o próximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função Game Over
let gameOver = () => {
    alert(`Pontuação: ${score}!\n Game Over! Clique em OK para tentar novamente!`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Função para iniciar um novo jogo
let playGame = () => {
    alert('Bem vindo ao Genius Game! Iniciando um novo jogo!');
    score = 0;

    nextLevel();
}

//Evento de cliques das cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Início do jogo
playGame();