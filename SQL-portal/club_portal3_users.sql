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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `active` tinyint(1) DEFAULT '1',
  `created_at` datetime(6) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `role` enum('COORDINATOR','MEMBER','ADMIN') DEFAULT NULL,
  `year` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
  UNIQUE KEY `UK9q63snka3mdh91as4io72espi` (`phone_number`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,NULL,NULL,'admin1@clubportal.com','Admin1','$2a$10$AMIYmu8/O1shkrTVMqk1meglmIWzdDOZPb5G8kbn.1mh5oxXB2IvG','9878675645','ADMIN',2024),(2,1,NULL,NULL,'poornima.ec21@bmsce.ac.in','Poornima','$2a$10$ctrX8CbB9MBjI7yjl7ssDeTdEX0qSPHUziqEDonstTiaGHHkKg/kG','9999999999','MEMBER',0),(3,1,NULL,NULL,'COORD1@clubportal.com','COORDINATOR','$2a$10$QYVfhMi.KOSOGYZZHePXKeQ1/JMn5zv6H8Hmu9U9ertmtIoudORC6','8787878787','COORDINATOR',2024),(4,1,NULL,NULL,'chibballi.ec21@bmsce.ac.in','sandeep cr','$2a$10$juNWEDgyQTm5a4DUHIBFZ.UngJgcyjhu8bv6Ab0cVrCTCDwY3TMui','9394714829','MEMBER',0),(5,1,NULL,NULL,'sandeep@gmail.com','shfstjgdgj','$2a$10$EWiVKUspIgfKnI85kMsOz.PPteG28C33JG7L9rue2CAHcyBc/x2jS','1234567890','MEMBER',0),(6,1,NULL,NULL,'vishalakshiv@kpmg.com','Vishalakshi V','Visha@2201','9353950114','MEMBER',0),(7,1,NULL,'EC','Krithik.ec21@bmsce.ac.in','Krithik','$2a$10$ctrX8CbB9MBjI7yjl7ssDeTdEX0qSPHUziqEDonstTiaGHHkKg/kG','9765676543','MEMBER',2025),(9,1,NULL,'EC','Somashekar.ec21@bmsce.ac.in','Somashekar','$2a$10$ctrX8CbB9MBjI7yjl7ssDeTdEX0qSPHUziqEDonstTiaGHHkKg/kG','9765676542','MEMBER',2025),(10,1,NULL,'EC','Rahul.ec21@bmsce.ac.in','Rahul','$2a$10$ctrX8CbB9MBjI7yjl7ssDeTdEX0qSPHUziqEDonstTiaGHHkKg/kG','9764676543','MEMBER',2025),(11,1,NULL,'EC','Mehnoor.ec21@bmsce.ac.in','Mehnoor','$2a$10$ctrX8CbB9MBjI7yjl7ssDeTdEX0qSPHUziqEDonstTiaGHHkKg/kG','9765656543','MEMBER',2025),(12,1,NULL,'EC','Shah.ec21@bmsce.ac.in','Shah','$2a$10$ctrX8CbB9MBjI7yjl7ssDeTdEX0qSPHUziqEDonstTiaGHHkKg/kG','9765634543','MEMBER',2025),(13,1,NULL,'EC','maddy.ec21@bmsce.ac.in','Maddy','$2a$10$ctrX8CbB9MBjI7yjl7ssDeTdEX0qSPHUziqEDonstTiaGHHkKg/kG','9762376543','MEMBER',2025),(14,1,NULL,'EC','Gopi.ec21@bmsce.ac.in','Gopi','$2a$10$ctrX8CbB9MBjI7yjl7ssDeTdEX0qSPHUziqEDonstTiaGHHkKg/kG','9765676544','MEMBER',2025),(15,1,NULL,'EC','ramesh.ec21@bmsce.ac.in','ramesh','$2a$10$ctrX8CbB9MBjI7yjl7ssDeTdEX0qSPHUziqEDonstTiaGHHkKg/kG','9765666543','MEMBER',2025),(16,1,NULL,NULL,'Yashu.cs21@bmsce.ac.in','Yashu','password123','7676767675','MEMBER',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
