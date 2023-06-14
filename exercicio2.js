/**
 * [M1S05] Ex 2 - Tradução de cores
 *
 * Escreve um programa que atribui um valor a uma variável `cor` em inglês e imprime
 * a tradução para a mesma cor em português. Utiliza uma estrutura condicional (switch)
 * para fazer o mapeamento das cores.
 */

const traduzCor = (englishColor) =>{
    let traducao = ''

    switch (englishColor) {
        case 'vermelho':
          traducao = 'red'
          break;
        case 'azul':
            traducao = 'blue'
            break;
        case 'amarelo':
            traducao = 'yellow'
            break;
        case 'branco':
            traducao = 'white'
            break;
        case 'preto':
            traducao = 'black'
            break;
        default:
          traducao = `Cor não mapeada`
    }
    
    return traducao
}
