/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

const imprimeSequenciaFibonacci = (numeroParada) =>{
    let numeroInicio = 0
    let numeroAnterior = 0

    while(numeroInicio < numeroParada){
        if(numeroInicio == 0){
            console.log(numeroInicio)
            numeroAnterior = 0
        }else{
            console.log(numeroAnterior + numeroInicio)
            numeroAnterior = numeroInicio
        }

        numeroInicio+=1
    }
}

imprimeSequenciaFibonacci(5)
