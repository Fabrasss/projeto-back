CREATE TABLE `imagens_produtos` (
  `id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `enabled` int DEFAULT NULL,
  `path` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `chave_produtos_idx` (`product_id`),
  CONSTRAINT `chave_produtos` FOREIGN KEY (`product_id`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci