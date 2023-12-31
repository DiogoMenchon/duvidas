const form = document.getElementById('form-atividade')
const imgAprovado = '<img src"./imagens/aprovado.png" alt=Emoji festejando/>';
const imgReprovado = '<img src"./imagens/reprovado.png" alt=Emoji triste/>';


let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade')

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += linha;

    inputNomeAtividade.value ='';
    inputNotaAtividade.value ='';
});