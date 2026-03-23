// Mostrar TODOS os produtos
function mostrarTodos() {
    document.querySelectorAll('.produto').forEach(produto => {
        produto.classList.add('show');
    });
}

// Mostrar por categoria
function filtrarCategoria(categoria) {
    document.querySelectorAll('.produto').forEach(produto => {
        if (categoria === 'todos' || produto.dataset.categoria === categoria) {
            produto.classList.add('show');
        } else {
            produto.classList.remove('show');
        }
    });
}

// Executa ao carregar
mostrarTodos();