/*
1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor, e um gasto médio de combustivel por quilometro rodado.
Crie um metodo que a quantidade de quilometros e o preço de combustivel nos dê o valor gasto de reais para realizar este percusso.
*/

class Carro {

    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoPorKm(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}
const uno = new Carro('Volkswagen', 'Prata', 1 / 12);
console.log(fox.calcularGastoPorKm(70, 5));
const onix = new Carro('Chevrolet'.'Cinza', 1 / 10);
console.log(onix.calcularGastoPorKm(70, 5));