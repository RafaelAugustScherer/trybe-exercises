-- Banco a ser restaurado em: 

-- https://drive.google.com/uc?export=download&id=1pPNeUA4m6wcrK3wWk3jtJyAb2VSzsNWg

-- Escolham um representante para compartilhar a tela com o workbench e com o banco sakila restaurado
-- Discutam como vocês fariam cada query, focando-se em responder, para cada exercício:
	-- Por qual coluna devemos agrupar?
	-- Quais colunas devemos agregar? E com qual função?
	-- Como podemos escrever essa query? (Obs: A corretude das queries não é importante, vamos resolver na volta.)

--  Na tabela film, de quais linguagens (language_id) são os filmes com o MAIOR custo para substituir (replacement_cost)?

1. Agrupar por language_id
2. language_id e replacement_cost. Função MAX
3. SELECT language_id, MAX(replacement_cost) FROM sakila.film GROUP BY language_id;

-- Ainda em film, quais as N primeiras classificações (rating) de filmes que tem a maior SOMA de custo para substituir (replacement_cost)?

1. Agrupar por rating
2. rating, replacement_cost
3. SELECT rating FROM sakila.film GROUP BY rating ORDER BY SUM(replacement_cost) DESC LIMIT N;

-- Na tabela rental, qual cliente (customer_id) devolve (return_date, rental_date) filmes mais rápido, considerando a MÉDIA de tempo de aluguel por cliente? (Ps: considere a média em HORAS em que o filme ficou alugado)

1. Agrupar por customer_id
2. customer_id, return_date, rental_date
3. SELECT customer_id FROM sakila.rental GROUP BY customer_id ORDER BY AVG(DATEDIFF(return_date, rental_date));
