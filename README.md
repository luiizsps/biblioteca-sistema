# 📚 Sistema de Biblioteca Universitária

Sistema completo de gerenciamento de biblioteca universitária desenvolvido em HTML, CSS (Bootstrap), JavaScript e consumo de APIs REST. Este projeto permite o gerenciamento completo de alunos, livros, autores e editoras através de uma interface web moderna e responsiva.

## 👥 Equipe de Desenvolvimento

- **Líder do Projeto:** Luiz Sérgio - [@luiizsps](https://github.com/luiizsps)
- **Documentação:** Rosângela - [@rosangelasva](https://github.com/rosangelasva)
- **Dev 1 (Módulo Livros):** Alex Silveira - [@Apoc35](https://github.com/Apoc35)
- **Dev 2 (Módulo Autores):** Alexsandro - [@alexsandro15](https://github.com/alexsandro15)
- **Dev 3 (Módulo Editoras):** Luiz Sérgio - [@luiizsps](https://github.com/luiizsps)

## 🚀 Tecnologias Utilizadas

- **Frontend:**
  - HTML5
  - CSS3
  - Bootstrap 5.3
  - JavaScript ES6+
  - Fetch API

- **Backend (Mock):**
  - JSON Server
  - REST API

- **Ferramentas:**
  - Git/GitHub
  - Node.js
  - npm

## 📋 Funcionalidades Implementadas

### 👨‍🎓 Gestão de Alunos ✅
- ✅ Listar todos os alunos cadastrados
- ✅ Cadastrar novo aluno
- ✅ Editar informações do aluno
- ✅ Excluir aluno do sistema

### 📚 Gestão de Livros ✅
- ✅ Listar todos os livros disponíveis
- ✅ Cadastrar novo livro
- ✅ Editar informações do livro
- ✅ Excluir livro do acervo

### ✍️ Gestão de Autores ✅
- ✅ Listar todos os autores
- ✅ Cadastrar novo autor
- ✅ Editar informações do autor
- ✅ Excluir autor do sistema

### 🏢 Gestão de Editoras ✅
- ✅ Listar todas as editoras
- ✅ Cadastrar nova editora
- ✅ Editar informações da editora
- ✅ Excluir editora do sistema

## 🔧 Como Executar o Projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- npm (geralmente vem com o Node.js)
- [Git](https://git-scm.com/)

### Instalação e Configuração
1. **Clone o repositório**
2. **Instale o JSON Server globalmente (se ainda não tiver)**
3. **Inicie o servidor de API (JSON Server)**
4. **Abra o projeto no navegador**

### Estrutura do Banco de Dados (db.json)

O projeto espera um arquivo `db.json` com a seguinte estrutura básica:

```json
{
  "alunos": [],
  "livros": [],
  "autores": [],
  "editoras": []
}
```

## 📁 Estrutura do Projeto

```
biblioteca-sistema/
│
├── index.html          # Página principal
├── assets/
│   ├── css/           # Estilos personalizados
│   ├── js/            # Scripts JavaScript
│   └── img/           # Imagens e ícones
│
├── pages/             # Páginas específicas (opcional)
├── db.json            # Banco de dados JSON
├── README.md          # Este arquivo
└── package.json       # Configurações do projeto (se aplicável)
```

## 🚨 Solução de Problemas

### Problemas Comuns

1. **Erro de CORS:**
   - Certifique-se de que o JSON Server está rodando na porta 3000
   - Verifique se não há bloqueios de segurança no navegador

2. **API não respondendo:**
   ```bash
   # Verifique se o JSON Server está rodando
   curl http://localhost:3000/alunos
   ```

3. **Página não carrega:**
   - Verifique o console do navegador (F12)
   - Confira se todos os arquivos foram carregados corretamente

## 📝 Próximos Passos (Melhorias Futuras)

- [ ] Sistema de empréstimos de livros
- [ ] Autenticação de usuários
- [ ] Relatórios e estatísticas
- [ ] Pesquisa avançada
- [ ] Notificações por email
- [ ] Backup automático do banco de dados

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ pela equipe de Biblioteca Universitária**
## ✨ Agradecimentos
