//Spread
//Com números
const numeros = [ 1, 2, 3, 4 ]

const novosNumeros = [...numeros, 5] //... cria cópia do array

console.log(numeros)
console.log(novosNumeros)

//Com atributos
const rex = {
    nome: 'Rex'
}

const max = {...rex, idade: 2, familia: 'Carnívoro'}
max.nome = 'Max'

console.log(rex)
console.log(max)

//--------------------------

//Rest - Passa parâmetro como um array
const somar = (...numeros) => numeros.reduce( (a, b) => a + b, 0) //Faz a soma dos elementos do array


console.log( somar(2, 3, 8) )