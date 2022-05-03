CREATE DATABASE  IF NOT EXISTS `bdAutomate`;
USE `bdAutomate`;

CREATE TABLE `tbAutomate` (
  `idAutomate` int NOT NULL AUTO_INCREMENT,
  `automateVersion` varchar(10) NOT NULL,
  PRIMARY KEY (`idAutomate`)
);

CREATE TABLE `tbAutomateUser` (
  `idAutomateUser` integer NOT NULL AUTO_INCREMENT,
  `idUser` int,
  `idAutomate` int DEFAULT NULL,
  PRIMARY KEY `idAutomateUser`,
  FOREIGN KEY (`idUser`) REFERENCES tbUser(idUser),
  FOREIGN KEY (`idAutomate`) REFERENCES tbAutomate(idAutomate)
);


CREATE TABLE `tbPlants` (
  `idPlant` int NOT NULL AUTO_INCREMENT,
  `plantName` varchar(30) NOT NULL,
  `plantType` varchar(20) NOT NULL,
  `plantHumidity` decimal(4,2) NOT NULL,
  PRIMARY KEY (`idPlant`)
);


CREATE TABLE `tbRegPlant` (
  `idRegPlant` int NOT NULL AUTO_INCREMENT,
  `idPlant` int DEFAULT NULL,
  `idAutomate` int DEFAULT NULL,
  `plantName` varchar(30) NOT NULL,
  `plantType` varchar(20) NOT NULL,
  `plantHumidity` decimal(4,2) NOT NULL,
  PRIMARY KEY (`idRegPlant`),
  FOREIGN KEY (idPlant) REFERENCES tbPlants (idPlant),
  FOREIGN KEY (idAutomate) REFERENCES tbAutomate (idAutomate)
);


CREATE TABLE `tbReport` (
  `idReport` int NOT NULL AUTO_INCREMENT,
  `idAutomateUser` int DEFAULT NULL,
  `higherHumidity` decimal(4,2) NOT NULL,
  `lowerHumidity` decimal(4,2) NOT NULL,
  `averageHumidity` decimal(4,2) NOT NULL,
  `reportDate` date NOT NULL,
  PRIMARY KEY (`idReport`),
  FOREIGN KEY (idAutomateUser) REFERENCES tbAutomateUser (idAutomateUser)
);

CREATE TABLE `tbUser` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(30) NOT NULL,
  `userEmail` varchar(30) NOT NULL,
  `userPassword` varchar(20) NOT NULL,
  PRIMARY KEY (`idUser`)
);


CREATE TABLE `tbWifi` (
  `idWifi` int NOT NULL AUTO_INCREMENT,
  `idAutomate` int DEFAULT NULL,
  `wifiName` varchar(20) NOT NULL,
  `wifiPassword` varchar(20) NOT NULL,
  PRIMARY KEY (`idWifi`),
  FOREIGN KEY (idAutomate) REFERENCES tbAutomate(idAutomate)
);
