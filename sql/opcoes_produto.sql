CREATE TABLE `opcoes_produto` (
  `id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `shape` enum('square','circle') DEFAULT 'square',
  `radius` varchar(45) DEFAULT NULL,
  `type` enum('text','color') DEFAULT 'text',
  `values` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `chave_opcoes_idx` (`product_id`),
  CONSTRAINT `chave_opcoes` FOREIGN KEY (`product_id`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci