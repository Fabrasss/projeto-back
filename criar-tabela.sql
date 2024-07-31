
--criando tabelas de projeto-backend de acordo com requisitos
CREATE SCHEMA `projeto-back` ; 

CREATE TABLE `projeto-back`.`usuarios` ( 
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `surname` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `passaword` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE `projeto-back`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `slug` VARCHAR(45) NULL,
  `use_in_menu` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

  