const listaDeTarefas = [];

const inputTarefa = document.getElementById('inputTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnRemoverUltima = document.getElementById('btnRemoverUltima');
const btnLimparLista = document.getElementById('btnLimparLista');
const listaTarefasDOM = document.getElementById('listaTarefas');
const contadorSpan = document.getElementById('contador');

function renderizarTarefas() {
    listaTarefasDOM.innerHTML = "";
    
    for (let i = 0; i < listaDeTarefas.length; i++) {
        const tarefa = listaDeTarefas[i];
        const novoItem = document.createElement('li');
        novoItem.textContent = (i + 1) + ". " + tarefa;
        listaTarefasDOM.appendChild(novoItem);
    }
    
    contadorSpan.textContent = listaDeTarefas.length;
}

btnAdicionar.addEventListener('click', function() {
    const textoTarefa = inputTarefa.value.trim();
    
    if (textoTarefa !== "") {
        listaDeTarefas.push(textoTarefa);
        inputTarefa.value = "";
        renderizarTarefas();
    } else {
        alert("Por favor, digite uma tarefa válida!");
    }
});

btnRemoverUltima.addEventListener('click', function() {
    if (listaDeTarefas.length > 0) {
        listaDeTarefas.pop();
        renderizarTarefas();
    } else {
        alert("A lista já está vazia!");
    }
});

btnLimparLista.addEventListener('click', function() {
    if (listaDeTarefas.length > 0) {
        listaDeTarefas.length = 0;
        renderizarTarefas();
        alert("Lista limpa com sucesso!");
    } else {
        alert("A lista já está vazia!");
    }
});

inputTarefa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        btnAdicionar.click();
    }
});
