DROP DATABASE IF EXISTS ecommerce;
-- Cria banco de dados
CREATE DATABASE ecommerce;

-- Seleciona banco de  dados para uso
USE ecommerce;

-- Cria tabela de usuário
CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
cpf VARCHAR(50) NOT NULL,
celular VARCHAR(50) NOT NULL,
nascimento DATE,
email VARCHAR(100) NOT NULL,
is_admin TINYINT DEFAULT 0,
senha VARCHAR(200) ,
sexo VARCHAR(3),
rg VARCHAR(50),
telefone VARCHAR(50),
receber VARCHAR(3),
instagram VARCHAR (100),
createdAt DATETIME,
updatedAt DATETIME
);

INSERT INTO users (nome,cpf,celular,nascimento,email,senha,sexo,rg ,telefone,receber,instagram,createdAt,updatedAt)
VALUES
("Paulo Oliveira","546.546.546-54","45 99978-4585", "1999-12-20","robertinho123@email.com","$2b$10$kXAFKVa2W1uE0zK9PaHGtuFNTntJqfqUfetPTK72mUZfVlAs3EVMu", "M","123456-SSP/RJ", "78 9999-85454","s","rb","2022-09-12","2022-09-12"),
("Ana Couto","123.456.456-45","71 9999-85454","1999-11-10","aninha123@email.com","123","F","123456-SSP/RJ","71 9999-85454","s","aninha123","2022-09-12","2022-09-12" ),
("Juliana Rios","123.456.879-56","54 99985-4525","1978-05-05","ju123@email.com","123","F","123456-SSP/SP","54 99985-4525","n",NULL, "2022-09-12","2022-09-12"),
("João Oliveira","123.456.879-85","54 99985-4500","1974-02-05","joaozinho123@email.com","123", "M","123456-SSP/MS","54 99985-4500","sim","joao123", "2022-09-12","2022-09-12"),
("Marcos Souza","123.456.579-85","14 99915-2520","2006-03-05","marquinhos123@email.com","123","M",NULL,NULL,"n","marquinho","2020-09-12","2022-09-12");

SELECT DATE_FORMAT(nascimento, "%d/%m/%y")
FROM users;

SELECT * FROM users;

DROP TABLE IF EXISTS emailsenha;
CREATE TABLE emailsenha (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
novoemail VARCHAR(100) NOT NULL,
confirmeemail VARCHAR(100) NOT NULL,
novasenha VARCHAR(200) ,
confirmesenha VARCHAR(200),
created_at DATETIME,
update_at DATETIME
modified_at DATETIME,
user_id INT UNSIGNED
);

INSERT INTO emailsenha (novoemail,confirmeemail,novasenha,confirmesenha,created_at,modified_at,user_id)
VALUES
("robertinho123@email.com.br","robertinho123@email.com.br","134","134","2022-09-12","2022-09-12",1);

SELECT * FROM emailsenha;

CREATE TABLE images(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
path VARCHAR(50) NOT NULL,
size INT UNSIGNED,
extension VARCHAR(10),
created_at DATETIME,
modified_at DATETIME,
user_id INT UNSIGNED
);
INSERT INTO images (path, size, extension, created_at, modified_at,user_id)
VALUES
("ebb55c5e6e.jpg","8642","jpg","2022-09-12","2022-09-12",1);

SELECT * FROM images;


DROP TABLE IF EXISTS enderecos;

CREATE TABLE enderecos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
rua VARCHAR(100) NOT NULL,
bairro VARCHAR(100) NOT NULL, 
numero VARCHAR(100) NOT NULL,
cidade VARCHAR(100) NOT NULL,
cep INT NOT NULL ,
complemento VARCHAR(50),
created_at DATETIME,
user_id INT UNSIGNED,
-- ligação de chave estrangeira 
FOREIGN KEY (user_id) REFERENCES users(id) 
);

INSERT INTO enderecos (rua,bairro,numero,cidade,cep,created_at,user_id)
VALUES
("Manoel Dias da Silva","Pojuca","500","Monte Verde / MG","45897654","2022-09-12",1),
("Dias da Silva","Piripiri","S/N","Verde/BA","45897154","2022-09-12",2),
("Dias da Silva","Piripiri","045","Verde/MG","85897654","2022-09-12",3),
("Pariaba da Silva","Piripiri","30","Brasilha","35897654","2022-09-12",4),
("Silva","Piripiri","004","Verde/RS","15897654","2022-09-12",1),
("Dias da Silva","Piuba", "450","Manaus","45895654","2022-09-12",1),
("Dias da Silva","Piripiri","450","Verde/RS","25897654","2022-09-12",2),
("Silva Paraiba","Morro", "200","Verde/RS","24897654","2022-09-12",3),
("Pernanbuco","Santos","450","Verde/RS","45897654","2022-09-12",2);

-- SELECT CONCAT(rua,", ", bairro  , ",", numero) FROM enderecos;

SELECT * FROM enderecos;

-- quantidade de pedidos por usuario id
SELECT u.id AS id,
u.nome AS nome,
COUNT(u.id) AS "Quantidade de Endereços Usuário"
FROM users AS u
INNER JOIN enderecos AS e ON u.id = e.user_id
GROUP BY u.id;



DROP TABLE IF EXISTS cartoes;
CREATE TABLE cartoes (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
nome VARCHAR(100) NOT NULL,
numero VARCHAR(50) NOT NULL,
cvc DECIMAL(3) NOT NULL,
data DATE ,
cpf VARCHAR(50) NOT NULL,
telefone VARCHAR(50),
created_at DATETIME,
modified_at DATETIME,
user_id INT UNSIGNED,

-- ligação de chave estrangeira 
FOREIGN KEY (user_id) REFERENCES users(id) 
);

INSERT INTO cartoes (nome,numero,cvc,data,cpf, telefone, created_at, modified_at, user_id)
VALUES
("Paulo Oliveira","4546 4654 2138 0545","454", "2025-05-08", "546.546.546-54","78 9999-85454","2022-09-12","2022-09-12",1),
("Antonio","4546 4656 2145 0545","451", "2035-05-18","123.456.456-45","78 9999-85454","2022-09-12","2022-09-12",2),
("Pedro Matos","4546 4656 2145 0545","471", "2025-10-08","123.456.879-56",null,"2022-09-12","2022-09-12",3),
("Paulo Oliveira","1246 4656 2145 0545","151", "2025-05-28","546.546.546-54","78 9999-85454","2022-09-12","2022-09-12",1);

SELECT * FROM cartoes;

SELECT DATE_FORMAT(data, "%m/%y")
FROM cartoes;
-- quantidade de pedidos por usuario id
SELECT u.id AS id,
u.nome AS nome,
COUNT(u.id) AS "Quantidade de Cartões Usuário"
FROM users AS u
INNER JOIN cartoes AS c ON u.id = c.user_id
GROUP BY u.id;




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
rating DECIMAL(10,2) UNSIGNED,
<<<<<<< HEAD
quantity INT

=======
lastChange DATETIME
>>>>>>> d408f7dced77d8b67d53363e8a7711f6b069cf46
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
('Calça Jeans Descolada Trybe KT', 'Calça Jeans Trybe', '/images/calcas/camisa-1.webp', '299.99', 'G', "Calças", 40, 3.99);
('Calça de veludo Revoada Vermelha Trybe KT', 'Calça de Veludo', '/images/calcas/calca-3.jpg', '299.99', 'M', "Calças", 50, 4.99);
('Calça Jeans Revoada Vermelha Trybe KT', 'Calça Jeans Revoada', '/images/calcas/calca-4.jpg', '399.99', 'M', "Calças", 40, 4.99);
('Calça Jeans Cubo Maravilha Nugetera Zy', 'Calça Jeans Neguetera', '/images/calcas/calca-5.webp', '399.99', 'M', "Calças", 40, 4.99);
('Calça de veludo Revoada Vermelha Trybe KT', 'Calça de Veludo', '/images/calcas/calca-6.jpg', '299.99', 'M', "Calças", 50, 4.99);


-- Tabela para pedidos
CREATE TABLE orders(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  create_at DATETIME ,
  status ENUM("processando", "a caminho", "entregue") DEFAULT "processando",
  user_id INT UNSIGNED,
  FOREIGN KEY (user_id) REFERENCES users(id)
);


-- Tabela intermediária de pedidos e produtos
CREATE TABLE orders_products(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  order_id INT UNSIGNED,
  product_id INT UNSIGNED,
  quantity INT UNSIGNED,
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
  senha VARCHAR(80) NOT NULL,
  lastChange DATETIME
);

INSERT INTO admins(username, senha) 
VALUES
  ("Admin01", "$2b$10$UWWIa/ThDWp/allafT5b3exONlhIqNNYuXxCoalrEXS21KE/GKp4i"),
  ("Admin02", "$2b$10$YWBXTTON11wyDkVqTVfPa.rQUnfdlC/l4BP4ph4h.j9PcOxWwBhnm");
  

SELECT * FROM  admins;

ALTER TABLE products 
ADD status 
ENUM ("Ativo", "Inativo")