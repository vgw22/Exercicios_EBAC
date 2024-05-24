function calculaArea(valorBase, valorAltura) {
    let valorArea = valorBase * valorAltura;
    return valorArea;
}

let valorBase = prompt('Digite o valor da base');
let valorAltura = prompt('Digite o valor da altura');
alert('O valor da área é: ' + calculaArea(valorBase, valorAltura));