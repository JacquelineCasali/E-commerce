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
birthdate  DATE,
email VARCHAR(100) NOT NULL,
is_admin TINYINT DEFAULT 0,
senha VARCHAR(100) NOT NULL
);


INSERT INTO users (nome,cpf,celular,birthdate,email,senha)
VALUES
("Paulo Oliveira","546.546.546-54","45 99978-4585", null,"robertinho123@email.com","123"),
("usersAna Couto","123.456.456-45","71 9999-85454","1999-11-10","aninha123@email.com","123"),
("Juliana Rios","123.456.879-56","54 99985-4525","1978-05-05","ju123@email.com","123"),
("João Oliveira","123.456.879-85","54 99985-4500","1974-02-05","joaozinho123@email.com","123"),
("Marcos Souza","123.456.579-85","14 99915-2520","2006-03-05","marquinhos123@email.com","123");

UPDATE users SET 
birthdate= "1999-12-20"
WHERE id=1;

SELECT * FROM users;

DROP TABLE IF EXISTS enderecos;

CREATE TABLE enderecos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
rua VARCHAR(100) NOT NULL,
bairro VARCHAR(100) NOT NULL, 
numero VARCHAR(5) NOT NULL,
cidade VARCHAR(100) NOT NULL,
cep INT NOT NULL ,
complemento VARCHAR(50),
user_id INT UNSIGNED,
-- ligação de chave estrangeira 
FOREIGN KEY (user_id) REFERENCES users(id) 
);

INSERT INTO enderecos (rua,bairro,numero,cidade,cep,user_id)
VALUES
("Manoel Dias da Silva","Pojuca","500","Monte Verde / MG","45897654",1),
("Dias da Silva","Piripiri","S/N","Verde/BA","45897154",2),
("Dias da Silva","Piripiri","045","Verde/MG","85897654",3),
("Pariaba da Silva","Piripiri","30","Brasilha","35897654",4),
("Silva","Piripiri","004","Verde/RS","15897654",5),
("Dias da Silva","Piuba", "450","Manaus","45895654",6),
("Dias da Silva","Piripiri","450","Verde/RS","25897654",7),
("Silva Paraiba","Morro", "200","Verde/RS","24897654",8),
("Pernanbuco","Santos","450","Verde/RS","45897654",9);

SELECT CONCAT(rua,", ", bairro  , ",", numero) FROM enderecos;

SELECT * FROM enderecos;

DROP TABLE IF EXISTS cartoes;
CREATE TABLE cartoes (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
numero_cartao VARCHAR(50) NOT NULL,
cvc DECIMAL NOT NULL,
data DATE NOT NULL,
user_id INT UNSIGNED,
-- ligação de chave estrangeira 
FOREIGN KEY (user_id) REFERENCES users(id) 
);

INSERT INTO cartoes (numero_cartao,cvc,data,user_id)
VALUES
("4546 4654 2138 0545","454", "2025-05-08",1),
("4546 4656 2145 0545","451", "2035-05-18",2),
("4546 4656 2145 0545","471", "2025-10-08",3),
("1246 4656 2145 0545","151", "2025-05-28",4),
("0546 4658 2156 0545","451", "2029-09-08",5),
("4546 4656 2145 1545","000", "2023-05-08",6),
("4546 4656 2145 0545","451", "2028-05-08",7),
("4546 4656 2145 0545","451", "2035-05-30",8),
("0000 4656 2145 0545","111", "2025-05-25",9);
SELECT * FROM cartoes;

DROP TABLE IF EXISTS orders;

CREATE TABLE orders(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
pedido VARCHAR (200),
-- data que foi criado o pedido
status ENUM("processando", "a caminho" ,"entregue") DEFAULT "processando",
create_at DATETIME NOT NULL,
valor DECIMAL(5,2),
user_id INT UNSIGNED,
-- ligação de chave estrangeira 
FOREIGN KEY (user_id) REFERENCES users(id) 
);

INSERT INTO orders (pedido,status,create_at,valor,user_id)
VALUES
("4546","a caminho", "2022-09-12","300,00",1 ),
("2145 ","processando", "2022-09-08","30,00",2),
("0145","entregue", "2021-10-08","150,00",3),
("1246 ","entregue", "2021-05-28","250,00",4),
("4510","entregue","2021-09-08","350,00",5),
("4542","entregue","2020-05-08", "500,00",6),
("2145","entregue", "2020-04-18","800,00",7),
("4532", "entregue", "2019-05-30","490,00",8),
("0002", "entregue", "2019-02-25","100,00",9),
("8795","entregue","2022-07-28 21:29:00","854,00",1),
("1235","entregue","2022-07-28 21:29:00","20,00",1),
("0005","processando","2022-09-15 21:29:00","580,00",1),
("8458","a caminho","2022-07-28 21:29:00","50,00",2),
("1548","processando","2022-07-28 21:29:00","990,00",2);

SELECT * FROM orders;


SELECT CONCAT("R$" , valor)  FROM orders;


CREATE TABLE creditos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
historico varchar(50),
tipodelancamento varchar(100), 
valor varchar(50),
user_id INT UNSIGNED,
-- ligação de chave estrangeira 
FOREIGN KEY (user_id) REFERENCES users(id) 
);

-- usuarios concatenando com endereco
SELECT * FROM users INNER JOIN enderecos ON users.id =enderecos.user_id;
-- usuarios concatenando com cartao
 SELECT * FROM users INNER JOIN cartoes ON users.id =cartoes.user_id;
-- usuarios concatenando com pedidos
SELECT * FROM users INNER JOIN orders ON users.id =orders.user_id;



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


INSERT INTO products (name, description, price,size, inventory,rating)
VALUES 
	("Camisa do Flamengo 2022/2023", "Camiseta oficial do Clube Regatas Flamengo",199.99,"M",50,4.99),
	("Camisa do Flamengo 2022/2023", "Camiseta oficial do Clube Regatas Flamengo",199.99,"M",50,4.99);

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