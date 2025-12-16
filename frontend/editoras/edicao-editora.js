let urlParams = new URLSearchParams(document.location.search);
let idEditora = urlParams.get('id');

async function buscarEditoraPorId() {
    const response = await fetch(`http://localhost:3000/editoras/${idEditora}`)
    const editora = await response.json();
    
    document.getElementById('nomeEditora').value = editora.nomeEditora;
    document.getElementById('endereco').value = editora.endereco;
    document.getElementById('datacadastro').value = editora.datacadastro;
    document.getElementById('email').value = editora.email;
    document.getElementById('tel').value = editora.tel;
}

async function editarEditora(event) {
    // removo o comportamento do submit de atualizar a tela;
    event.preventDefault();

    // Busco o que foi digitado no input nomeEditora atraves do seu ID e do atributo value;
    const nomeEditora = document.getElementById('nomeEditora').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;

    //LOGICA QUE ENVIA O QUE FOI DIGITADO PARA O BANCO DE DADOS VIA API
    const apiUrl = `http://localhost:3000/editoras/${idEditora}`;

    // Monto o objeto editora que vai ser enviado via api atraves do metodo [PUT/PATCH]

    const editora = {
        nomeEditora,
        endereco,
        email,
        tel
    }

    // Estrutura a requisicao que vai ser enviada pelo fetch 
    const request = new Request(apiUrl, {
        method: 'PATCH',
        body: JSON.stringify(editora),
        headers: new Headers(
            { 'Content-Type': 'application/json' }
        )
    })

    const response = await fetch(request);
    if(response.ok) {
        const editora = await response.json();
        alert(`editora ${editora.nomeEditora} editado com sucesso!`);
        window.location.href = './editoras.html';
    }

}

buscarEditoraPorId();


