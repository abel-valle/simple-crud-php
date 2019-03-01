CREATE TABLE IF NOT EXISTS `products` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `description` varchar(200) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `brand` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `price` double NOT NULL,
  `image` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id_product`, `name`, `description`, `brand`, `price`, `image`) VALUES
(1, 'LG P880 4X HD', 'Un teléfono increible!.', 'LG', 6700, 'images/telefono-lg.jpg'),
(2, 'Spot It', 'Juego visual para toda la familia.', 'Blue Orange', 252, 'images/spotit.jpg'),
(3, 'Samsung Galaxy Tab 10.1', 'Una buena tablet.', 'Samsung', 5050.5, 'images/galaxy-tablet.jpg');
