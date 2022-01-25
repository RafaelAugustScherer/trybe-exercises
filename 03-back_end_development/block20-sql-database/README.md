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