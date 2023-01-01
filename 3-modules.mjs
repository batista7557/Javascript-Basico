import pessoa from './modules/pessoa.mjs'
import { mensagemBoasVindas, soma } from './modules/util.mjs'

console.log(pessoa)

console.log(mensagemBoasVindas(pessoa.nome))

console.log(soma(2,5))