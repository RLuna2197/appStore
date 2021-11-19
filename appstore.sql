-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-09-2021 a las 19:40:32
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `appstore`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblaplicacion`
--

CREATE TABLE `tblaplicacion` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `descripcion` varchar(400) DEFAULT NULL,
  `icono` varchar(100) DEFAULT NULL,
  `instalada` tinyint(1) DEFAULT NULL,
  `app` varchar(100) DEFAULT NULL,
  `calificacion` int(11) NOT NULL,
  `descargas` int(11) NOT NULL,
  `desarrollador` varchar(100) NOT NULL,
  `idCategoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tblaplicacion`
--

INSERT INTO `tblaplicacion` (`codigo`, `nombre`, `precio`, `descripcion`, `icono`, `instalada`, `app`, `calificacion`, `descargas`, `desarrollador`, `idCategoria`) VALUES
(1, 'App', 20.5, 'App para pruebas', 'icono', 1, 'app', 3, 2500, 'Desarrollador', 1),
(3, 'App 2', 25.5, 'Probando app', 'icono 3', 0, 'app', 1, 9000, 'Desarrollador nuevo', 2),
(6, 'App test', 25.5, 'Probando app nueva', 'icono 4', 1, 'app', 1, 9000, 'Desarrollador nuevo', 2),
(7, 'App frontend', 10.2, 'Descripcion', '/icono', 0, NULL, 0, 0, 'developer', 2),
(8, 'Plantas vs Zombies', 20.5, 'App para pruebas', '1.webp', 1, 'app', 3, 2500, 'Desarrollador', 1),
(9, 'Mario Bross', 45, 'Juego de marioxd', '5.webp', 0, 'mario.apk', 0, 1000, 'Roberto Luna', 1),
(10, 'Carreras', 15, 'Juego de carreras', '14.webp', 0, 'carreras.apk', 4, 200, 'Kevin Castillo', 1),
(11, 'Amazon Prime Video', 25, 'Ver tus series favoritas', '21.webp', 0, 'amazon.apk', 4, 4500, 'Roberto Luna', 2),
(13, 'Discord', 0, 'Crea tu propio servidor y platica con tus amigos', '11.webp', 0, NULL, 0, 0, 'Kevin Castillo', 1),
(17, 'AliExpress', 20, 'AliExpress', '10.webp', 0, NULL, 0, 0, 'Roberto', 2),
(18, 'App 35', 35, 'Prueba de aplicaciones', '35.webp', 0, NULL, 0, 0, 'Desarrollador 35', 2),
(19, 'App 36', 36, 'Prueba de aplicaciones', '36.webp', 0, NULL, 0, 0, 'Desarrollador 36', 2),
(20, 'App 37', 37, 'Prueba de aplicaciones', '37.webp', 0, NULL, 0, 0, 'Desarrollador 37', 2),
(21, 'App 38', 38, 'Prueba de aplicaciones', '38.webp', 0, NULL, 0, 0, 'Desarrollador 38', 2),
(22, 'App 39', 39, 'Prueba de aplicaciones', '39.webp', 0, NULL, 0, 0, 'Desarrollador 39', 2),
(23, 'App 40', 40, 'Prueba de aplicaciones', '40.webp', 0, NULL, 0, 0, 'Desarrollador 40', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblcatagoria`
--

CREATE TABLE `tblcatagoria` (
  `idCategoria` int(11) NOT NULL,
  `nombreCategoria` varchar(100) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tblcatagoria`
--

INSERT INTO `tblcatagoria` (`idCategoria`, `nombreCategoria`, `descripcion`) VALUES
(1, 'Categoria 1', 'Descripcion de la categoria numero 1'),
(2, 'Categoria 2', 'Descripcion de la categoria numero 2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblcomentarioaplicacion`
--

CREATE TABLE `tblcomentarioaplicacion` (
  `idImagen` int(11) NOT NULL,
  `comentario` varchar(400) DEFAULT NULL,
  `calificacion` int(11) NOT NULL,
  `fecha` varchar(100) DEFAULT NULL,
  `usuario` varchar(100) DEFAULT NULL,
  `codigoAplicacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tblcomentarioaplicacion`
--

INSERT INTO `tblcomentarioaplicacion` (`idImagen`, `comentario`, `calificacion`, `fecha`, `usuario`, `codigoAplicacion`) VALUES
(1, 'Muy buena aplicacion', 4, '09/09/2021', 'Kevin Castillo', 1),
(2, 'Mala aplicacion', 1, '09/09/2021', 'Kevin Hernandez', 1),
(3, 'Muy buena app', 5, '10/09/2021', 'Kevin Castillo', 11),
(4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 3, '10/09/2021', 'Roberto Luna', 11),
(5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 4, '09/09/2021', 'Héctor Hernández', 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblimagenaplicacion`
--

CREATE TABLE `tblimagenaplicacion` (
  `idImagen` int(11) NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  `codigoAplicacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tblimagenaplicacion`
--

INSERT INTO `tblimagenaplicacion` (`idImagen`, `url`, `codigoAplicacion`) VALUES
(1, '1.webp', 1),
(2, '2.webp', 1),
(3, '3.webp', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbluser`
--

CREATE TABLE `tbluser` (
  `idUser` int(11) NOT NULL,
  `user` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbluser`
--

INSERT INTO `tbluser` (`idUser`, `user`, `password`) VALUES
(1, 'kevin', 'betheone'),
(2, 'roberto', 'betheone');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tblaplicacion`
--
ALTER TABLE `tblaplicacion`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `idCategoria` (`idCategoria`);

--
-- Indices de la tabla `tblcatagoria`
--
ALTER TABLE `tblcatagoria`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Indices de la tabla `tblcomentarioaplicacion`
--
ALTER TABLE `tblcomentarioaplicacion`
  ADD PRIMARY KEY (`idImagen`),
  ADD KEY `codigoAplicacion` (`codigoAplicacion`);

--
-- Indices de la tabla `tblimagenaplicacion`
--
ALTER TABLE `tblimagenaplicacion`
  ADD PRIMARY KEY (`idImagen`),
  ADD KEY `codigoAplicacion` (`codigoAplicacion`);

--
-- Indices de la tabla `tbluser`
--
ALTER TABLE `tbluser`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tblaplicacion`
--
ALTER TABLE `tblaplicacion`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `tblcatagoria`
--
ALTER TABLE `tblcatagoria`
  MODIFY `idCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tblcomentarioaplicacion`
--
ALTER TABLE `tblcomentarioaplicacion`
  MODIFY `idImagen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tblimagenaplicacion`
--
ALTER TABLE `tblimagenaplicacion`
  MODIFY `idImagen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tbluser`
--
ALTER TABLE `tbluser`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tblaplicacion`
--
ALTER TABLE `tblaplicacion`
  ADD CONSTRAINT `tblaplicacion_ibfk_1` FOREIGN KEY (`idCategoria`) REFERENCES `tblcatagoria` (`idCategoria`);

--
-- Filtros para la tabla `tblcomentarioaplicacion`
--
ALTER TABLE `tblcomentarioaplicacion`
  ADD CONSTRAINT `tblcomentarioaplicacion_ibfk_1` FOREIGN KEY (`codigoAplicacion`) REFERENCES `tblaplicacion` (`codigo`) ON DELETE CASCADE;

--
-- Filtros para la tabla `tblimagenaplicacion`
--
ALTER TABLE `tblimagenaplicacion`
  ADD CONSTRAINT `tblimagenaplicacion_ibfk_1` FOREIGN KEY (`codigoAplicacion`) REFERENCES `tblaplicacion` (`codigo`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
