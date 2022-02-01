1. SELECT title, bo.domestic_sales, bo.international_sales
   FROM Movies
   JOIN BoxOffice bo
   ON id = bo.movie_id;

2. SELECT title, bo.domestic_sales, bo.international_sales
   FROM Movies
   JOIN BoxOffice bo
   ON id = bo.movie_id
   WHERE bo.international_sales > bo.domestic_sales;

3. SELECT title, bo.rating
   FROM Movies
   JOIN BoxOffice bo
   ON id = bo.movie_id
   ORDER BY bo.rating DESC;

4. SELECT name, location, title, director, year, length_minutes
   FROM Theater t
   LEFT JOIN Movies mo
   ON t.id = mo.theater_id
   ORDER BY name;

5. SELECT title, director, year, length_minutes, name, location
   FROM Theater t
   RIGHT JOIN Movies mo
   ON  t.id = mo.theater_id
   ORDER BY t.name;