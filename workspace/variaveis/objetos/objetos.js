const william = {

    nome: 'William Oliveira',
    idade: 31,

    descrever: function () {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const atributo = 'idade';
console.log(william['nome']);

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é $ {this.idade}');
    }
}