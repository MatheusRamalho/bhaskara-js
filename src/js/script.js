const buttonCalculate = document.querySelector('.bhaskara__');

buttonCalculate.addEventListener('click', calculateDelta);

function calculateDelta() {
    // Pega os valores dos inputs...
    let a = document.querySelector('.valueA').value;
    let b = document.querySelector('.valueB').value;
    let c = document.querySelector('.valueC').value;

    // Seleciona os elementos de saida...
    let deltaL1 = document.querySelector('.delta__l1');
    let deltaL2 = document.querySelector('.delta__l2');
    let deltaMessage = document.querySelector('.delta__mensagem');

    // Responsavel pelo calculo...
    let delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        deltaL1.innerHTML = `∆ = ${b * b} - 4 * ${a} * ${c}`,
        deltaL2.innerHTML = `∆ = ${delta}`,
        deltaMessage.innerHTML = 'Não é possível calcular as raízes, pois o delta é menor que zero!'

    } else if (delta == 0) {
        deltaL1.innerHTML = `∆ = ${b * b} - 4 * ${a} * ${c}`;
        deltaL2.innerHTML = `∆ = ${delta}`;
        deltaMessage.innerHTML = 'Delta é igual a zero, portanto as raízes serão iguais!';

        return calculateRaizDelta(a, b, delta);

    } else {
        deltaL1.innerHTML = `∆ = ${b * b} - 4 * ${a} * ${c}`;
        deltaL2.innerHTML = `∆ = ${delta}`;
        deltaMessage.innerHTML = 'O delta é maior que zero, portanto as raízes serão diferentes!';

        return calculateRaizDelta(a, b, delta);
    }
}

function calculateRaizDelta(a, b, delta) {
    let negativeB = b * (-1);
    let raiz = Math.sqrt(delta); // Calcula a raiz quadrada...
    let divider = 2 * a;

    let x1 = (negativeB + raiz) / divider;
    let x2 = (negativeB - raiz) / divider;

    return alert('O valor de X1 é: '+x1 +' e o valor de X2 é: ' +x2);
}