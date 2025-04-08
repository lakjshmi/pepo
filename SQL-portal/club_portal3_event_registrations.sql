-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: club_portal3
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `event_registrations`
--

DROP TABLE IF EXISTS `event_registrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_registrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount_paid` double NOT NULL,
  `payment_status` enum('COMPLETED','PENDING') NOT NULL,
  `registered_at` datetime(6) NOT NULL,
  `status` enum('CANCELLED','REGISTERED') NOT NULL,
  `event_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6eykq6wu4n23qhn5vwb8kyut5` (`event_id`),
  KEY `FKnk7jh3bmmv11csoxkjnb6av4h` (`user_id`),
  CONSTRAINT `FK6eykq6wu4n23qhn5vwb8kyut5` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`),
  CONSTRAINT `FKnk7jh3bmmv11csoxkjnb6av4h` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_registrations`
--

LOCK TABLES `event_registrations` WRITE;
/*!40000 ALTER TABLE `event_registrations` DISABLE KEYS */;
INSERT INTO `event_registrations` VALUES (1,80,'PENDING','2025-04-04 12:18:30.565529','REGISTERED',3,6),(2,80,'PENDING','2025-04-04 12:34:52.486111','REGISTERED',2,4),(3,0,'PENDING','2025-04-04 13:00:53.748849','REGISTERED',1,5),(4,80,'PENDING','2025-04-04 13:00:57.036233','REGISTERED',2,5),(5,80,'PENDING','2025-04-04 13:01:03.014168','REGISTERED',3,5),(6,65,'PENDING','2025-04-04 13:01:06.189767','REGISTERED',4,5),(7,1000,'PENDING','2025-04-04 15:10:17.851845','REGISTERED',5,5),(8,80,'PENDING','2025-04-06 22:23:05.322892','REGISTERED',2,2),(9,1000,'PENDING','2025-04-06 22:23:13.008601','REGISTERED',5,2);
/*!40000 ALTER TABLE `event_registrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-08 22:22:12
