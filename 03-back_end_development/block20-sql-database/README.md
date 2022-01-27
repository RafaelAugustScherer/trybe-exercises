# Block 20 - SQL Database

SQL (Structured Query Language) is the language used to create and manage relational databases. These databases store information in a table model with fields and IDs (identificators).

Example of an SQL Database Schema:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7e55dd3-04eb-46d6-9fdb-466c68c2dce4/Untitled.png)

The advantage of SQL over NoSQL (non-relational) is the presence of rules (**constraints**) that will limit the way data is stored in our database.

# Constraints

- NOT NULL - Does not accept null as a value;
- UNIQUE - Cannot repeat its value in the current table;
- PRIMARY KEY - Primary identifier of the row in the current table (UNIQUE && NOT NULL);
- FOREIGN KEY - Reference to a PRIMARY KEY in another table. Ensure the relational structure between tables;
- DEFAULT - Default value for column if `null` is passed;
- AUTO_INCREMENT - The value of the next row is equal to the biggest number in the column + 1.

# Entities

Objects or life forms in the real world represented in a table. Each entity has its own properties (columns). Example: 

```jsx
Entity: Person
Properties: Name, Height, Weight, Age, etc.
```

# Table Connection

## 1:1 (One-to-One)

One line in Table_A is a reference to another line in Table_B. Example:

```bash
| Table A | Table B |
| id_a    |         |
| id_b    < id_b    |
# id_b is present in both Tables. It is a 1:1 relationship.
```

## 1:N (One-to-Many)

One line in Table_A is referenced to another line in Table_B. Table_B can contain N lines from Table_A. Example:

```bash
| Table A | Table B |
| id_a    |         |
| id_b    < id_b    |
| Name    > Name    |
| Age     > Age     |
```

## N:N (Many-to-Many)

One line in Table_A is referenced to another line in Table_B. Table_B can contain N lines from Table_A and reference rows from Table_A to a Table_C. Table_B is now a Junction Table. Example:

```bash
| Table A | Table B | Table C |
| id_a    |         | id_c    |
| id_b    < id_b    > id_b    |
| Name    > Name    |         |
| Age     >         > Age     |
```

# Queries (Database Commands)

- **DDL - Data Definition Language**
    - `CREATE`: Create databases or tables (objects);
    - `ALTER`: To change a schema structure;
    - `DROP`: Delete objects;
    - `TRUNCATE`: Empty data in a table.
- **DML: Data Manipulation Language**
    - `SELECT`: List data in one or more tables;
    - `INSERT`: Insert data in a table;
    - `UPDATE`: Change data in a table;
    - `DELETE`: Delete table from a table.
    
    ## SELECT
    
    ```sql
    USE sakila;
    -- BASE --
    SELECT first_name FROM actor;
    | first_name |
    | PENELOPE   |
    
    -- CONCAT --
    SELECT CONCAT(first_name, ' ', last_name) FROM actor;
    | CONCAT(first_na... |
    | PENELOPE GUINESS   |
    
    -- AS --
    SELECT first_name AS 'First Name' FROM actor;
    | First Name |
    | PENELOPE   |
    
    -- DISTINCT --
    SELECT DISTINCT first_name FROM actor;
    # Return data that is not repeated
    
    -- COUNT --
    SELECT COUNT(DISTINCT first_name) FROM actor;
    # Return the COUNT(number) of DISTINCT first_name fields in actor
    
    -- LIMIT --
    SELECT first_name FROM actor LIMIT 10;
    # Limit to only 10 results
    
    -- OFFSET --
    SELECT first_name FROM actor OFFSET 10;
    # Jump the first 10 results
    
    -- ORDER BY --
    SELECT first_name, last_name FROM actor ORDER BY first_name [DESC]
    # Order alphabetically by first_name. Use DESC for reverse order
    
    SELECT first_name FROM actor ORDER BY first_name, last_name
    # ORDER BY can take more than one parameter as a secondary ordering factor
    ```
    
- **DCL: Data Control Language**
    - `GRANT`: Grant access to a user;
    - `REVOKE`: Remove access to a user.
- **TCL: Transactional Control Language**
    - `COMMIT`: Apply stashed changes to database;
    - `ROLLBACK`: Undo latest command;
    - `SAVEPOINT`: Create a ‘backup’ from the currrent database state;
    - `TRANSACTION`:

# Filters

## WHERE

`SELECT * FROM actor WHERE first_name = 'NICK';` - Select everything from actor table, then filter for `first_name` equals to `‘NICK’`;

### Operators

- =  - Equals
- > | < - Greater than | Smaller than
- ≥ | ≤ - Greater than or equal | Smaller than or equal
- <> - Different
- AND - `first_name = ‘NICK’ AND last_name = ‘STALLONE’`;
- OR - `first_name = ‘NICK’ OR first_name = ‘JOE’`;
- NOT - `first_name NOT ‘NICK’` | `postal_code IS NOT FALSE`;
- IS - FALSE = ‘’ | TRUE = any | NULL = `null` - `postal_code IS FALSE`;

### LIKE

```sql
first_name LIKE ‘AN%’; # Any string that starts with 'AN'

# % = Wildcard for anything
# _ = Wildcard for a single char

first_name LIKE '_S%' # Any string where the second letter is 'S'
```

### IN

```sql
WHERE first_name = 'PENELOPE'
OR first_name = 'NICK'
OR first_name = 'ED'
OR first_name = 'JENNIFER';

# same result as:
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');
```

### ANY

```sql
DELETE FROM BoxOffice WHERE movie_id = 8;
DELETE FROM BoxOffice WHERE movie_id = 6;

# same result as:
DELETE FROM BoxOffice
WHERE movie_id = ANY(SELECT id FROM Movies WHERE director = 'Andrew Staton');
```

### BETWEEN

```sql
# same result as:
WHERE length BETWEEN 50 AND 120;

# Strings:
WHERE name BETWEEN 'Italian' AND 'Mandarin' # Only Italian and Mandarin names

# Dates:
WHERE rental_date BETWEEN CAST('2005-05-27') AND CAST('2005-07-17');
```

## DATE

### Formats

`DATE` - YYYY-MM-DD

`DATETIME` - YYYY-MM-DD HH:MM:SS

`CAST(’2005-05-27’)` - Convert String to DATE/DATETIME for comparsion

`DATE(date_field)` - Convert DATETIME to DATE

### Querying

```sql
WHERE date_field = '2005-05-27';
WHERE YEAR(), MONTH(), DAY(), HOUR(), MINUTE(), SECOND();
```

---

# Table Manipulation

## Syntax

``table one`` - Backticks are **only** used around **table** or **column** names that contain spaces (not recommended) or **reserved** SQL words. 

`‘column value’` - Quotes are **only** used around **String** types.

## Options

```sql
SET sql_safe_updates=0 # Allow for some update forms that are considered insecure by MySQL
SET sql_select_limit=1000 # Max. number of rows for SELECT
```

## CREATE

Create data structures, such as databases or tables.

```sql
CREATE DATABASE [IF NOT EXISTS] test_db; # Create a new DB
USE test_db; # Set DB as "active"
CREATE TABLE [IF NOT EXISTS] test_table (
	field varchar(255), # String, up to 255 chars
	field2 varchar(40)
);

); # Create a new table in test_db
```

## INSERT

Insert data in the previously created structures.

```sql
INSERT INTO test_table (field, field2) VALUES
('value','value_2'),
('value_3','value_4');
# This way you can insert as many values as you want in a table

INSERT IGNORE INTO other_table (unique_field, string_field) VALUES
(1, 'John'),
(1, 'Doe'); # This line will be ignored, since it will create an error for unique_field
```

<aside>
💡 `AUTO INCREMENT` fields do not need to be specified in `INSERT`. The field can be ignored

</aside>

### INSERT SELECT

We can insert data from another table as well, to create temporary test tables for example. **Pay attention to data types in both tables, they need to match!**

```sql
INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.staff;
```

## UPDATE

Update already inserted data.

```sql
# SET SQL_SAFE_UPDATES = 0
# This allows data to be updated without referencing the id in the condition

UPDATE sakila.staff
SET first_name = 'Rannveig', last_name = 'Jordan'
WHERE first_name = 'Ravein';

# Mass update
UPDATE sakila.customer
SET active = (
CASE address_id 
	WHEN 5 THEN 0
  WHEN 6 THEN 0 
  WHEN 68 THEN 1
  ELSE active
END
);

```

## DELETE | TRUNCATE

Delete data from the structures.

```sql
DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

DELETE * FROM table_name;
# Same as:
TRUNCATE table_name;
```

### Foreign Keys, ON DELETE

```sql
ON DELETE NO ACTION; # Ignore, just do not delete
ON DELETE RESTRICT; # Generate error, block
ON DELETE SET NULL; # Set null whenever there is a dependency (FK)
ON DELETE CASCADE; # Delete FKs wherever it is used

CREATE TABLE table1 (
	...
	FOREIGN KEY (actor_id)
		REFERENCES Actor(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);
```

<aside>
👉 Whenever you need to delete a Foreign Key ON DELETE RESTRICT, you will need to manually DELETE it where it is being referenced.

</aside>

## ALTER

```sql
ALTER TABLE film_actor
DROP COLUMN actor_id
ADD film_name varchar(255);
```

## DROP

Delete data strcutures.

```sql
DROP TABLE table_name;
DROP DATABASE db_name;
```