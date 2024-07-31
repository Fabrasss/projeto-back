CREATE TABLE usuarios(
	id int primary key,
	firstname VARCHAR(45),
	surname VARCHAR(45),
	email VARCHAR(45),
	password VARCHAR(45)
);

CREATE TABLE categorias(
	id int primary key,
	name VARCHAR(45),
	slug VARCHAR(45),
	use_in_menu VARCHAR(45)
);

CREATE TABLE produtos(
	Id int primary key,
	enabled INT,
	name VARCHAR(45),
	slug VARCHAR(45),
	use_in_menu INT,
	stock INT,
	description VARCHAR(45)
	price INT,
	price_with_discount INT
);

CREATE TABLE imagens_do_produto(
	id int primary key,
	product_id
);
