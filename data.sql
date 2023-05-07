-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: unknowngames
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `basket`
--

DROP TABLE IF EXISTS `basket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `basket` (
  `basket_id` bigint NOT NULL AUTO_INCREMENT,
  `count` tinyint(1) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userUuid` varchar(255) DEFAULT NULL,
  `productId` bigint DEFAULT NULL,
  PRIMARY KEY (`basket_id`),
  KEY `userUuid` (`userUuid`),
  KEY `productId` (`productId`),
  CONSTRAINT `basket_ibfk_1` FOREIGN KEY (`userUuid`) REFERENCES `users` (`uuid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `basket_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basket`
--

LOCK TABLES `basket` WRITE;
/*!40000 ALTER TABLE `basket` DISABLE KEYS */;
INSERT INTO `basket` VALUES (3,1,750,'2023-05-06 15:51:39','2023-05-06 15:51:39','8cddd391-30ef-40bd-b94d-0d648b89cbcf',1),(4,1,750,'2023-05-06 17:11:24','2023-05-06 17:11:24','8cddd391-30ef-40bd-b94d-0d648b89cbcf',2),(5,1,450,'2023-05-06 17:11:29','2023-05-06 17:11:29','8cddd391-30ef-40bd-b94d-0d648b89cbcf',7),(6,1,750,'2023-05-06 17:13:49','2023-05-06 17:13:49','55dd0c6c-2d05-421c-9f8d-3dd3a79bfb3f',1);
/*!40000 ALTER TABLE `basket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentaries`
--

DROP TABLE IF EXISTS `commentaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commentaries` (
  `comment_id` bigint NOT NULL AUTO_INCREMENT,
  `comment_body` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userUuid` varchar(255) DEFAULT NULL,
  `productId` bigint DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `userUuid` (`userUuid`),
  KEY `productId` (`productId`),
  CONSTRAINT `commentaries_ibfk_1` FOREIGN KEY (`userUuid`) REFERENCES `users` (`uuid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `commentaries_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentaries`
--

LOCK TABLES `commentaries` WRITE;
/*!40000 ALTER TABLE `commentaries` DISABLE KEYS */;
INSERT INTO `commentaries` VALUES (4,'wdwdw','2023-05-06 15:58:11','2023-05-06 15:58:11','8cddd391-30ef-40bd-b94d-0d648b89cbcf',1);
/*!40000 ALTER TABLE `commentaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` bigint NOT NULL,
  `company` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite`
--

DROP TABLE IF EXISTS `favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite` (
  `favgame_id` bigint NOT NULL AUTO_INCREMENT,
  `count` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userUuid` varchar(255) DEFAULT NULL,
  `productId` bigint DEFAULT NULL,
  PRIMARY KEY (`favgame_id`),
  KEY `userUuid` (`userUuid`),
  KEY `productId` (`productId`),
  CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`userUuid`) REFERENCES `users` (`uuid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `favorite_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite`
--

LOCK TABLES `favorite` WRITE;
/*!40000 ALTER TABLE `favorite` DISABLE KEYS */;
INSERT INTO `favorite` VALUES (1,1,'2023-04-29 17:28:53','2023-05-06 15:51:39','8cddd391-30ef-40bd-b94d-0d648b89cbcf',1),(2,1,'2023-05-06 17:11:25','2023-05-06 17:11:25','8cddd391-30ef-40bd-b94d-0d648b89cbcf',2),(3,1,'2023-05-06 17:11:28','2023-05-06 17:11:28','8cddd391-30ef-40bd-b94d-0d648b89cbcf',7),(4,1,'2023-05-06 17:13:49','2023-05-06 17:13:49','55dd0c6c-2d05-421c-9f8d-3dd3a79bfb3f',1);
/*!40000 ALTER TABLE `favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Action','2023-04-29 17:25:26','2023-04-29 17:25:26'),(2,'Sandbox','2023-05-06 15:54:57','2023-05-06 15:54:57'),(3,'Real-time','2023-05-06 15:55:09','2023-05-06 15:55:09'),(4,'Shooters','2023-05-06 15:55:20','2023-05-06 15:55:20'),(5,'Multiplayer','2023-05-06 15:55:27','2023-05-06 15:55:27'),(6,'Role-playing','2023-05-06 15:55:36','2023-05-06 15:55:36'),(7,'Simulation and sports','2023-05-06 15:55:50','2023-05-06 15:55:50'),(8,'Puzzlers and party games','2023-05-06 15:56:02','2023-05-06 15:56:02'),(9,'Action-adventure','2023-05-06 15:56:10','2023-05-06 15:56:10'),(10,'Survival and horror','2023-05-06 15:56:21','2023-05-06 15:56:21'),(11,'Platformer','2023-05-06 15:56:29','2023-05-06 15:56:29'),(12,'Horror','2023-05-06 15:56:35','2023-05-06 15:56:35');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `desc` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `company` varchar(255) DEFAULT NULL,
  `disc_price` decimal(10,2) DEFAULT NULL,
  `big_img` varchar(255) DEFAULT NULL,
  `small_img` json DEFAULT NULL,
  `year` datetime NOT NULL,
  `rating` int DEFAULT NULL,
  `processor` varchar(255) DEFAULT NULL,
  `ram` varchar(255) DEFAULT NULL,
  `op_system` varchar(255) DEFAULT NULL,
  `videocard` varchar(255) DEFAULT NULL,
  `disk_space` varchar(255) DEFAULT NULL,
  `download_link` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Red Dead Redemption 2','Red Dead is a series of Western-themed action-adventure games published by Rockstar Games. The first entry in the series, Red Dead Revolver, was released on the PlayStation 2 and Xbox in May 2004. Originally developed by Capcom, Red Dead Revolver borrowed elements from their 1985 arcade title Gun.Smoke, to which it was intended to be a spiritual successor, but the game was cancelled in 2002. Subsequently, after acquiring the rights, Rockstar purchased Red Dead Revolver and expanded on it.[3][4]',750.00,'Rockstar Games',500.00,'big_img-1682789290427-214547371.jpg','[{\"name\": \"unknown-games-small-unknown-games-small-1.jpg\"}, {\"name\": \"unknown-games-small-unknown-games-small-2.jpg\"}, {\"name\": \"unknown-games-small-unknown-games-small-3.jpg\"}, {\"name\": \"unknown-games-small-unknown-games-small-4.jpg\"}, {\"name\": \"unknown-games-small-unknown-games-small-5.jpeg\"}, {\"name\": \"unknown-games-small-unknown-games-small-6.jpg\"}]','2023-03-29 00:00:00',5,' Core i5-3570K / FX-8310','8 GB','Windows 10, 11','GTX 950 / RX 470','75 GB','unknown-games-small-undefined.torrent','2023-04-29 17:28:09','2023-04-29 17:28:10'),(2,'Red Dead Redemption ||','Red Dead is a series of Western-themed action-adventure games published by Rockstar Games. The first entry in the series, Red Dead Revolver, was released on the PlayStation 2 and Xbox in May 2004. Originally developed by Capcom, Red Dead Revolver borrowed elements from their 1985 arcade title Gun.Smoke, to which it was intended to be a spiritual successor, but the game was cancelled in 2002. Subsequently, after acquiring the rights, Rockstar purchased Red Dead Revolver and expanded on it.[3][4]',750.00,'Rockstar Games',500.00,'big_img-1682789290427-214547371.jpg','[{\"name\": \"unknown-games-small-unknown-games-small-1.jpg\"}, {\"name\": \"unknown-games-small-unknown-games-small-2.jpg\"}, {\"name\": \"unknown-games-small-unknown-games-small-3.jpg\"}, {\"name\": \"unknown-games-small-unknown-games-small-4.jpg\"}, {\"name\": \"unknown-games-small-unknown-games-small-5.jpeg\"}, {\"name\": \"unknown-games-small-unknown-games-small-6.jpg\"}]','2023-03-29 00:00:00',5,' Core i5-3570K / FX-8310','8 GB','Windows 10, 11','GTX 950 / RX 470','75 GB','unknown-games-small-undefined.torrent','2023-04-29 17:28:09','2023-04-29 17:28:10'),(7,'Cyberpunk 2077 ','Cyberpunk 2077 is the brainchild of the well-known Polish company CD Projekt RED, whose employees at one time were involved in the development of a cult hit called The Witcher 3. Wild Hunt, which gained unprecedented popularity. For this reason, the game, the features of which are described in the material, is so dreamed of by millions of people in all corners of the globe.',450.00,'CD Projekt RED',340.00,'big_img-1683390480147-668421121.jpg','[{\"name\": \"unknown-games-small-artur-tarnowski-malemain.jpg\"}]','2023-05-10 00:00:00',3,'i7','8 GB','Windows 10, 11','GTX 950 / RX 470','65 GB',NULL,'2023-05-06 16:27:59','2023-05-06 16:28:00'),(8,'Call of Duty Ghosts','Red Dead is a series of Western-themed action-adventure games published by Rockstar Games. The first entry in the series, Red Dead Revolver, was released on the PlayStation 2 and Xbox in May 2004. Originally developed by Capcom, Red Dead Revolver borrowed elements from their 1985 arcade title Gun.Smoke, to which it was intended to be a spiritual successor, but the game was cancelled in',500.00,'CD Projekt RED',NULL,'big_img-1683390939089-614777191.jpg','[{\"name\": \"unknown-games-small-8y5kMSUnG569COSHe72a8ST2.jpeg\"}, {\"name\": \"unknown-games-small-maxresdefault.jpg\"}, {\"name\": \"unknown-games-small-images (3).jpeg\"}, {\"name\": \"unknown-games-small-images.jpeg\"}, {\"name\": \"unknown-games-small-Ghosts_Merrick_Cover.jpg\"}]','2023-05-09 00:00:00',4,' Core i5-3570K / FX-8310','8 GB','Windows 10, 11','GTX 1080 Ti','100 GB','unknown-games-small-undefined.torrent','2023-05-06 16:35:38','2023-05-06 16:35:39'),(15,'Assassins Cred Odyssey','CD Projekt RED, whose employees at one time were involved in the development of a cult hit called The Witcher 3. Wild Hunt, which gained unprecedented popularity. For this reason, the game, the features of which are described in the material',670.00,'Ubisoft ',NULL,'big_img-1683392053491-813456465.png','[{\"name\": \"unknown-games-small-Screenshot from 2023-05-06 20-51-15.png\"}, {\"name\": \"unknown-games-small-images (1).jpeg\"}, {\"name\": \"unknown-games-small-images.jpeg\"}, {\"name\": \"unknown-games-small-download.jpeg\"}]','2023-05-16 00:00:00',2,' Core i5-3570K / FX-8310',' 8 GB','Windows 10, 11',' GTX 770 2 GB / Radeon R9 280 3 GB','100 GB','unknown-games-small-undefined.torrent','2023-05-06 16:54:12','2023-05-06 16:54:13');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productcategory_id`
--

DROP TABLE IF EXISTS `productcategory_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productcategory_id` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productId` bigint NOT NULL,
  `genreId` bigint NOT NULL,
  PRIMARY KEY (`productId`,`genreId`),
  KEY `genreId` (`genreId`),
  CONSTRAINT `productcategory_id_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `productcategory_id_ibfk_2` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productcategory_id`
--

LOCK TABLES `productcategory_id` WRITE;
/*!40000 ALTER TABLE `productcategory_id` DISABLE KEYS */;
INSERT INTO `productcategory_id` VALUES ('2023-04-29 17:28:09','2023-04-29 17:28:09',1,1);
/*!40000 ALTER TABLE `productcategory_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `rating` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userUuid` varchar(255) DEFAULT NULL,
  `productId` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userUuid` (`userUuid`),
  KEY `productId` (`productId`),
  CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`userUuid`) REFERENCES `users` (`uuid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `uuid` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) NOT NULL,
  `verified` tinyint(1) DEFAULT '0',
  `accessToken` varchar(255) DEFAULT NULL,
  `exp` bigint DEFAULT '0',
  `level` bigint DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('55dd0c6c-2d05-421c-9f8d-3dd3a79bfb3f','User','Userian','user@test.com','$argon2id$v=19$m=65536,t=3,p=4$3y2ZUEGbJbqgeiEAf4W5CQ$SOekijzKbhNbt9ceEhD6ag8NtMItKSYFBAC/h/OtsMQ','user',1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTVkZDBjNmMtMmQwNS00MjFjLTlmOGQtM2RkM2E3OWJmYjNmIiwiaWF0IjoxNjgzMzkzMTcyfQ.pjzV1nEYcMCQmJhlS_C9juw2e7uRYhx5RpgU_ulkCSA',0,1,'2023-05-06 17:12:50','2023-05-06 17:12:52'),('8cddd391-30ef-40bd-b94d-0d648b89cbcf','Admin','Adminian','admin@test.com','$argon2id$v=19$m=65536,t=3,p=4$IR233k2aD3ihW6G8tS9RxA$v6bSHegfpH0dYEHmme8K17xnqlBZRrSTxaTqPqBQ7gA','admin',1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGNkZGQzOTEtMzBlZi00MGJkLWI5NGQtMGQ2NDhiODljYmNmIiwiaWF0IjoxNjgyNzg5MDU5fQ.S2Lg2r7b4FyALlytpexXIHzYiBTrvPmnzEW7Fg-7f_A',0,1,'2023-04-29 17:24:19','2023-04-29 17:24:19');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlist` (
  `wishlist_id` bigint NOT NULL AUTO_INCREMENT,
  `count` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userUuid` varchar(255) DEFAULT NULL,
  `productId` bigint DEFAULT NULL,
  PRIMARY KEY (`wishlist_id`),
  KEY `userUuid` (`userUuid`),
  KEY `productId` (`productId`),
  CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`userUuid`) REFERENCES `users` (`uuid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist`
--

LOCK TABLES `wishlist` WRITE;
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
INSERT INTO `wishlist` VALUES (1,1,'2023-04-29 17:28:52','2023-05-06 15:51:38','8cddd391-30ef-40bd-b94d-0d648b89cbcf',1),(2,1,'2023-05-06 17:11:23','2023-05-06 17:11:23','8cddd391-30ef-40bd-b94d-0d648b89cbcf',2),(3,1,'2023-05-06 17:11:29','2023-05-06 17:11:29','8cddd391-30ef-40bd-b94d-0d648b89cbcf',7),(4,1,'2023-05-06 17:13:48','2023-05-06 17:13:48','55dd0c6c-2d05-421c-9f8d-3dd3a79bfb3f',1);
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-06 21:39:50
