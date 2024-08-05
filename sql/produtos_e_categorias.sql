CREATE TABLE `fabras`.`produtos_e_categoria` (
  `product_id` INT NULL,
  `category_id` INT NULL,
  INDEX `chave_PT_idx` (`product_id` ASC) VISIBLE,
  INDEX `chave_categorias_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `chave_PT`
    FOREIGN KEY (`product_id`)
    REFERENCES `fabras`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `chave_categorias`
    FOREIGN KEY (`category_id`)
    REFERENCES `fabras`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    