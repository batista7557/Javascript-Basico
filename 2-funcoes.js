//Função normal
function ola() {
    return 'Olá!'
}

console.log(ola())

//Função com argumento
function olaPessoa(nome) {
    return `Olá ${nome}!`
}

console.log(olaPessoa('João'))

//Arrow Functions
const olaArrow = () => {
    return 'Olá novamente!'
}

console.log(olaArrow())

//Arrow Funcion com apenas um parâmetro
const olaArrow2 = nome => `Olá novamente ${nome}`

console.log(olaArrow2('João'))

//Arrow Function com mais de um parâmetro
const olaArrow3 = (nome, idade) => {
    return `Olá novamente ${nome}, sua idade é ${idade}`
}

console.log(olaArrow3('João', 20))