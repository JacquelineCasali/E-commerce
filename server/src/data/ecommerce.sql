-- Cria banco de dados
CREATE DATABASE ecommerce;

-- Seleciona banco de  dados para uso
USE ecommerce;

-- Cria tabela de usuário
CREATE TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    cpf BIGINT NOT NULL,
    rg BIGINT,
    phone BIGINT,
    email VARCHAR(100) NOT NULL,
    confirm_email VARCHAR(100),
    new_email VARCHAR(100),
    birthdate DATE,
    password VARCHAR(100)NOT NULL
);

INSERT INTO users (name, cpf, rg, phone, email, confirm_email,new_email,birthdate,password)
VALUES 
	("Roberto Silva", "11122233344","","5531988554431","roberto@email.com","roberto@email.com","roberto2@email.com","1958-11-15","$2b$10$uZ55gOlX4D.O4/baKYnT.eFbxxmUSHbtw.tVV.zSvRojG2cpKgF3q"),
  ("Andre Carlos", "11122233344","","5531988554431","andre@email.com","andre@email.com","dede@email.com","1993-01-15","$2b$10$uZ55gOlX4D.O4/baKYnT.eFbxxmUSHbtw.tVV.zSvRojG2cpKgF3q"),
	("Julio Mesquita", "11122233344","","5531988554431","jj@email.com","jj@email.com","jlm@email.com","1990-12-15","$2b$10$uZ55gOlX4D.O4/baKYnT.eFbxxmUSHbtw.tVV.zSvRojG2cpKgF3q");


-- Tabela para produtos
CREATE table products (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
description VARCHAR(200),
image VARCHAR(100),
price DECIMAL(10,2) UNSIGNED NOT NULL,
size VARCHAR(100),
department VARCHAR(100),
inventory INT UNSIGNED DEFAULT 0,
rating DECIMAL(10,2) UNSIGNED
);

INSERT INTO products (`name`, `description`, `image`, `price`, `size`, `department`, `inventory`, `rating`)
 VALUES
('camisa oversized black', 'Camisa oversized com gola careca e manga 7/8. Silk frontal e traseiro.', '/images/camisas/camisa-1.webp', '199.99', 'M',"Camisetas" , 50, 4.99),
('camisa oversized green', 'Camisa lynes verde', '/images/camisas/camisa-2.webp', '199.99', 'M', "Camisetas", 50, 4.99),
('camisa oversized black', 'camisa oversized com estampa approve', '/images/camisas/camisa-3.webp', '179.99', 'G', "Camisetas", 40, 6.99),
('camisa oversized dark blue', 'camisa oversized com estampa approva azul escuro', '/images/camisas/camisa-4.webp', '189.00', 'M', "Camisetas", 50, 3.99),
('camisa oversized planet green', 'camisa oversized com estampa colorida', '/images/camisas/camisa-5.webp', '188.88', 'G', "Camisetas", 50, 3.99),
('camisa oversized approve beyond lines chumbo', 'camisa oversized com estampa branca', '/images/camisas/camisa-6.webp', '199.99', 'M', "Camisetas", 50, 6.99),
('camisa bold approve campping', 'camisa campping preta ', '/images/camisas/camisa-7.webp', '199.99', 'M', "Camisetas", 50, 6.99),
('camisa oversized approve campping II off white', 'camisa campping branca', '/images/camisas/camisa-8.webp', '199.99', 'G', "Camisetas", 40, 6.99);


-- Tabela para pedidos
CREATE TABLE orders(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  create_at DATETIME NOT NULL,
  status ENUM("processando", "a caminho", "entregue") DEFAULT "processando",
  user_id INT UNSIGNED,
  FOREIGN KEY (user_id) REFERENCES users(id)
);


-- Tabela intermediária de pedidos e produtos
CREATE TABLE orders_products(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  order_id INT UNSIGNED,
  product_id INT UNSIGNED,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Insere um ou mais produtos
INSERT INTO orders (create_at, status, user_id)
VALUES 
	("2022-07-28 21:29:00", "entregue", 1),
    ("2022-07-28 21:29:00", "entregue", 2),
    ("2022-07-28 21:29:00", "processando", 2),
    ("2022-07-28 21:29:00", "a caminho", 2);
    
-- Insere um ou mais produtos
INSERT INTO orders_products (order_id, product_id)
VALUES 
	(1, 1),
    (1, 2),
    (2, 1),
    (2, 2),
    (3, 2);
    
CREATE TABLE department(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);

INSERT INTO department (name)
VALUES 
	("Camisetas"),
    ("Calças"),
    ("Jaquetas"),
    ("Acessórios");
    
SELECT * FROM  department;

CREATE TABLE admins(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  senha VARCHAR(80) NOT NULL
);

INSERT INTO admins(username, senha) 
VALUES
  ("Admin01", "$2b$10$XOuWjgOKpyRIqrXr5kbjieR1k4CmAwgl.QWsPBOYIGVCImWTjltdu"),
  ("Admin02", "$2b$10$YWBXTTON11wyDkVqTVfPa.rQUnfdlC/l4BP4ph4h.j9PcOxWwBhnm");
  

SELECT * FROM  admins;

ALTER TABLE products 
ADD status 
ENUM ("Ativo", "Inativo")