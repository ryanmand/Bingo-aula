function generateBingoCard() {
    // Função para gerar um número aleatório em um intervalo
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Função para gerar uma coluna de números sem repetição
    function generateColumn(min, max) {
        let column = [];
        while (column.length < 5) {
            let num = getRandomNumber(min, max);
            if (!column.includes(num)) {
                column.push(num);
            }
        }
        return column;
    }

    // Gerar as colunas B, I, N, G, O
    let B = generateColumn(1, 15);
    let I = generateColumn(16, 30);
    let N = generateColumn(31, 45);
    let G = generateColumn(46, 60);
    let O = generateColumn(61, 75);

    // Definir a posição central da coluna N como "Free"
    N[2] = 'Free';

    // Montar a cartela de bingo
    let bingoCard = [B, I, N, G, O];

    // Exibir a cartela
    for (let i = 0; i < 5; i++) {
        console.log(B[i] + '\t' + I[i] + '\t' + N[i] + '\t' + G[i] + '\t' + O[i]);
    }

    return bingoCard;
}

generateBingoCard();