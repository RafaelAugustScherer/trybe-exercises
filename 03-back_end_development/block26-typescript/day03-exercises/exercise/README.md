# Atividade:

## Objetivos:
- Criar um CRUD completo de Blog Posts .
- Listar posts por autor, categoria ou data de criação.

## Rotas:
- Uma rota que lista todos os posts;
- Uma rota que lista um único post por meio de seu id ;
- Uma rota que permite cadastrar um novo post;
- Uma rota que permite editar o registro de um post cadastrado a partir de seu id ;
- Uma rota que permite deletar um post a partir de seu id .
- Uma rota que recebe via query params o autor, a categoria ou a data de criação e lista todos os posts que se encaixem no filtro;

## Regras:
- Um post deve possuir as propriedades id , título, nome do autor, nome da categoria e data de criação;
- Nenhuma propriedade de um post pode ser nula ou vazia;
- O nome do autor deve possuir pelo menos 3 caracteres;
- A nome da categoria deve possuir pelo menos 3 caracteres;
- A query param de data de criação deve ser no formato: aaaa-mm-dd;