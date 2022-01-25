# 1
SELECT Pieces.Name, Price FROM Provides INNER JOIN Pieces ON Pieces.Code = Piece WHERE Provider='RBT';

# 2
SELECT Pieces.Name, Provider, Price FROM Provides INNER JOIN Pieces ON Pieces.Code = Piece ORDER BY Price DESC LIMIT 5;

# 3
SELECT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;

# 4
SELECT Pieces.Name, Provider, Price FROM Provides INNER JOIN Pieces ON Pieces.Code = Piece WHERE Provider = 'HAL' ORDER BY Price DESC;

# 5
SELECT COUNT(DISTINCT Provider) FROM Provides WHERE Piece = 1;