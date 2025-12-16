const tabelaResultado = document.getElementById('tabelaResultado');

async function cadastrarAutor(event) {
    // removo o comportamento do submit de atualizar a tela;
    event.preventDefault();

    // Busco o que foi digitado no input nome atraves do seu ID e do atributo value;
    const nomeAutor = document.getElementById('nome').value;
    const biografia = document.getElementById('biografia').value;

    //LOGICA QUE ENVIA O QUE FOI DIGITADO PARA O BANCO DE DADOS VIA API
    const apiUrl = 'http://localhost:3000/autores';

    // Monto o objeto aluno que vai ser enviado via api atraves do metodo [POST]

    const autor = {
        nomeAutor,
        biografia
    }

    //[GET], [POST], [PUT], [DELETE]

    // Estrutura a requisicao que vai ser enviada pelo fetch 
    const request = new Request(apiUrl, {
        method: 'POST',
        body: JSON.stringify(autor),
        headers: new Headers(
            { 'Content-Type': 'application/json' }
        )
    })

    const response = await fetch(request);
    
    if(response.ok) {
        alert('Cadastrado com sucesso');
        window.location.href = './autores.html';
    }
}

async function listarAutores() {
    // promisse 1 (requisicao foi ok ou nao)
    const response = await fetch('http://localhost:3000/autores'); //GET - BUSCAR OS ALUNOS
    // promisse 2 (o resultado da requisicao)
    const autores = await response.json(); 

    autores.forEach(function (autor) {
        tabelaResultado.insertAdjacentHTML('beforeend',
            `
            <tr>
                <td>${autor.id}</td>
                <td>${autor.nomeAutor}</td>
                <td>${autor.biografia}</td>
                <td>
                    <button class="btn btn-sm btn-info text-white me-1">
                        <i class="bi bi-eye-fill"></i>
                    </button>
                    <a href="./edicao-autor.html?id=${autor.id}" class="btn btn-sm btn-warning text-white me-1">
                        <i class="bi bi-pencil-fill"></i>
                    </a>
                    <button class="btn btn-sm btn-danger" onclick="excluirAutor('${autor.id}')">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </td>
            </tr>
            `
        )
    })
}

async function excluirAutor(id) {
    const apiUrl = `http://localhost:3000/autores/${id}`;
    
    // Estrutura da requisicao do DELETE
    const request = new Request (apiUrl, {
        method: 'DELETE'
    })

    if(confirm(`Deseja excluir o usuario ${id} ?`)){
        const response = await fetch(request);
        const autor = await response.json();
        
        tabelaResultado.innerHTML = '';
        listarAutores();
    }
    
}

listarAutores();


