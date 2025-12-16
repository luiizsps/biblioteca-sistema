let urlParams = new URLSearchParams(document.location.search);
let idAutor = urlParams.get('id');

async function buscarAlunoPorId() {
    const response = await fetch(`http://localhost:3000/autores/${idAutor}`)
    const autor = await response.json();

    document.getElementById('nome').value = autor.nomeAutor;
    document.getElementById('biografia').value = autor.biografia;
}

async function editarAutor(event) {
    // removo o comportamento do submit de atualizar a tela;
    event.preventDefault();

    // Busco o que foi digitado no input nome atraves do seu ID e do atributo value;

    const nome = document.getElementById('nome').value;
    const biografia = document.getElementById('biografia').value;

    //LOGICA QUE ENVIA O QUE FOI DIGITADO PARA O BANCO DE DADOS VIA API
    const apiUrl = `http://localhost:3000/autores/${idAutor}`;

    // Monto o objeto aluno que vai ser enviado via api atraves do metodo [PUT/PATCH]

    const autor = {
        nome,
        biografia
    }

    // Estrutura a requisicao que vai ser enviada pelo fetch 
    const request = new Request(apiUrl, {
        method: 'PATCH',
        body: JSON.stringify(autor),
        headers: new Headers(
            { 'Content-Type': 'application/json' }
        )
    })

    const response = await fetch(request);
    if(response.ok) {
        const autor = await response.json();
        alert(`autor ${autor.nomeAutor} editado com sucesso!`);
        window.location.href = './autores.html';
    }

}

buscarAlunoPorId();


