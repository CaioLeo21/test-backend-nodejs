# Caio Leandro Valença Silva

## Instalação das dependências

Digitar ` npm i ` no terminal para instalar as dependências necessárias.

--- 

## Funcionamento

Digitar ` npm start ` no terminal para iniciar a aplicação.

### Rotas

Cadastrar produto: `http://localhost:3000/v1/products`

``` Exemplo: 
{
     "title": "teste",
     "description": "teste",
     "price": 10,
     "category": "teste"
} 
```

Listar produtos: `http://localhost:3000/v1/products`

Listar produtos por categoria: `http://localhost:3000/v1/products/category/:category`

Listar produtos por nome: `http://localhost:3000/v1/products/title/:title`

Atualizar produto: `http://localhost:3000/v1/product/:title`

``` Exemplo: 
{
     "title": "teste2,
     "description": "teste2,
     "price": 2,
     "category": "teste2
} 
```

Atualizar categoria do produto: `http://localhost:3000/v1/category/:title`

``` Exemplo: 
{
     "category": "teste3
} 
```

Deletar produto: `http://localhost:3000/v1/product/:title`






