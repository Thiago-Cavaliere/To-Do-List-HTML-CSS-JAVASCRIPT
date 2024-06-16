const botao = document.querySelector('.btn');
const display = document.querySelector('.lista-input');
const liInput = document.querySelector('.display');

const listaVazia = [];

function addNaLista() {
    const texto = liInput.value.trim();
    if (texto !== "") {
        listaVazia.push(texto);
        criarElemento(texto);
        liInput.value = ''; // Limpar o campo de entrada
    }
}

function criarElemento(texto) {
    const li = document.createElement('li');
    li.innerText = texto;
    
    // Criação do botão de exclusão
    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.classList.add('btn-excluir');
    btnExcluir.addEventListener('click', () => {
        excluirElemento(li);
    });
    
    // Adicionando o botão ao item da lista
    li.appendChild(btnExcluir);
    
    display.appendChild(li);
}

function excluirElemento(li) {
    li.remove();
    // Também é possível remover o item do array listaVazia
    // Aqui, não estou implementando a lógica para remover do array
}

botao.addEventListener('click', addNaLista);
