const form = document.getElementById('form-contatos');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inuputNumeroContato = document.getElementById('numero-contato');

    let linha = `<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inuputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNomeContato.value = '';
    inuputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}