// ============================================
// VETOR (ARRAY) - ONDE AS TAREFAS SÃO GUARDADAS
// ============================================
const listaDeTarefas = [];

// ============================================
// PEGANDO OS ELEMENTOS DO HTML
// ============================================
const inputTarefa = document.getElementById('inputTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnRemoverUltima = document.getElementById('btnRemoverUltima');
const btnLimparLista = document.getElementById('btnLimparLista');
const listaTarefasDOM = document.getElementById('listaTarefas');
const contadorSpan = document.getElementById('contador');

// ============================================
// FUNÇÃO PARA MOSTRAR AS TAREFAS NA TELA
// ============================================
function renderizarTarefas() {
    // Limpa a lista do HTML para não duplicar
    listaTarefasDOM.innerHTML = "";
    
    // Percorre o vetor e cria um <li> para cada tarefa
    for (let i = 0; i < listaDeTarefas.length; i++) {
        const tarefa = listaDeTarefas[i];
        const novoItem = document.createElement('li');
        novoItem.textContent = (i + 1) + ". " + tarefa;
        listaTarefasDOM.appendChild(novoItem);
    }
    
    // Atualiza o contador
    contadorSpan.textContent = listaDeTarefas.length;
}

// ============================================
// ADICIONAR TAREFA
// ============================================
btnAdicionar.addEventListener('click', function() {
    const textoTarefa = inputTarefa.value.trim();
    
    if (textoTarefa !== "") {
        listaDeTarefas.push(textoTarefa);  // Adiciona no VETOR
        inputTarefa.value = "";            // Limpa o campo
        renderizarTarefas();               // Atualiza a tela
    } else {
        alert("Por favor, digite uma tarefa válida!");
    }
});

// ============================================
// REMOVER ÚLTIMA TAREFA
// ============================================
btnRemoverUltima.addEventListener('click', function() {
    if (listaDeTarefas.length > 0) {
        listaDeTarefas.pop();              // Remove do VETOR
        renderizarTarefas();               // Atualiza a tela
    } else {
        alert("A lista já está vazia!");
    }
});

// ============================================
// LIMPAR LISTA INTEIRA (DESAFIO)
// ============================================
btnLimparLista.addEventListener('click', function() {
    if (listaDeTarefas.length > 0) {
        listaDeTarefas.length = 0;         // Esvazia o VETOR
        renderizarTarefas();               // Atualiza a tela
        alert("Lista limpa com sucesso!");
    } else {
        alert("A lista já está vazia!");
    }
});

// ============================================
// APERTAR ENTER NO CAMPO DE TEXTO TAMBÉM ADICIONA
// ============================================
inputTarefa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        btnAdicionar.click();
    }
});
