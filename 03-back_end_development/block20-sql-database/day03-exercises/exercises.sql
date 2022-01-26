# 1
SELECT name FROM Pecas WHERE name LIKE 'GR%';

# 2
SELECT * FROM Fornecimentos WHERE peca = 2 ORDER BY fornecedor;

# 3
SELECT * FROM Fornecimentos WHERE fornecedor LIKE '%N%';

# 4
SELECT * FROM Fornecedores WHERE name LIKE '%LTDA';

# 5
SELECT COUNT(*) FROM Fornecedores WHERE code LIKE '%F%';

# 6
SELECT * FROM Fornecimentos
WHERE preco BETWEEN 15 AND 40
ORDER BY fornecedor;

# 7
SELECT COUNT(*) FROM Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';