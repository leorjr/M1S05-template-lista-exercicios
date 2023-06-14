/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */


const percorreArray = () =>{
    const array = [
        {
            nome: "banana",
            preco: 1.0
        },
        {
            nome: "manga",
            preco: 5.0
        },
        {
            nome: "jaca",
            preco: 10.0
        },
    ]

    for(let produto of array){
        console.log(`nome do produto: ${produto.nome} - valor do produto: R$ ${produto.preco}`)
    }

    const totalDeProdutos = array.length
    console.log(`o total de produtos é: ${totalDeProdutos}`)

    const somatorioDosValoresDosProdutos = array.reduce(
        (accumulator, currentValue)=> accumulator + currentValue.preco, 0)
    console.log(somatorioDosValoresDosProdutos)
}

percorreArray()