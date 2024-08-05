CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `enabled` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `slug` varchar(45) DEFAULT NULL,
  `use_in_menu` varchar(45) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `price_with_discount` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci