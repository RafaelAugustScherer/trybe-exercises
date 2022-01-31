# Block 21 - SQL Functions, JOINs and Normalization

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