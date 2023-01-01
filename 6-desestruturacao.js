const frutas = ['laranja', 'banana', 'uva']

let [ fruta1, , fruta3 ] = frutas

//Nomes tem que condizer com as propriedades do objeto
const pessoa = {
    nome: 'João',
    idade: 20,
    pais: 'Brasil',
    idioma: 'Português'
}

const localidade = ({pais, idioma}) => `Você mora no ${pais} e fala ${idioma}`

console.log(localidade(pessoa))