# arq-org-comp-documents

> [!WARNING]
> **Pode conter informações erradas.** Todo o conteúdo foi montado a partir de mais de 10 arquivos .md de anotações feitas em sala de aula, de provas antigas, do livro *Organização e Projeto de Computadores* (Patterson e Hennessy, 2ª edição), dos slides e dos materiais de estudo da disciplina. **Na dúvida, vale o que o professor ensinou em sala.**

Material de estudo de **Arquitetura e Organização de Computadores** (UNICAP): MIPS, tradução de C para MIPS e caminho de dados monociclo e multiciclo.

## O que tem aqui

| Arquivo | Conteúdo |
| --- | --- |
| `src/index.html` | Página inicial com a lista de materiais |
| `src/mips-do-zero.html` | **01.** Registradores, formatos de instrução, tradução de C para MIPS, pilha e exercícios |
| `src/caminho-de-dados.html` | **02.** Circuitos interativos do monociclo e do multiciclo, sinais de controle, animação ciclo a ciclo e simulador de programa |
| `src/manual-mono-multi.html` | **03. Conteúdo extra.** Manual de monociclo e multiciclo, máquina de estados, exercícios resolvidos e autoteste |
| `src/nav.js` | Menu lateral compartilhado entre as páginas |
| `class-notes/` | Rascunhos das aulas |

Em qualquer página, o botão ☰ no canto superior esquerdo abre o menu lateral para trocar de material ou pular para uma seção. Ele pode ser minimizado e expandido; no computador, a página lembra se você deixou aberto.

## Setup

### 1. Clonar o repositório

```bash
git clone https://github.com/rafaelsampa/arq-org-comp-documents.git
cd arq-org-comp-documents
```

### 2. Abrir com o Live Server (recomendado)

1. Abra a pasta no [VS Code](https://code.visualstudio.com/): `code .`
2. Instale a extensão **Live Server** (ritwickdey.LiveServer): `Ctrl+Shift+X`, busque "Live Server" e clique em instalar. Ou pelo terminal:
   ```bash
   code --install-extension ritwickdey.LiveServer
   ```
3. Abra `src/index.html` e clique em **Go Live** na barra inferior (ou botão direito no arquivo, **Open with Live Server**).
4. O navegador abre sozinho. Qualquer alteração salva nos arquivos recarrega a página automaticamente.

### Sem VS Code

Qualquer servidor estático funciona. Com Python ou Node instalado:

```bash
python -m http.server 5500 -d src
# ou
npx serve src
```

Depois acesse `http://localhost:5500` (no `npx serve`, use o endereço que ele mostrar).

Também dá para abrir os `.html` com dois cliques, sem servidor nenhum. Só não recarrega sozinho quando o arquivo muda.

### Atualizar

```bash
git pull
```
