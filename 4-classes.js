class Animal{
    constructor(familia){
        this.familia = familia
    }

    andar = () => {
        return 'andando...'
    }
}

class Cachorro extends Animal{
    constructor(nome, idade){
        super('Carnívoros')
        this.nome = nome
        this.idade = idade
    }

    latir = () => {
        return `${this.nome}: au au`
    }
}

let rex = new Cachorro('Rex', 3)
console.log(rex)
console.log(rex.latir())
console.log(rex.andar())

let max = new Cachorro('Max', 5)
console.log(max)
console.log(max.latir())
console.log(max.andar())