/**
 * [M1S05] Ex 5 - Verificar palavras em um array
 *
 * Escreve um programa que percorre um array de palavras e exibe todas as palavras que possuem
 * mais de 5 caracteres. Utiliza a estrutura de repetição for of para percorrer o array.
 */

const percorreArray = () =>{
    const array = ["banana", "maçã", "maracujá", "kiwi", "morango"]

    for(let item of array){
        if(item.length > 5){
            console.log(item)
        }
    }
}

percorreArray()
