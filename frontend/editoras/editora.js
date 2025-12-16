const tabelaResultado = document.getElementById('tabelaResultado');

async function cadastrarEditora(event) {
    // removo o comportamento do submit de atualizar a tela;
    event.preventDefault();

    // Busco o que foi digitado no input nomeEditora atraves do seu ID e do atributo value;
    const nomeEditora = document.getElementById('nomeEditora').value;
    const datacadastro = document.getElementById('datacadastro').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;

    //LOGICA QUE ENVIA O QUE FOI DIGITADO PARA O BANCO DE DADOS VIA API
    const apiUrl = 'http://localhost:3000/editoras';

    // Monto o objeto aluno que vai ser enviado via api atraves do metodo [POST]

    const editora = {
        nomeEditora,
        datacadastro,
        endereco,
        email,
        tel
    }

    //[GET], [POST], [PUT], [DELETE]

    // Estrutura a requisicao que vai ser enviada pelo fetch 
    const request = new Request(apiUrl, {
        method: 'POST',
        body: JSON.stringify(editora),
        headers: new Headers(
            { 'Content-Type': 'application/json' }
        )
    })

    const response = await fetch(request);
    
    if(response.ok) {
        alert('Cadastrado com sucesso');
        window.location.href = './editoras.html';
    }
}

async function listarEditoras() {
    // promisse 1 (requisicao foi ok ou nao)
    const response = await fetch('http://localhost:3000/editoras'); //GET - BUSCAR AS EDITORAS
    // promisse 2 (o resultado da requisicao)
    const editoras = await response.json();

    editoras.forEach(function (editora) {
        tabelaResultado.insertAdjacentHTML('beforeend',
            `
            <tr>
                <td>${editora.id}</td>
                <td>${editora.nomeEditora}</td>
                <td>${editora.email}</td>
                <td>${editora.tel}</td>
                <td>${editora.endereco}</td>
                <td>${editora.datacadastro}</td>
                <td>
                    <button class="btn btn-sm btn-info text-white me-1">
                        <i class="bi bi-eye-fill"></i>
                    </button>
                    <a href="./edicao-editora.html?id=${editora.id}" class="btn btn-sm btn-warning text-white me-1">
                        <i class="bi bi-pencil-fill"></i>
                    </a>
                    <button class="btn btn-sm btn-danger" onclick="excluirEditora('${editora.id}')">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </td>
            </tr>
            `
        )
    })
}

async function excluirEditora(id) {
    const apiUrl = `http://localhost:3000/editoras/${id}`;
    
    // Estrutura da requisicao do DELETE
    const request = new Request (apiUrl, {
        method: 'DELETE'
    })

    if(confirm(`Deseja excluir o usuario ${id} ?`)){
        const response = await fetch(request);
        const aluno = await response.json();
        
        tabelaResultado.innerHTML = '';
        listarEditoras();
    }
    
}

listarEditoras();


