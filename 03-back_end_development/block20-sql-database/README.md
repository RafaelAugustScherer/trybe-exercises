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

# Basic Commands

- CREATE DATABASE `db_name` - Create a new database;
- USE `database_name` - Define in which database to execute next commands;
- SHOW TABLES - Show every table in current database;
- SELECT * FROM `table_name` - Show all data stored in a table;
- DESCRIBE `table_name` - Visualize table schema and its constraints;