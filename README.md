# 💰 Refund - Sistema de Solicitação de Reembolso

Um aplicativo web simples e intuitivo para gerenciar solicitações de reembolso de despesas. O usuário pode adicionar novas despesas escolhendo categorias específicas, visualizar uma lista detalhada com os gastos e acompanhar o valor total em tempo real.

## ✨ Funcionalidades

* **Adição de Despesas:** Permite inserir o nome da despesa, selecionar uma categoria (Alimentação, Hospedagem, Serviços, Transporte, Outros) e o valor.
* **Cálculo Automático:** Atualiza automaticamente a quantidade de despesas cadastradas e o valor total gasto sempre que um item é adicionado ou removido.
* **Remoção de Itens:** É possível excluir uma despesa específica da lista clicando no ícone de lixeira, recalculando o total instantaneamente.
* **Ícones Dinâmicos:** A lista exibe um ícone correspondente à categoria selecionada para facilitar a identificação visual.
* **Design Responsivo:** A interface se adapta perfeitamente a diferentes tamanhos de tela (desktop, tablets e smartphones).

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com tecnologias essenciais de desenvolvimento web (Vanilla):

* **HTML5:** Estrutura semântica da página.
* **CSS3:** Estilização, layout utilizando Flexbox, responsividade (Media Queries) e customização de scrollbar.
* **JavaScript:** Lógica de manipulação do DOM (Document Object Model), captura de eventos do formulário e cálculos matemáticos.

## 🚀 Como executar o projeto

Como é um projeto front-end estático, não é necessária nenhuma instalação complexa.

1. Faça o clone deste repositório ou baixe os arquivos.
2. Certifique-se de que a pasta `img` contendo os ícones (`logo.svg`, `food.svg`, `remove.svg`, etc.) esteja no mesmo diretório dos arquivos principais.
3. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador padrão.
4. (Opcional) Para uma melhor experiência de desenvolvimento, você pode abrir o projeto usando a extensão **Live Server** no VS Code.

## 📁 Estrutura de Arquivos

* `index.html`: Contém toda a estrutura da página, formulários e a base da lista de despesas.
* `styles.css`: Arquivo responsável por toda a aparência visual, cores, fontes e adaptação para dispositivos móveis.
* `app.js`: Arquivo de script que contém a lógica de programação. Ele escuta o envio do formulário, cria novos elementos na tela dinamicamente (`<li>`, `<img>`, `<span>`), atualiza os valores e gerencia a exclusão de elementos.
