# Block 21 - SQL Functions, JOINs and Normalization

<details>
<summary>Part 1 - Functions & Variables</summary>

# Variables

Set a variable for current session.

```sql
SET @age = 18;
IF (@age ...) # Can be used this way
```

# FUNCTIONS

Functions are used to make it easier to find and manipulate the stored information.

## String Manipulation

Use these functions to manipulate strings. Very similar behaviour to some JavaScript functions.

```sql
SELECT UCASE('String'); # STRING
SELECT LCASE('String'); # string
SELECT REPLACE('John Doe', 'o', '0'); # J0hn Doe

SELECT LEFT('John D03', 4); # John
SELECT RIGHT('J0hn Doe', 3); # Doe
SELECT SUBSTRING('Johnny Dope', 4, 7); # 'nny Dop'
SELECT CHAR_LENGTH('Lil Johnny'); # 10
```

### Manipulation with real data!

```sql
SELECT UCASE(title) **FROM sakila.film**;
```

## IF, CASE - Conditionals

These conditionals work as in every language, what changes is the syntax that is expressed below.

```sql
SELECT IF ([condition], [if_true], [if_false]);
SELECT title,
IF (rental_rate >= 3.99, 'Expensive', 'Affordable') AS Price Condition
FROM sakila.film;

SELECT title,
	CASE
		WHEN rental_rate >= 3.99 THEN 'Expensive'
		WHEN rental_rate >= 2.99 THEN 'Affordable'
		ELSE 'Cheap'
	END AS Price Condition
FROM sakila.film;

```

---

## Math Operations

### MIN, MAX, AVG, SUM, COUNT

```sql
SELECT MIN(rental_rate) FROM sakila.film; # Lowest value of field in every line
SELECT MAX() ... # Highest value
SELECT AVG() ... # Average value
SELECT COUNT() ... # Number of values
```

### DIV, MOD

```sql
SELECT 10 DIV 3; # 3 (Integer of division operation)

`SELECT 10 MOD 3; # 1 (Rest of division operation)
```

`SELECT 10 DIV 3 -- 3` - When you want a `/` operation to return an INTEGER value

`SELECT 10 MOD 3 -- 1` - When you want the rest of a `/` operation

### ROUND, CEIL, FLOOR

```sql
ROUND(10.5); # 11
ROUND(10.4); # 10
CEIL(10.2); # 11
FLOOR(10.8); # 10
```

### POW, SQRT

Power (2²) or Square Root (√16)

```sql
POW(2, 2); # 4
SQRT(16); # 4
```

### RAND

Generates a random number between 0 and 1.

```sql
RAND(); # 0.0 - 1.0
```

---

## DATE / DATETIME

### CURRENT_DATE, NOW

Current timestamp.

```sql
CURRENT_DATE(); # YYYY-MM-DD
NOW() || current_timestamp; # YYYY-MM-DD HH:MM:SS
```

### TIMEDIFF, DATEDIFF

Difference between first and second values

```sql
SELECT DATEDIFF('2020-01-31', '2020-01-01'); # 30 (Days)
SELECT TIMEDIFF('08:30:10', '09:30:10'); # -01:00:00
```

---

# GROUP BY

Group data by a field. Do not repeat data with the same value in this field.

```sql
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;
# The COUNT(*) will show the number of actors with the same first_name in the table

SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;
# The average length in minutes of films grouped by rating
```

## HAVING

```sql
SELECT first_name, COUNT(*) AS actor_names
FROM sakila.actor
GROUP BY first_name
HAVING actor_names > 2;
# Only names that appear more than 2 times in the table will be shown
```

---
</details>

<details>
<summary>Part 2 - JOINs</summary>

# INNER JOIN (JOIN)

```sql
USE sakila;
SELECT city, country_id, country.country FROM city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id;
# Return the city information with its country based on the country_id that
# receive similar value on both tables.
```

# LEFT JOIN | RIGHT JOIN

```sql
SELECT c.customer_id, a.actor_id, c.first_name, a.last_name
FROM customer AS c
LEFT JOIN actor as a
ON c.first_name = a.first_name;
# Return the intersection between the first and second table, from the first
# where first_name is equal on both
# LEFT JOIN = Table on the left (first) is the reference, the other is secondary
# RIGHT JOIN = Table on the right (second) is the reference, the other is secondary
```

# SELF JOIN (INNER JOIN)

```sql
USE hr ('https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/hr-cebf8bc2a5bb252bc470ae28943604c6.sql');
SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Employee Name",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Manager Name"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID;
# Return the Employee name and its respective manager
# Only return the lines where Employee has a MANAGER_ID
```
</details>

<details>
<summary>Part 3 - Database Design</summary>

# Summary

Database Design is the process of **modeling** a database based in a demand or an issue.

If you are a Web Developer these will be made in the start of a new project or ocasionally to remodelate the tables to adapt something.

If you are a Database Administrator (DBA) these can be constantly made for maintence or performance issues to re-structure a database. You’re going to need to know how this process works in every kind of database, such as SQL Server, PostgreSQL, MySQL, SQLite, etc.

If you are a Data Scientist, you are rarely going to use these to create new structures, but to structure queries for multi-purpose researches.

# Steps

- [ ]  Identify **entities**, **attributes** and **relationships** in the demand’s description
- [ ]  Build an **entity-relationship diagram** to represent the identified entities
- [ ]  Create a database to contain the tables
- [ ]  Create and modelate the tables based on the model created in Step 2

## Example

We need to store music albums information in a catalog. The information that we need to store for each album are: **Title, Price, Musical Style, Tracks.**

We should also store in the same database informations realted to **artists**. Each artist can have more than one album related.

### Entities & Attributes

- **Album:** album_id, title, price, style_id, artist_id;
- **Artist:** artist_id, name;
- **Musical Style:** style_id, name;
- **Track:** track_id, name, album_id.

### Relationships

- 1 Artist to N Albums (1..N);
- 1 Musical Style to N Albums (1..N);
- 1 Album to N Tracks (1..N);
- [x]  Identify **entities**, **attributes** and **relationships** in the demand’s description

---

### Entity-relationship Diagram

I made the diagram below using [draw.io](http://draw.io). You can also find it [here](https://drive.google.com/file/d/1H7vAE_adqDFGZ8xbi58W21pCpPe6VNrn/view?usp=sharing) (probably). You can also build your own diagram through MySQL Workbench, in the **Models** session.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f4bc9880-c981-44f6-a6f3-4b5cf0942127/Untitled.png)

- [x]  Build an **entity-relationship diagram** to represent the identified entities

---

### Creating the database

```sql
CREATE DATABASE IF NOT EXISTS albums;
USE albums;
```

- [x]  Create a database to contain the tables

---

### Normalization

To normalize a database is to remove redundancy and repeated data from the tables.

Instead of saving multiple times the Artist name as VARCHAR in the Album table, we can create a new table **Artist** that contains the name and other artist information.

<aside>
❌ Table: Album
| album_id | name | artist | born_date |

</aside>

<aside>
✅ Table: Album
| album_id | name | artist_id |

Table: Artist
| artist_id | name | born_date |

</aside>

### Creating the tables

```sql
CREATE TABLE musical_style IF NOT EXISTS (
	style_id: INTEGER NOT NULL AUTO_INCREMENT,
	name: VARCHAR(50) NOT NULL,
	CONSTRAINT PRIMARY KEY(style_id)
);

CREATE TABLE artist IF NOT EXISTS (
	artist_id: INTEGER NOT NULL AUTO_INCREMENT,
	name: VARCHAR(70) NOT NULL,
	CONSTRAINT PRIMARY KEY(artist_id)
);

CREATE TABLE album IF NOT EXISTS (
	album_id: INTEGER NOT NULL AUTO_INCREMENT,
	title: VARCHAR(70) NOT NULL,
	price: DOUBLE,
	style_id: INTEGER,
	artist_id: INTEGER,
	CONSTRAINT PRIMARY KEY(album_id),
	FOREIGN KEY (style_id) REFERENCES musical_style (style_id),
	FOREIGN KEY (artist_id) REFERENCES artist (artist_id)
);

CREATE TABLE track IF NOT EXISTS (
	track_id: INTEGER NOT NULL AUTO_INCREMENT,
	name: VARCHAR(70) NOT NULL,
	album_id: INTEGER,
	CONSTRAINT PRIMARY KEY(track_id),
	FOREIGN KEY (album_id) REFERENCES album (album_id)
);
```

- [x]  Create and modelate the tables based on the model created in Step 2

---
</details>