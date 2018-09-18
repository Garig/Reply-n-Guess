-- phpMyAdmin SQL Dump
-- version 4.0.6deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 09, 2013 at 06:10 PM
-- Server version: 5.5.34-0ubuntu0.13.10.1
-- PHP Version: 5.5.3-1ubuntu2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

DELETE FROM `departement`;
DELETE FROM `role`;
DELETE FROM `question`;
DELETE FROM `status`;
DELETE FROM `app_users`;

ALTER TABLE `departement` AUTO_INCREMENT=0;
ALTER TABLE `status` AUTO_INCREMENT=0;
ALTER TABLE `role` AUTO_INCREMENT=0;
ALTER TABLE `question` AUTO_INCREMENT=0;
ALTER TABLE `app_users` AUTO_INCREMENT=0;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `villes_fr`
--

-- --------------------------------------------------------

--
-- Table structure for table `departement`
--


--
-- Dumping data for table `departement`
--

INSERT INTO `departement` (`id`, `code`, `name`) VALUES
(1, '01', 'Ain'),
(2, '02', 'Aisne'),
(3, '03', 'Allier'),
(5, '05', 'Hautes-Alpes'),
(4, '04', 'Alpes-de-Haute-Provence'),
(6, '06', 'Alpes-Maritimes'),
(7, '07', 'Ardèche'),
(8, '08', 'Ardennes'),
(9, '09', 'Ariège'),
(10, '10', 'Aube'),
(11, '11', 'Aude'),
(12, '12', 'Aveyron'),
(13, '13', 'Bouches-du-Rhône'),
(14, '14', 'Calvados'),
(15, '15', 'Cantal'),
(16, '16', 'Charente'),
(17, '17', 'Charente-Maritime'),
(18, '18', 'Cher'),
(19, '19', 'Corrèze'),
(20, '2a', 'Corse-du-sud'),
(21, '2b', 'Haute-Corse'),
(22, '21', 'Côte-d''or'),
(23, '22', 'Côtes-d''armor'),
(24, '23', 'Creuse'),
(25, '24', 'Dordogne'),
(26, '25', 'Doubs'),
(27, '26', 'Drôme'),
(28, '27', 'Eure'),
(29, '28', 'Eure-et-Loire'),
(30, '29', 'Finistère'),
(31, '30', 'Gard'),
(32, '31', 'Haute-Garonne'),
(33, '32', 'Gers'),
(34, '33', 'Gironde'),
(35, '34', 'Hérault'),
(36, '35', 'Ile-et-Vilaine'),
(37, '36', 'Indre'),
(38, '37', 'Indre-et-Loire'),
(39, '38', 'Isère'),
(40, '39', 'Jura'),
(41, '40', 'Landes'),
(42, '41', 'Loir-et-Cher'),
(43, '42', 'Loire'),
(44, '43', 'Haute-Loire'),
(45, '44', 'Loire-Atlantique'),
(46, '45', 'Loiret'),
(47, '46', 'Lot'),
(48, '47', 'Lot-et-Garonne'),
(49, '48', 'Lozère'),
(50, '49', 'Maine-et-Loire'),
(51, '50', 'Manche'),
(52, '51', 'Marne'),
(53, '52', 'Haute-Marne'),
(54, '53', 'Mayenne'),
(55, '54', 'Meurthe-et-Moselle'),
(56, '55', 'Meuse'),
(57, '56', 'Morbihan'),
(58, '57', 'Moselle'),
(59, '58', 'Nièvre'),
(60, '59', 'Nord'),
(61, '60', 'Oise'),
(62, '61', 'Orne'),
(63, '62', 'Pas-de-Calais'),
(64, '63', 'Puy-de-Dôme'),
(65, '64', 'Pyrénées-Atlantiques'),
(66, '65', 'Hautes-Pyrénées'),
(67, '66', 'Pyrénées-Orientales'),
(68, '67', 'Bas-Rhin'),
(69, '68', 'Haut-Rhin'),
(70, '69', 'Rhône'),
(71, '70', 'Haute-Saône'),
(72, '71', 'Saône-et-Loire'),
(73, '72', 'Sarthe'),
(74, '73', 'Savoie'),
(75, '74', 'Haute-Savoie'),
(76, '75', 'Paris'),
(77, '76', 'Seine-Maritime'),
(78, '77', 'Seine-et-Marne'),
(79, '78', 'Yvelines'),
(80, '79', 'Deux-Sèvres'),
(81, '80', 'Somme'),
(82, '81', 'Tarn'),
(83, '82', 'Tarn-et-Garonne'),
(84, '83', 'Var'),
(85, '84', 'Vaucluse'),
(86, '85', 'Vendée'),
(87, '86', 'Vienne'),
(88, '87', 'Haute-Vienne'),
(89, '88', 'Vosges'),
(90, '89', 'Yonne'),
(91, '90', 'Territoire de Belfort'),
(92, '91', 'Essonne'),
(93, '92', 'Hauts-de-Seine'),
(94, '93', 'Seine-Saint-Denis'),
(95, '94', 'Val-de-Marne'),
(96, '95', 'Val-d''oise'),
(97, '976', 'Mayotte'),
(98, '971', 'Guadeloupe'),
(99, '973', 'Guyane'),
(100, '972', 'Martinique'),
(101, '974', 'Réunion');



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

INSERT INTO `status` (`id`, `code`) VALUES
(3, 'proposée'),
(4, 'refusée'),
(2, 'validée'),
(1, 'publiée'),
(0, 'fermée');

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'ROLE_USER'),
(2, 'ROLE_MODERATOR'),
(3, 'ROLE_ADMIN');

INSERT INTO `app_users` (`is_validate`, `username`, `password`, `email`, `birth_date`, `gender`, `score`, `roles_id`) VALUES 
(1, 'Joseph', 'password', 'email@oclock.io', '01/01/1999', 'homme', 0, 1),
(1, 'Josetha', 'password', 'email@oclock.io', '01/01/1999', 'femme', 0, 1),
(1, 'Jesus', 'password', 'email@oclock.io', '01/01/1999', 'femme', 0, 1),
(1, 'username', 'password', 'email@oclock.io', '01/01/1999', 'femme', 0, 1),
(1, 'username', 'password', 'email@oclock.io', '01/01/1999', 'homme', 0, 1),
(1, 'username', 'password', 'email@oclock.io', '01/01/1999', 'homme', 0, 1),
(1, 'username', 'password', 'email@oclock.io', '01/01/1999', 'femme', 0, 1),
(1, 'username', 'password', 'email@oclock.io', '01/01/1999', 'femme', 0, 1),
(1, 'username', 'password', 'email@oclock.io', '01/01/1999', 'femme', 0, 1),
(1, 'username', 'password', 'email@oclock.io', '01/01/1999', 'homme', 0, 1),
(1, 'username', 'password', 'email@oclock.io', '01/01/1999', 'homme', 0, 1),
(1, 'username', 'password', 'email@oclock.io', '01/01/1999', 'femme', 0, 1),
(1, 'username', 'password', 'email@oclock.io', '01/01/1999', 'femme', 0, 1),
(1, 'username', 'password', 'email@oclock.io', '01/01/1999', 'homme', 0, 1),
(1, 'username', 'password', 'email@oclock.io', '01/01/1999', 'homme', 0, 1),
(1, 'admin', '$2a$08$jHZj/wJfcVKlIwr5AvR78euJxYK7Ku5kURNhNx.7.CSIJ3Pq6LEPC', 'email@oclock.io', '01/01/1999', 'homme', 0, 3),
(1, 'username', 'password', 'email@oclock.io', '01/01/1999', 'homme', 0, 1);



INSERT INTO `question` (`users_id`,`title`,`prop_1`,`prop_2`, `submit_date`, `nb_vote_moderator`) VALUES
(1,'Han Solo ou Chewbaca','Han Solo','Chewbaca', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(2,'Superman vs Batman','Superman','Batman', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(3,'Muse ou Radiohead ?','Muse','Radiohead', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(1,'Seigneur des Anneaux ou le Hobbit ?','Seigneur des Anneaux','Hobbit', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(2,'DC Comics ou Marvel','DC Comics','Marvel', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(3,'Etre riche et seul ou pauvre et accompagné ?','Riche et seul','Pauvre et accompagné', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(1,'Littérature ou cinéma ?','Littérature','Cinéma', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(2,'Trilogie Star Wars ou Prélogie ?','Trilogie','Prélogie', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(3,'Aimeriez-vous vivre dans le monde d’Harry Potter ou celui de Le seigneur des anneaux ?',"Dans le monde d'Harry Potter",'Dans le monde de Le seigneur des anneaux', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(1,'Aimeriez-vous retourner 200 ans dans le passé ou voyager 200 ans dans le futur ?','200 ans dans le passé','200 ans dans le futur', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(2,'Aimeriez-vous devenir un ninja ou un pirate ?','Devenir un ninja','Devenir un pirate', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(3,'Se battre à coups de poing avec Justin Bieber ou avec Kim Jong Un ?.','Avec Justin Bieber','Avec Kim Jong Un', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(1,'Avoir Rendez-vous avec Jennifer Lawrence ou avoir toutes les pizzas du monde ?','Rendez-vous avec Jennifer Lawrence','Toutes les pizzas du monde', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(2,'Maîtriser tous les instruments de musique ou maîtriser tous les sports?','Instruments de musique','Sports', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(3,'Être capable de pouvoir voler ou lire dans les pensées ?','Pouvoir voler','Lire dans les pensées', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(4,"Réussir à voler une banque ou réussir à voler un objet d’art inestimable ?",'la banque',"l'objet d'arn inestimable", timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(5,'Si vous aviez le choix, vous prendriez une super fille sexy qui joue aux jeux vidéos ou 500 000 $ cash ?','La fille sexy','Le cash', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(1,'Se faire mal baiser pour le reste de ta vie ou être abstinent pour toujours ?','Se faire mal baiser','être abstinent pour toujours', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(1,'Te passer de ton téléphone ou de ton ordi pour toujours?','Téléphone','Ordi', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(2,'Avoir Justin Trudeau comme père ou Justin Bieber comme mec ?','Justin Trudeau comme père','Justin Bieber comme mec', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(3,'Ne plus jamais manger ou dormir?','Plus jamais manger','Plus jamais dormir', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(3,'Devenir sourd et muet ou aveugle?','Sourd et muet','Aveugle', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(1,'Te faire amputer un pied ou une main?','Le pied','Une main', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(2,'Mario ou Kirby ?','Mario','Kirby', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(4,'Pokemon ou Digimon ?','Pokemon','Digimon', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(6,'Anakin ou Obi-Wan ?','Anakin','Obi-Wan', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(7,'Relation longue ou plan cul ?','Relation longue','Plan cul', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(4,'Pain au chocolat ou chocolatine?','Pain au chocolat','Chocolat', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0),
(1,'Chocolat chaud ou café ?','Chocolat chaud','Café', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0);











