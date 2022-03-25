CREATE DATABASE ts_dev;

CREATE TABLE posts (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
    author VARCHAR(60) NOT NULL,
    category VARCHAR(50) NOT NULL,
    creation_date DATE DEFAULT (CURDATE()),
    PRIMARY KEY (id)
);

INSERT INTO posts (title, author, category) VALUES ('Teste', 'Teste Author', 'Categoria');