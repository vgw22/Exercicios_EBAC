function showChosenNumber(e) {
    e.preventDefault();
    const number = document.getElementById('user-number').value;
    alert(`Você escolheu o número: ${number}`);
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', showChosenNumber);
});