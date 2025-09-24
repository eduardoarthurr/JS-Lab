// formas de declarar funções

function soma (x,y) {
    const resultado = x + y
    return resultado
}

const resultSoma = soma(5, 4)

//função anonima ou arrow functions
const raiz = function (n){
    return n ** 0.5
}

const raiz1 = (n) => n ** 0.5


console.log(resultSoma)

console.log(raiz(25))

console.log(raiz1(25))