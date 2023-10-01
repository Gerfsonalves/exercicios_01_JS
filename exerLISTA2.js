//1. Crie uma função que receba um array de strings e retorne um novo array com o tamanho de cada string.
//Ex: ['a', 'bcd', 'efghi' 'jklmno', 'pqrstu']  --> [1, 3, 5, 6, 6]


function totalLetras(arr) {
    return arr.map(strings => strings.length);
}

arr = ["a", "aaa", "aa", "aaaa", "aaaaaa", "aaaaa"];
//      1     3      2     4         6         5


const numeros = totalLetras(arr);
console.log(numeros)

// 2. Considerando o exercício acima, faça com que a função multiplique cada tamanho da string pelo index do array e retorne apenas os números ímpares.
// Ex: [1, 3, 5, 6, 6] --> [0, 3, 10, 18, 18] --> [3]

function multiplicar(arr) {
    return arr.map((string, index) => string.length * index)
        .filter(num => num % 2 !== 0);
}

const resultado = multiplicar(arr);

console.log(resultado)
