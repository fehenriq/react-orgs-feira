# React Feira

Site de uma feira feita em React

## 🔨 Funcionalidades do projeto

Foi criado 3 páginas [login, feira e carrinho]

### Login  
Na página de login temos um simples formulário onde é possível inserir o nome e o saldo  
O botão avançar fica desabilitado enquanto o saldo for menor ou igual a 0

### Feira  
Na página da feira temos um navbar com logo e ícone de carrinho (desabilitado)  
Logo abaixo temos uma mensagem personalizada com o nome da pessoa e o saldo atual  
Na seção de produtos são exibidos uma lista com os produtos [foto, nome, preço(kg)]  
Em cada produto nós temos dois ícones [- (desabilitado) e +] e o número atual desse item no carrinho  
Quando nós adicionamos um item no carrinho (+) o botão de - e o ícone do carrinho são habilitados  
O ícone do carrinho quando habilitado exibe um contador de itens no carrinho e possibilita o click

### Carrinho
Quando chegamos no carrinho vemos um botão de voltar e abaixo dele a lista de itens  
Na lista de itens podemos adicionar ou remover  
Abaixo dos itens há um select com as formas de pagamento  
Também temos uma lista com 3 itens:
- total no carrinho: soma de todos os itens adicionados
- saldo atual: saldo inicial - compras já realizadas (se houver)
- saldo total: saldo que restará se realizar a compra dos itens que estão no carrinho 

Após escolher os itens, o usuário poderá realizar a compra, onde é exibido um alerta de sucesso  
O botão comprar será desabilitado se o total no carrinho for maior que o saldo atual  
A forma de pagamento será desabilitada se o usuário remover todos os itens do carrinho

## ✔️ Técnicas e tecnologias utilizadas

- `Javascript`
- `React`
- `MaterialUI`
- `styled-components`
- `ContextAPI`

## 🛠️ Para abrir e rodar o projeto:

É necessário ter instalado no PC:
- node.js
- npm
- git  

Execute os comandos:
- npm install 
- npm start
