CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(15) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (first_name, last_name, email, password)
VALUES ('George','Martin','gmartin@gmail.com','12345'),
	   ('Isaac','Asimov','IsaacAsi@hotmail.com','54321');
        
SELECT * FROM users;