const paises = ['Alemanha', 'Argentina', 'Brasil', 'México']

console.log(paises[2]) // Selecionar um país específico na lista

console.log(paises.length) // Conta quantos países contém na lista - Tamanho do array

// Adicionar elemento ao final do array

paises.push('Holanda')
console.log(paises)
console.log(paises.length)

// Remover último item do array

paises.pop()
console.log(paises)
console.log(paises.length)

// Adicionar item no ínicio do array

paises.unshift('França')
console.log(paises)
console.log(paises.length)

// Remover item no ínicio do array
paises.shift()
console.log(paises)
console.log(paises.length)