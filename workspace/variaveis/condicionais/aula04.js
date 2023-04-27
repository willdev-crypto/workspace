/* O IMC - Indice de massa corporal é um criterio da Organização Mundial de Saúde para dar indicação sobre a condição de peso de uma pessoa adulta.
Fórmula do IMC:
IMC =peso / (altura * altura)

Elabore um algoritmo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição;
-Abaixo de 18.5 abaixo do peso;
-Entre 18.5 e 25 Peso normal;
-Entre 25 e 30 acima do peso;
-Entre 30 e 40 obeso;
-Acima de 40 Obesidade grave;
*/

const peso = 65;
const altura = 1.70;
const imc = peso / Math.pow(altura, 2);
console.log(imc);

if (imc < 18.5) {
    console.log('Abiaxo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso Normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}
