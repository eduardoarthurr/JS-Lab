 const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ATRIBUIÇÃO POR DESTRUTURAÇÃO
 const [primeiroNumero, segundoNumero, ...resto] = numeros;

//voce atribui uma variavel para cada valor do array facilitando a manipulação.
 console.log(primeiroNumero, segundoNumero);

// o operador ... nessa situação chamado de rest armazena em uma outra lista o restante dos valores do array.
 console.log(resto)


const pessoa = {
    nome : 'eduardo',
    sobrenome : 'arthur',
    idade : 20,
    endereco : {
        rua: 'csb 2',
        numero : '503'

    }
}


const { nome : teste, sobrenome} = pessoa
const {rua, numero} = pessoa.endereco

console.log(teste, sobrenome, rua, numero )