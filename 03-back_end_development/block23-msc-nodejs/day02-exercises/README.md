# Agora, a prática
Você vai desenvolver uma aplicação de busca de CEP, chamada cep-lookup . A aplicação fornecerá um serviço de busca e cadastro de CEPs em um banco de dados. Como bônus, ao invés de cadastrar novos CEPs manualmente, a aplicação consultará uma API externa para obter os dados do CEP desejado.

Utilize o banco de dados MySQL. Execute a seguinte query para criar o banco e a tabela:

```sql
CREATE DATABASE IF NOT EXISTS cep_lookup;

USE cep_lookup;

CREATE TABLE IF NOT EXISTS ceps (
  cep VARCHAR(8) NOT NULL PRIMARY KEY,
  logradouro VARCHAR(50) NOT NULL,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL
);
```
Bons estudos!

1. Crie uma nova API utilizando o express
2. A aplicação deve ser um pacote Node.js
3. Dê ao pacote o nome de `cep-lookup`
4. Utilize o express para gerenciar os endpoints da sua aplicação
5. A aplicação deve ter a rota `GET /ping` , que retorna o status `200 OK` e o seguinte JSON:
```json
{ "message": "pong!" }
```

5. A aplicação deve escutar na porta 3000
6. Deve ser possível iniciar a aplicação através do comando `npm start` .
7. Crie o endpoint `GET /cep/:cep`
8. O endpoint deve receber, no parâmetro `:cep` , um número de CEP válido.
9. O CEP precisa conter 8 dígitos numéricos e pode ou não possui traço.
  * **Dica** Utilize o regex `\d{5}-?\d{3}` para validar o CEP.
10. Caso o CEP seja inválido, retorne o status ```400 Bad Request``` e o seguinte JSON:
```json
  { "error": { "code": "invalidData","message": "CEP inválido" } }
```
11. Caso o CEP seja válido, realize uma busca no banco de dados.

12. Caso o CEP não exista no banco de dados, retorne o status 404 Not Found e o seguinte JSON:
```json
  { "error": { "code": "notFound", "message": "CEP não encontrado" } }
```

13. Caso o CEP exista, retorne o status `200 OK` e os dados do CEP no seguinte formato:
```json
  {
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```

14. Crie o endpoint `POST /cep`

15. O endpoint deve receber a seguinte estrutura no corpo da requisição:
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```

16. Todos os campos são obrigatórios

17. Utilize o Joi para realizar a validação. Em caso de erro, retorne o status `400 Bad Request` , com o seguinte JSON:
```json
{ "error": { "code": "invalidData", "message": "<mensagem do Joi>" } }
```

18. O CEP deve ser composto por 9 dígitos com traço.
  * **Dica** : Utilize o seguinte regex para validar o CEP: `\d{5}-\d{3}`

19. Se o CEP já existir, retorne o status `409 Conflict` com o seguinte JSON:
```json
"error": { "code": "alreadyExists", "message": "CEP já existente" }
```

20. Se o CEP ainda não existir, armazene-o no banco de dados e retorne o status `201 Created` com os dados do novo CEP no seguinte formato:
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```