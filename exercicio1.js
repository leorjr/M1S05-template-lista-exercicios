/**
 * [M1S05] Ex 1 - Classificação de idade
 *
 * Escreve um programa que atribui um valor a uma variável `idade` e determina
 * em qual categoria ela se enquadra: criança (0-12 anos), adolescente (13-17 anos),
 * adulto (18-59 anos) ou idoso (60 anos ou mais). Utiliza uma estrutura condicional
 * (if, else if, else).
 */

const classificaIdade = (idade) =>{
    if(idade < 0){
        return 'favor informar uma idade, corretamente'
    }else if(idade >= 0 && idade <= 12){
        return 'criança'
    }else if(idade >= 13 && idade <= 17){
        return 'adolescente'
    }else if(idade >= 18 && idade <= 59){
        return 'adulto'
    }else{
        return 'idoso'
    }
}
