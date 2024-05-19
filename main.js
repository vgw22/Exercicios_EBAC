const form = document.getElementById('formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    compararNumeros();
})

function compararNumeros() {
    let campoA = document.getElementById('campoA').value;
    let campoB = document.getElementById('campoB').value;
    let resultado = document.getElementById('resultado');

    if (campoB > campoA) {
        resultado.innerHTML = "O número do Campo B é maior que o Campo A.";
        resultado.style.color = 'green';
    } else if (campoB < campoA) {
        resultado.innerHTML = "O número do Campo B é menor que o Campo A.";
        resultado.style.color = 'red';
    } else {
        resultado.innerHTML = "Os números dos Campos A e B são iguais.";
        resultado.style.color = 'red';
    }
}