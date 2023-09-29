// Variaveis e Objeto

let name = "gerfson alves"
let age = 32
let hasDriversLicense = true

if (true) {
    let age = 33;
}

let address = "sao paulo, Nª 43"
let phoneNumber = "(11) 444-555"



const person = {
    name: "gerfson alves",
    age: 32,
    hasDriversLicense: true,
    address: "sao paulo, Nª 43",
    phoneNumber: "(11) 444-555"
};

console.log(person)
console.log(name, age, hasDriversLicense, address, phoneNumber)

Object.defineProperty(person, "name", {
    value: "gerfson silva"
})

person.age = 34
person.hasDriversLicense = false
person.address = "Rio de janeiro, Nª 24"
person.phoneNumber = "(21) 222 - 000"


console.log(person)

// TESTE DE LISTA COM SPREAD
// Person padrão

const personPrincipal = {
    name: "Pedro",
    age: 10,
    address: "Rua numero 01"
}

console.log(personPrincipal)

// Puxando os valores do person principal para person secundario, adicionando PhoneNumber.
const personSecundaria = {
    name: personPrincipal.name,
    age: personPrincipal.age,
    address: personPrincipal.address,
    phoneNumber: "222 111"
}

console.log(personSecundaria)

// Usando spread "..." para puxar todo person principal para person3
const person3 = {
    ...personPrincipal,
    phoneNumber: "222 222"
}

console.log(person3)


// Usando o phoneNumer antes do spread "...", o phoneNumber vai permanecer o ultimo adicionado
// ele sera mudado para o ultimo valor adicionado
const person4 = {
    phoneNumber: "111 000",
    ...person3
}

console.log(person4)


// Exemplo de spread "..." em um array de numeros
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]
const arr3 = [...arr1, ...arr2]

console.log(arr3)