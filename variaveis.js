// Ele pode ser alterado!
var nome = 'Eduardo' // string
nome = 'pedro'
console.log('O nome dele é: ' + nome)

// Ele pode ser alterado!
let idade = 20 // números
idade = 30
console.log('Qual a idade: ' + idade)

// NÃO pode ser alterado!
const cidade = 'São paulo'
console.log('Nasceu em: ' + cidade)

// Boolean - true or false
let maior_idade = true
console.log('Ele ja é maior de idade? ' + maior_idade)

// Lista de dados
const paises = ['Alemanha', 'Argentina', 'Brasil']
console.log('Ele nasceu em qual país? ' + paises[2])

// Objeto -  Objeto dentrocdo objeto {{}}
const devices = {
    nome: 'Xiaomi note 13',
    preco: 1200,
    cores: {
        cor1: 'preto',
        cor2: 'azul'
    }
}
console.log(`O celular é um ${devices.nome}, e as cores disponíveis são: ${devices.cores.cor1} e ${devices.cores.cor2}.`)

// Função
