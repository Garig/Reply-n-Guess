-- phpMyAdmin SQL Dump
-- version 4.0.6deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 09, 2013 at 06:10 PM
-- Server version: 5.5.34-0ubuntu0.13.10.1
-- PHP Version: 5.5.3-1ubuntu2

-- --------------------------------------------------------
--
-- Set parameters for the database
--

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- --------------------------------------------------------
--
-- Delete existing data
--

DELETE FROM `answer`;
DELETE FROM `question`;
DELETE FROM `app_users`;
DELETE FROM `department`;
DELETE FROM `status`;
DELETE FROM `role`;
DELETE FROM `result`;

-- --------------------------------------------------------
--
-- Reset primary key
--

ALTER TABLE `answer` AUTO_INCREMENT=0;
ALTER TABLE `department` AUTO_INCREMENT=0;
ALTER TABLE `status` AUTO_INCREMENT=0;
ALTER TABLE `role` AUTO_INCREMENT=0;
ALTER TABLE `question` AUTO_INCREMENT=0;
ALTER TABLE `app_users` AUTO_INCREMENT=0;
ALTER TABLE `result` AUTO_INCREMENT=0;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

-- -------------------------------------------------------- --
-- -------------------------------------------------------- --
--                                                          --
--                  Database: `replynguess`                 --
--                                                          --
-- -------------------------------------------------------- --
-- -------------------------------------------------------- --

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `code`, `name`) VALUES
(1, '01', 'Ain'),
(2, '02', 'Aisne'),
(3, '03', 'Allier'),
(4, '04', 'Alpes-de-Haute-Provence'),
(5, '05', 'Hautes-Alpes'),
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
(22, '21', "Côte-d'or"),
(23, '22', "Côtes-d'armor"),
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
(96, '95', "Val-d'oise"),
(97, '971', 'Guadeloupe'),
(98, '972', 'Martinique'),
(99, '973', 'Guyane'),
(100, '974', 'Réunion'),
(101, '976', 'Mayotte');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- --------------------------------------------------------
--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `code`) VALUES
(3, 'proposée'),
(4, 'refusée'),
(2, 'validée'),
(1, 'publiée'),
(0, 'fermée'),
(-1, 'archivée');

-- --------------------------------------------------------
--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'ROLE_USER'),
(2, 'ROLE_MODERATOR'),
(3, 'ROLE_ADMIN');

-- --------------------------------------------------------
--
-- Dumping data for table `app_users`
--

INSERT INTO `app_users` (`is_validate`, `username`, `password`, `email`, `birth_date`, `gender`, `score`, `role_id`, `departments_id`) VALUES
(1, 'Sylvère', '$2y$10$k5Xl4Rs0N.CXwW7IBYp8ze4IgU1GxE4NXbWxNq0Ds9S28SqzUxnCC', 'sylvere@oclock.io', '01/01/1999', 'homme', 0, 1, 68),
(1, 'Quentin', '$2y$10$k5Xl4Rs0N.CXwW7IBYp8ze4IgU1GxE4NXbWxNq0Ds9S28SqzUxnCC', 'quentin@oclock.io', '01/01/1999', 'homme', 0, 1, 20),
(1, 'Justin', '$2y$10$k5Xl4Rs0N.CXwW7IBYp8ze4IgU1GxE4NXbWxNq0Ds9S28SqzUxnCC', 'justin@oclock.io', '01/01/1999', 'homme', 0, 1, 94),
(1, 'Christophe', '$2y$10$k5Xl4Rs0N.CXwW7IBYp8ze4IgU1GxE4NXbWxNq0Ds9S28SqzUxnCC', 'christophe@oclock.io', '01/01/1999', 'homme', 0, 1, 90),
(1, 'Gérard', '$2y$10$k5Xl4Rs0N.CXwW7IBYp8ze4IgU1GxE4NXbWxNq0Ds9S28SqzUxnCC', 'gerard@oclock.io', '01/01/1999', 'homme', 0, 1, 75),
(1, 'Camille', '$2y$10$k5Xl4Rs0N.CXwW7IBYp8ze4IgU1GxE4NXbWxNq0Ds9S28SqzUxnCC', 'camille@oclock.io', '01/01/1999', 'femme', 0, 1, 49),
(1, 'usernameX', '$2y$10$k5Xl4Rs0N.CXwW7IBYp8ze4IgU1GxE4NXbWxNq0Ds9S28SqzUxnCC', 'emailX@oclock.io', '01/01/1999', 'homme', 0, 1, 03),
(1, 'usernameY', '$2y$10$k5Xl4Rs0N.CXwW7IBYp8ze4IgU1GxE4NXbWxNq0Ds9S28SqzUxnCC', 'emailY@oclock.io', '01/01/1999', 'femme', 0, 1, 18),
(1, 'admintest', '$2y$13$RK16q4E32Ck6R07l0ePFnOfZjfv/Nmux24wBJbdXedb.mObnMmmfy', 'admintest@admin.test', '01/01/1999', 'homme', 0, 3, 16);

-- --------------------------------------------------------
--
-- Dumping data for table `result`
--

INSERT INTO `result` (`nb_voting`, `nb_answer_1`, `nb_answer_2`, `nb_predict_1`, `nb_predict_2`, `perc_answer_1`, `perc_answer_2`, `perc_predict_1`, `perc_predict_2`, `perc_men_answer_1`, `perc_men_answer_2`, `perc_women_answer_1`, `perc_women_answer_2`) VALUES
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------
--
-- Dumping data for table `question`
--

INSERT INTO `question` (`users_id`,`title`,`prop_1`,`prop_2`, `submit_date`, `nb_vote_moderator`, `statuses_id`, `results_id`) VALUES
(1,'Han Solo ou Chewbaca','Han Solo','Chewbaca', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 1),
(2,'Superman vs Batman','Superman','Batman', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 2),
(3,'Muse ou Radiohead ?','Muse','Radiohead', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 3),
(1,'Seigneur des Anneaux ou le Hobbit ?','Seigneur des Anneaux','Hobbit', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 4),
(2,'DC Comics ou Marvel','DC Comics','Marvel', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 5),
(3,'Être riche et seul ou pauvre et accompagné ?','Riche et seul','Pauvre et accompagné', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 6),
(1,'Littérature ou cinéma ?','Littérature','Cinéma', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 7),
(2,'Trilogie Star Wars ou Prélogie ?','Trilogie','Prélogie', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 8),
(3,'Vivre dans le monde d’Harry Potter ou celui de Le seigneur des anneaux ?',"Harry Potter",'Le seigneur des anneaux', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 9),
(1,'Voyager 200 ans dans le passé ou dans le futur ?','Le passé','Le futur', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 10),
(2,'Aimeriez-vous devenir un ninja ou un pirate ?','Ninja','Pirate', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 11),
(3,'Se battre à coups de poing avec Justin Bieber ou avec Kim Jong Un ?.','Justin Bieber','Kim Jong Un', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 12),
(1,'Plutôt kebab ou pizza ?','Kebab','Pizza', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 13),
(2,'Maîtriser tous les instruments de musique ou tous les sports?','Instruments de musique','Sports', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 14),
(3,'Être capable de voler ou lire dans les pensées ?','Voler','Lire dans les pensées', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 15),
(4,"Réussir à voler une banque ou réussir à voler un objet d’art inestimable ?",'La banque',"L’objet d’art inestimable", timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 16),
(1,'Te passer de ton téléphone ou de ton ordinateur pour toujours?','Téléphone','Ordinateur', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 17),
(3,'Ne plus jamais manger ou dormir ?','Plus jamais manger','Plus jamais dormir', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 18),
(3,'Devenir sourd ou aveugle ?','Sourd','Aveugle', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 19),
(1,'Te faire amputer un pied ou une main ?','Un pied','Une main', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 20),
(2,'Mario ou Sonic ?','Mario','Sonic', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 21),
(4,'Pokemon ou Yu-Hi-Yo ?','Pokemon','Yu-Hi-Yo', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 22),
(5,'Anakin ou Obi-Wan ?','Anakin','Obi-Wan', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 23),
(4,'Pain au chocolat ou chocolatine?','Pain au chocolat','Chocolatine', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 24),
(1,'Thé ou café ?','Thé','Café', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 25),
(2,'Mouiller sa brosse à dent avant ou après avoir mis le dentifrice ?','Avant','Après', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 26),
(3,'Être un mètre plus grand ou un mètre plus petit ?','Plus grand','Plus petit', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 27),
(4,'Découvrir que ses parents sont agents secrets ou aliens ?','Agents secrets','Aliens', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 28),
(5,'Vivre dans un monde où existent les Pokemons ou les Supers Héros ?','Les Pokemons','Les Supers Héros', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 29),
(1,'Utiliser un écran tactile ou une souris pour tous tes appareils ?','Ecran tactil','La souris', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 30),
(3,'Porter les mêmes habits ou ne pas prendre de douche pendant une semaine ?','Porter les mêmes habits','Ne pas prendre de douche', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 31),
(1,'Avoir 10 enfants ou ne pas en avoir du tout ?','10 enfants','Ne pas en avoir du tout', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 32),
(2,'Se priver de musique ou jeux vidéo pendant un an ?','Sans musique','Sans jeux vidéo', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 33),
(1,'Etre sujet d’une téléréalité toute sa vie ou que personne ne se souvienne de vous au jour le jour ?','Etre sujet d’une téléréalité','Personne ne se souvienne de vous', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 34),
(2,'Savoir quand ou comment est la fin du monde ?','Quand','Comment', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 35),
(3,'Être immortel et n’avoir aucun ami ou mortel avec des amis ?','Immortel sans ami','Mortel avec des amis', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 36),
(4,'Regarder la tv ou dormir toute la journée ?','Regarder la tv','Dormir', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 37),
(5,'Être mortel dans un monde d’immortel ou immortel dans un monde de mortel ?','Mortel dans un monde d’immortel','Immortel dans un monde de mortel', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 38),
(5,'Tout l’argent gagné doublé ou avoir accès a internet mentalement ?','Argent gagné doublé','Accès a internet mentalement', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 39),
(4,'Vivre une invasion d’aliens ou de zombies ?','Aliens','Zombies', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 40),
(3,'Vivre un an dans le désert ou en Antarctique ?','Désert','Antarctique', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 41),
(5,'Avoir un sable laser ou un IA personnelle ?','Sabre laser','IA personnelle', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 42),
(1,'Ne plus toucher ou ne plus parler à personne pendant un an ?','Ne plus toucher','Ne plus parler', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 43),
(2,'Tout avoir ou tout savoir ?','Tout avoir','Tout savoir', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 44),
(3,'Être le meilleurs dans une équipe de mauvait ou le pire dans une équipe de bon?','Le meilleurs','Le pire', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 45),
(2,'Doubler ton espérance de vie ou réfléchir deux fois plus vite ?','Doubler l’espérance de vie','Réfléchir deux fois plus vite', timestamp('2018-10-01 14:53:27') - INTERVAL FLOOR( RAND( ) * 366) DAY, 0, 2, 46);

-- --------------------------------------------------------
--
-- Dumping data for table `question`
--

INSERT INTO `answer` (`users_id`, `questions_id`, `user_choice`, `user_predict`) VALUES
(1, 1, 1, 2),
(2, 1, 2, 2),
(3, 1, 1, 1),
(4, 1, 1, 1),
(5, 1, 2, 2),
(6, 1, 1, 2),
(7, 1, 2, 1),
(8, 1, 2, 2),
(9, 1, 1, 2),
(1, 2, 1, 2),
(2, 2, 1, 2),
(3, 2, 1, 2),
(4, 2, 2, 1),
(5, 2, 2, 2),
(6, 2, 1, 1),
(7, 2, 2, 1),
(8, 2, 1, 2),
(9, 2, 2, 2),
(1, 3, 1, 2),
(2, 3, 2, 2),
(3, 3, 1, 2),
(4, 3, 1, 1),
(5, 3, 2, 2),
(6, 3, 1, 2),
(7, 3, 1, 1),
(8, 3, 2, 1),
(9, 3, 1, 2),
(1, 4, 1, 2),
(2, 4, 2, 2),
(3, 4, 1, 1),
(4, 4, 2, 1),
(5, 4, 2, 2),
(6, 4, 2, 2),
(7, 4, 2, 1),
(8, 4, 2, 2),
(9, 4, 1, 1),
(1, 5, 1, 2),
(2, 5, 2, 2),
(3, 5, 2, 1),
(4, 5, 2, 1),
(5, 5, 2, 2),
(6, 5, 2, 2),
(7, 5, 2, 1),
(8, 5, 2, 2),
(9, 5, 1, 2),
(1, 6, 1, 2),
(2, 6, 1, 2),
(3, 6, 1, 1),
(4, 6, 1, 1),
(5, 6, 2, 1),
(6, 6, 1, 2),
(7, 6, 2, 1),
(8, 6, 2, 2),
(9, 6, 1, 2),
(1, 7, 2, 1),
(2, 7, 2, 2),
(3, 7, 1, 1),
(4, 7, 1, 1),
(5, 7, 2, 2),
(6, 7, 1, 2),
(7, 7, 2, 1),
(8, 7, 2, 2),
(9, 7, 2, 1),
(1, 8, 1, 2),
(2, 8, 2, 2),
(3, 8, 1, 2),
(4, 8, 1, 2),
(5, 8, 1, 2),
(6, 8, 1, 2),
(7, 8, 2, 1),
(8, 8, 2, 2),
(9, 8, 1, 2),
(1, 9, 1, 2),
(2, 9, 1, 2),
(3, 9, 1, 2),
(4, 9, 1, 2),
(5, 9, 2, 2),
(6, 9, 1, 2),
(7, 9, 1, 1),
(8, 9, 2, 2),
(9, 9, 1, 2),
(1, 10, 1, 2),
(2, 10, 2, 2),
(3, 10, 2, 1),
(4, 10, 2, 1),
(5, 10, 2, 2),
(6, 10, 1, 2),
(7, 10, 2, 2),
(8, 10, 2, 2),
(9, 10, 1, 2),
(1, 11, 1, 2),
(2, 11, 2, 2),
(3, 11, 2, 1),
(4, 11, 2, 1),
(5, 11, 2, 1),
(6, 11, 1, 1),
(7, 11, 1, 1),
(8, 11, 1, 2),
(9, 11, 1, 2),
(1, 12, 1, 2),
(2, 12, 2, 2),
(3, 12, 2, 1),
(4, 12, 2, 1),
(5, 12, 2, 1),
(6, 12, 2, 1),
(7, 12, 2, 1),
(8, 12, 2, 2),
(9, 12, 1, 2),
(1, 13, 1, 1),
(2, 13, 1, 2),
(3, 13, 1, 1),
(4, 13, 1, 1),
(5, 13, 1, 2),
(6, 13, 1, 2),
(7, 13, 2, 1),
(8, 13, 2, 1),
(9, 13, 1, 2),
(1, 14, 1, 1),
(2, 14, 2, 2),
(3, 14, 2, 1),
(4, 14, 1, 2),
(5, 14, 1, 1),
(6, 14, 1, 2),
(7, 14, 1, 1),
(8, 14, 2, 2),
(9, 14, 1, 1),
(1, 15, 1, 2),
(2, 15, 1, 1),
(3, 15, 1, 1),
(4, 15, 1, 1),
(5, 15, 2, 2),
(6, 15, 2, 2),
(7, 15, 2, 1),
(8, 15, 2, 2),
(9, 15, 2, 2),
(1, 16, 1, 2),
(2, 16, 2, 2),
(3, 16, 2, 1),
(4, 16, 1, 2),
(5, 16, 1, 2),
(6, 16, 1, 2),
(7, 16, 2, 2),
(8, 16, 2, 2),
(9, 16, 1, 2),
(1, 17, 1, 1),
(2, 17, 1, 2),
(3, 17, 1, 1),
(4, 17, 1, 1),
(5, 17, 1, 1),
(6, 17, 1, 1),
(7, 17, 2, 1),
(8, 17, 2, 1),
(9, 17, 1, 2),
(1, 18, 1, 2),
(2, 18, 2, 1),
(3, 18, 2, 1),
(4, 18, 2, 1),
(5, 18, 2, 1),
(6, 18, 1, 1),
(7, 18, 2, 1),
(8, 18, 2, 1),
(9, 18, 1, 2),
(1, 19, 2, 2),
(2, 19, 2, 1),
(3, 19, 2, 1),
(4, 19, 1, 1),
(5, 19, 2, 2),
(6, 19, 2, 1),
(7, 19, 2, 2),
(8, 19, 2, 1),
(9, 19, 1, 2),
(1, 20, 1, 1),
(2, 20, 1, 2),
(3, 20, 1, 1),
(4, 20, 1, 1),
(5, 20, 1, 2),
(6, 20, 1, 2),
(7, 20, 1, 1),
(8, 20, 1, 2),
(9, 20, 1, 2),
(1, 21, 2, 2),
(2, 21, 2, 2),
(3, 21, 2, 1),
(4, 21, 1, 1),
(5, 21, 2, 2),
(6, 21, 1, 1),
(7, 21, 2, 1),
(8, 21, 2, 2),
(9, 21, 1, 2),
(1, 22, 1, 1),
(2, 22, 1, 2),
(3, 22, 1, 1),
(4, 22, 1, 1),
(5, 22, 2, 2),
(6, 22, 1, 2),
(7, 22, 1, 1),
(8, 22, 2, 1),
(9, 22, 1, 2),
(1, 23, 1, 2),
(2, 23, 1, 1),
(3, 23, 2, 2),
(4, 23, 1, 2),
(5, 23, 2, 2),
(6, 23, 1, 1),
(7, 23, 2, 2),
(8, 23, 1, 1),
(9, 23, 1, 2),
(1, 24, 1, 2),
(2, 24, 2, 1),
(3, 24, 1, 1),
(4, 24, 1, 2),
(5, 24, 1, 2),
(6, 24, 1, 2),
(7, 24, 2, 1),
(8, 24, 1, 2),
(9, 24, 1, 1),
(1, 25, 1, 2),
(2, 25, 2, 1),
(3, 25, 2, 1),
(4, 25, 2, 1),
(5, 25, 2, 1),
(6, 25, 2, 2),
(7, 25, 1, 1),
(8, 25, 1, 2),
(9, 25, 2, 2),
(1, 26, 1, 2),
(2, 26, 1, 2),
(3, 26, 1, 2),
(4, 26, 1, 1),
(5, 26, 1, 2),
(6, 26, 2, 1),
(7, 26, 2, 1),
(8, 26, 1, 2),
(9, 26, 1, 2),
(1, 27, 1, 2),
(2, 27, 1, 2),
(3, 27, 1, 1),
(4, 27, 1, 2),
(5, 27, 1, 2),
(6, 27, 2, 2),
(7, 27, 2, 2),
(8, 27, 1, 2),
(9, 27, 1, 1),
(1, 28, 1, 1),
(2, 28, 2, 2),
(3, 28, 2, 1),
(4, 28, 1, 1),
(5, 28, 2, 1),
(6, 28, 2, 2),
(7, 28, 1, 1),
(8, 28, 2, 1),
(9, 28, 2, 2),
(1, 29, 1, 2),
(2, 29, 2, 1),
(3, 29, 2, 1),
(4, 29, 1, 2),
(5, 29, 2, 2),
(6, 29, 1, 1),
(7, 29, 1, 1),
(8, 29, 1, 2),
(9, 29, 1, 1),
(1, 30, 1, 1),
(2, 30, 2, 2),
(3, 30, 2, 2),
(4, 30, 1, 1),
(5, 30, 2, 1),
(6, 30, 1, 2),
(7, 30, 2, 2),
(8, 30, 2, 1),
(9, 30, 1, 2),
(1, 31, 2, 2),
(2, 31, 2, 2),
(3, 31, 1, 2),
(4, 31, 1, 1),
(5, 31, 2, 1),
(6, 31, 1, 2),
(7, 31, 1, 1),
(8, 31, 1, 2),
(9, 31, 2, 2),
(1, 32, 2, 2),
(2, 32, 2, 2),
(3, 32, 1, 1),
(4, 32, 1, 2),
(5, 32, 2, 2),
(6, 32, 1, 2),
(7, 32, 2, 1),
(8, 32, 1, 1),
(9, 32, 1, 2),
(1, 33, 2, 2),
(2, 33, 2, 2),
(3, 33, 1, 1),
(4, 33, 1, 1),
(5, 33, 2, 2),
(6, 33, 2, 2),
(7, 33, 2, 1),
(8, 33, 2, 1),
(9, 33, 1, 1),
(1, 34, 1, 2),
(2, 34, 1, 1),
(3, 34, 1, 1),
(4, 34, 2, 2),
(5, 34, 2, 2),
(6, 34, 1, 1),
(7, 34, 2, 1),
(8, 34, 2, 1),
(9, 34, 1, 1),
(1, 35, 1, 2),
(2, 35, 1, 2),
(3, 35, 1, 2),
(4, 35, 1, 2),
(5, 35, 1, 2),
(6, 35, 1, 2),
(7, 35, 2, 1),
(8, 35, 2, 1),
(9, 35, 1, 1),
(1, 36, 1, 2),
(2, 36, 1, 2),
(3, 36, 1, 1),
(4, 36, 2, 2),
(5, 36, 2, 2),
(6, 36, 2, 1),
(7, 36, 2, 1),
(8, 36, 1, 2),
(9, 36, 1, 2),
(1, 37, 1, 2),
(2, 37, 1, 2),
(3, 37, 2, 1),
(4, 37, 1, 2),
(5, 37, 1, 2),
(6, 37, 1, 2),
(7, 37, 2, 1),
(8, 37, 1, 2),
(9, 37, 1, 1),
(1, 38, 1, 2),
(2, 38, 2, 2),
(3, 38, 2, 1),
(4, 38, 1, 1),
(5, 38, 2, 2),
(6, 38, 2, 2),
(7, 38, 2, 1),
(8, 38, 2, 1),
(9, 38, 1, 1),
(1, 39, 1, 1),
(2, 39, 2, 1),
(3, 39, 2, 1),
(4, 39, 2, 1),
(5, 39, 2, 2),
(6, 39, 1, 2),
(7, 39, 1, 1),
(8, 39, 2, 1),
(9, 39, 1, 1),
(1, 40, 1, 2),
(2, 40, 2, 2),
(3, 40, 1, 2),
(4, 40, 2, 1),
(5, 40, 1, 2),
(6, 40, 2, 2),
(7, 40, 2, 1),
(8, 40, 1, 2),
(9, 40, 2, 2),
(1, 41, 1, 2),
(2, 41, 1, 1),
(3, 41, 2, 1),
(4, 41, 2, 1),
(5, 41, 2, 1),
(6, 41, 1, 2),
(7, 41, 2, 2),
(8, 41, 2, 1),
(9, 41, 1, 1),
(1, 42, 1, 1),
(2, 42, 2, 2),
(3, 42, 1, 2),
(4, 42, 2, 1),
(5, 42, 1, 2),
(6, 42, 1, 1),
(7, 42, 2, 2),
(8, 42, 2, 1),
(9, 42, 1, 1),
(1, 43, 2, 2),
(2, 43, 1, 2),
(3, 43, 2, 1),
(4, 43, 2, 1),
(5, 43, 2, 2),
(6, 43, 1, 1),
(7, 43, 2, 2),
(8, 43, 2, 1),
(9, 43, 1, 2),
(1, 44, 1, 2),
(2, 44, 2, 1),
(3, 44, 2, 1),
(4, 44, 1, 1),
(5, 44, 1, 2),
(6, 44, 1, 2),
(7, 44, 2, 1),
(8, 44, 2, 1),
(9, 44, 1, 1),
(1, 45, 1, 2),
(2, 45, 3, 2),
(3, 45, 1, 1),
(4, 45, 2, 1),
(5, 45, 1, 1),
(6, 45, 1, 1),
(7, 45, 1, 1),
(8, 45, 2, 2),
(9, 45, 2, 2),
(1, 46, 1, 1),
(2, 46, 2, 1),
(3, 46, 1, 2),
(4, 46, 2, 2),
(5, 46, 1, 2),
(6, 46, 2, 2),
(7, 46, 1, 1),
(8, 46, 2, 1),
(9, 46, 1, 2);
