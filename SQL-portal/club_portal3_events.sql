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
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `description` text,
  `event_date` datetime(6) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `registration_fee_members` double NOT NULL,
  `registration_fee_non_members` double NOT NULL,
  `visibility` enum('PUBLIC','MEMBERS_ONLY') NOT NULL,
  `club_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKmt9rjn9hbh6g8isda7c1g14bd` (`club_id`),
  CONSTRAINT `FKmt9rjn9hbh6g8isda7c1g14bd` FOREIGN KEY (`club_id`) REFERENCES `clubs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'2025-04-04 09:30:02.124671','Send flowers to poornima','2018-02-05 12:59:11.000000',NULL,'Poornima Welcome Event',0,0,'PUBLIC',12),(2,'2025-04-04 09:30:44.039687','Send flowers to poornima','2018-02-05 12:59:11.000000','img2.png','Poornima Welcome Event',80,80,'PUBLIC',12),(3,'2025-04-04 10:08:09.888084','Resolve Conflicts between Poornima and Aarin and Vishalakshi','2025-06-01 19:30:00.000000','img1.png','Conflict Resolution Event',90,80,'PUBLIC',12),(4,'2025-04-04 10:09:56.827433','introduceeeee','2025-10-22 20:30:00.000000','','Introduction Event',87,65,'PUBLIC',15),(5,'2025-04-04 13:16:41.383401','Group of people','2025-04-22 11:11:00.000000','img4.png','Dance Function',1200,1000,'PUBLIC',5);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
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
