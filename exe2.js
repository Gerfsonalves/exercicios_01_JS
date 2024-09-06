const paises = ['Alemanha', 'Argentina', 'Brasil', 'México']

paises.forEach((Element, index) => {
    console.log('Execução: ', index + 1)
    console.log('Cidade: ',Element)

    if (Element === 'Brasil') { 
        console.log('Encontrado')
    } else {
        console.log('Não encontrado')
    }




    console.log('---------------')
})