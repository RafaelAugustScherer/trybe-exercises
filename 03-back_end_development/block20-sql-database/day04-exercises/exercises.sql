# 1
INSERT INTO Movies(title, director, year, length_minutes) VALUES
('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

# 2
INSERT INTO BoxOffice VALUES 
(9, 6.8, 450000000, 370000000);

# 3
UPDATE Movies
SET director = 'Andrew Staton'
WHERE title = 'Procurando Nemo';

# 4
UPDATE Movies
SET title = 'Ratatouille', year = 2007
WHERE id = 3;

# 5
INSERT INTO BoxOffice VALUES 
((SELECT id FROM Movies WHERE title='Monstros SA'), 8.5, 300000000, 250000000),
((SELECT id FROM Movies WHERE title='Os Incríveis'), 7.4, 460000000, 510000000),
((SELECT id FROM Movies WHERE title='WALL-E'), 9.9, 290000000, 280000000);

# 6
DELETE FROM BoxOffice
WHERE movie_id = (SELECT id FROM Movies WHERE title='WALL-E');

DELETE FROM Movies
WHERE title = 'WALL-E';

# 7
DELETE FROM BoxOffice
WHERE movie_id = ANY(SELECT id FROM Movies WHERE director = 'Andrew Staton');

DELETE FROM Movies
WHERE director = 'Andrew Staton';