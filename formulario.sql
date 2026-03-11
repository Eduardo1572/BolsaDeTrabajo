-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-03-2026 a las 04:40:11
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `formulario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aspirante`
--

CREATE TABLE `aspirante` (
  `id_aspirante` int(11) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `curp` varchar(18) NOT NULL,
  `genero` varchar(50) NOT NULL,
  `estado_civil` varchar(50) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `ruta_cv` varchar(255) DEFAULT NULL,
  `id_direccion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `aspirante`
--

INSERT INTO `aspirante` (`id_aspirante`, `nombres`, `apellidos`, `fecha_nacimiento`, `curp`, `genero`, `estado_civil`, `correo`, `telefono`, `ruta_cv`, `id_direccion`) VALUES
(1, 'Carlos Emilio', 'Reyes Montoya', '1991-03-14', 'REMC910314HDFYNS05', 'Masculino', 'Soltero', 'carlos.reyes@gmail.com', '+52 55 4821 3670', '/cvs/carlos_reyes.pdf', 1),
(2, 'Valeria Sofía', 'Torres Guzmán', '1994-08-22', 'TOGV940822MDFRRLA0', 'Femenino', 'Casada', 'valeria.torres@outlook.com', '+52 33 3914 5528', '/cvs/valeria_torres.pdf', 2),
(3, 'Miguel Ángel', 'Sánchez Ibarra', '1989-11-05', 'SAIM891105HNLNCG02', 'Masculino', 'Divorciado', 'miguel.sanchez@protonmail.com', '+52 81 8034 9217', '/cvs/miguel_sanchez.pdf', 3),
(4, 'Daniela Paola', 'Flores Espinoza', '1996-02-17', 'FOED960217MDFLLNA0', 'Femenino', 'Soltera', 'daniela.flores@yahoo.com', '+52 81 9102 4783', '/cvs/daniela_flores.pdf', 4),
(5, 'Roberto Adrián', 'Mendoza Vargas', '1988-07-30', 'MEVR880730HDFNDR08', 'Masculino', 'Casado', 'roberto.mendoza@gmail.com', '+52 55 6038 1294', '/cvs/roberto_mendoza.pdf', 5),
(6, 'Lucía Fernanda', 'Herrera Domínguez', '1993-05-09', 'HEDL930509MDFRRCA0', 'Femenino', 'Soltera', 'lucia.herrera@gmail.com', '+52 72 2851 6047', '/cvs/lucia_herrera.pdf', 6),
(7, 'Andrés Felipe', 'Castro Ríos', '1990-12-21', 'CARA901221HDFSNDN0', 'Masculino', 'Casado', 'andres.castro@live.com', '+52 22 4719 8356', '/cvs/andres_castro.pdf', 7),
(8, 'Mariana Isabel', 'López Fuentes', '1997-04-03', 'LOFM970403MDFPPR01', 'Femenino', 'Soltera', 'mariana.lopez@gmail.com', '+52 33 7463 2891', '/cvs/mariana_lopez.pdf', 8),
(9, 'Fernando José', 'Ruiz Alvarado', '1985-09-18', 'RUAF850918HDFRLN09', 'Masculino', 'Viudo', 'fernando.ruiz@outlook.com', '+52 664 381 7052', '/cvs/fernando_ruiz.pdf', 9),
(10, 'Gabriela Itzel', 'Morales Peña', '1995-06-11', 'MOPG950611MDFRLN02', 'Femenino', 'Casada', 'gabriela.morales@gmail.com', '+52 477 924 6130', '/cvs/gabriela_morales.pdf', 10),
(11, 'Alejandro', 'Vega Contreras', '1992-01-27', 'VECA920127HDFGNL03', 'Masculino', 'Soltero', 'alejandro.vega@gmail.com', '+52 97 9631 4807', '/cvs/alejandro_vega.pdf', 11),
(12, 'Sofía Renata', 'Jiménez Aguilar', '1998-10-15', 'JIAS981015MDFMGS07', 'Femenino', 'Soltera', 'sofia.jimenez@icloud.com', '+52 442 715 3926', '/cvs/sofia_jimenez.pdf', 12),
(13, 'Eduardo Iván', 'Ramírez Ortega', '1987-03-08', 'RAOE870308HDFRDR05', 'Masculino', 'Casado', 'eduardo.ramirez@gmail.com', '+52 55 3827 0641', '/cvs/eduardo_ramirez.pdf', 13),
(14, 'Paola Cristina', 'González Medina', '1993-07-22', 'GOMP930722MDFLND08', 'Femenino', 'Divorciada', 'paola.gonzalez@yahoo.com', '+52 48 4902 7318', '/cvs/paola_gonzalez.pdf', 14),
(15, 'Óscar Mauricio', 'Díaz Villanueva', '1991-11-30', 'DIVO911130HDFLSC01', 'Masculino', 'Soltero', 'oscar.diaz@gmail.com', '+52 83 2046 8573', '/cvs/oscar_diaz.pdf', 15),
(16, 'Andrea Monserrat', 'Cervantes Leal', '1996-02-14', 'CELA960214MDFRVND0', 'Femenino', 'Casada', 'andrea.cervantes@outlook.com', '+52 81 7384 5019', '/cvs/andrea_cervantes.pdf', 16),
(17, 'Diego Armando', 'Núñez Estrada', '1989-08-07', 'NUED890807HDFSNDR0', 'Masculino', 'Soltero', 'diego.nunez@protonmail.com', '+52 78 4261 0938', '/cvs/diego_nunez.pdf', 17),
(18, 'Karla Beatriz', 'Medina Salinas', '1994-12-01', 'MESK941201MDFLLN04', 'Femenino', 'Soltera', 'karla.medina@gmail.com', '+52 55 9017 4362', '/cvs/karla_medina.pdf', 18),
(19, 'Ricardo Sebastián', 'Guerrero Tapia', '1986-04-25', 'GUTR860425HDFRRCD0', 'Masculino', 'Casado', 'ricardo.guerrero@live.com', '+52 62 3850 7194', '/cvs/ricardo_guerrero.pdf', 19),
(20, 'Natalia Esperanza', 'Romero Blanco', '1999-09-13', 'ROBN990913MDFMNTA0', 'Femenino', 'Soltera', 'natalia.romero@gmail.com', '+52 664 270 8435', '/cvs/natalia_romero.pdf', 20),
(21, 'Héctor Guillermo', 'Paredes Cruz', '1990-06-03', 'PACH900603HDFRRCT0', 'Masculino', 'Casado', 'hector.paredes@gmail.com', '+52 55 8143 2760', '/cvs/hector_paredes.pdf', 21),
(22, 'Itzel Marisol', 'Ávila Ramos', '1995-01-19', 'AVRI950119MDFVMT03', 'Femenino', 'Soltera', 'itzel.avila@outlook.com', '+52 33 6924 5081', '/cvs/itzel_avila.pdf', 22),
(23, 'Javier Ernesto', 'Salinas Bravo', '1988-05-28', 'SABJ880528HDFLRV06', 'Masculino', 'Divorciado', 'javier.salinas@gmail.com', '+52 81 5072 3946', '/cvs/javier_salinas.pdf', 23);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudad`
--

CREATE TABLE `ciudad` (
  `id_ciudad` int(11) NOT NULL,
  `nombre_ciudad` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ciudad`
--

INSERT INTO `ciudad` (`id_ciudad`, `nombre_ciudad`) VALUES
(1, 'Ciudad de México'),
(2, 'Guadalajara'),
(3, 'Monterrey'),
(4, 'Puebla'),
(5, 'Tijuana'),
(6, 'León'),
(7, 'Mérida'),
(8, 'Querétaro'),
(9, 'San Luis Potosí'),
(10, 'Hermosillo'),
(11, 'Ciudad de México'),
(12, 'Guadalajara'),
(13, 'Monterrey'),
(14, 'Puebla'),
(15, 'Tijuana'),
(16, 'León'),
(17, 'Mérida'),
(18, 'Querétaro'),
(19, 'San Luis Potosí'),
(20, 'Hermosillo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `codigo_postal`
--

CREATE TABLE `codigo_postal` (
  `id_cp` int(11) NOT NULL,
  `numero_cp` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `codigo_postal`
--

INSERT INTO `codigo_postal` (`id_cp`, `numero_cp`) VALUES
(2, '03100'),
(1, '06600'),
(9, '22000'),
(10, '22200'),
(11, '37000'),
(4, '45070'),
(3, '45580'),
(6, '64000'),
(5, '66220'),
(12, '66350'),
(7, '72000'),
(8, '72810'),
(15, '76000'),
(16, '76240'),
(17, '78000'),
(18, '78436'),
(19, '83000'),
(20, '83400'),
(13, '97000'),
(14, '97314');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colonia`
--

CREATE TABLE `colonia` (
  `id_colonia` int(11) NOT NULL,
  `nombre_colonia` varchar(150) NOT NULL,
  `id_cp` int(11) NOT NULL,
  `id_municipio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `colonia`
--

INSERT INTO `colonia` (`id_colonia`, `nombre_colonia`, `id_cp`, `id_municipio`) VALUES
(1, 'Doctores', 1, 1),
(2, 'Del Valle', 2, 2),
(3, 'Las Fuentes', 3, 3),
(4, 'Ciudad Granja', 4, 4),
(5, 'Valle Oriente', 5, 5),
(6, 'Centro Histórico MTY', 6, 6),
(7, 'El Carmen', 7, 7),
(8, 'San Bernardino Tlaxcalancingo', 8, 8),
(9, 'Zona Río', 9, 9),
(10, 'Playas Quinta Sección', 10, 10),
(11, 'Medina', 11, 11),
(12, 'Valle del Campestre', 12, 12),
(13, 'García Ginerés', 13, 13),
(14, 'Caucel Residencial', 14, 14),
(15, 'Lomas de Casa Blanca', 15, 15),
(16, 'Hacienda El Marqués', 16, 16),
(17, 'Tangamanga', 17, 17),
(18, 'Lomas del Pedregal', 18, 18),
(19, 'Pitic', 19, 19),
(20, 'Bahía Encantada', 20, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccion`
--

CREATE TABLE `direccion` (
  `id_direccion` int(11) NOT NULL,
  `calle_y_numero` varchar(255) NOT NULL,
  `id_colonia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `direccion`
--

INSERT INTO `direccion` (`id_direccion`, `calle_y_numero`, `id_colonia`) VALUES
(1, 'Calle Dr. Andrade 134 Int. 3', 1),
(2, 'Av. Insurgentes Sur 879', 2),
(3, 'Calle Hidalgo 22', 3),
(4, 'Blvd. Marcelino García Barragán 4501', 4),
(5, 'Av. Vasconcelos 301 Torre B', 5),
(6, 'Calle Zaragoza 88 Int. 12', 6),
(7, 'Calle 5 de Mayo 47', 7),
(8, 'Calle Tulipán 9', 8),
(9, 'Paseo de los Héroes 10301', 9),
(10, 'Calle del Mar 56', 10),
(11, 'Blvd. López Mateos 1203', 11),
(12, 'Calle Amapola 37', 12),
(13, 'Calle 17 Num. 214 x 30 y 32', 13),
(14, 'Av. Caucel 789', 14),
(15, 'Blvd. Bernardo Quintana 4200 Depto. 8', 15),
(16, 'Calle Girasol 4 Fracc. Hacienda', 16),
(17, 'Av. Venustiano Carranza 1100', 17),
(18, 'Calle Cedro 23', 18),
(19, 'Blvd. Kino 541', 19),
(20, 'Calle Bahía Sur 7', 20),
(21, 'Calle Puebla 302 Int. 6', 1),
(22, 'Av. Revolución 2240 Depto. 3B', 2),
(23, 'Calle Libertad 118', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `id_empresa` int(11) NOT NULL,
  `nombre_empresa` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`id_empresa`, `nombre_empresa`) VALUES
(13, 'Amazon México'),
(3, 'Banorte'),
(12, 'BBVA México'),
(5, 'Cemex'),
(7, 'Cinépolis'),
(11, 'Deloitte México'),
(2, 'FEMSA'),
(8, 'Gruma'),
(1, 'Grupo Bimbo'),
(14, 'IBM México'),
(6, 'Liverpool'),
(10, 'Megacable'),
(15, 'Nissan Mexicana'),
(4, 'Softtek'),
(9, 'Televisa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencia`
--

CREATE TABLE `experiencia` (
  `id_experiencia` int(11) NOT NULL,
  `anios_experiencia` varchar(50) DEFAULT NULL,
  `experiencia_relevante` text DEFAULT NULL,
  `id_aspirante` int(11) NOT NULL,
  `id_empresa` int(11) NOT NULL,
  `id_puesto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `experiencia`
--

INSERT INTO `experiencia` (`id_experiencia`, `anios_experiencia`, `experiencia_relevante`, `id_aspirante`, `id_empresa`, `id_puesto`) VALUES
(1, '4 años', 'Diseño de dashboards en Power BI y análisis de KPIs de ventas para la región LATAM.', 1, 14, 1),
(2, '3 años', 'Rediseño de la app móvil de Cinépolis, pruebas de usabilidad y prototipado en Figma.', 2, 7, 4),
(3, '6 años', 'Desarrollo de microservicios en Java Spring Boot y gestión de bases de datos PostgreSQL.', 3, 4, 2),
(4, '2 años 6 meses', 'Gestión de campañas digitales en Meta y Google Ads, incrementando conversiones un 38%.', 4, 6, 6),
(5, '8 años', 'Liderazgo de proyectos de construcción de plantas con presupuestos superiores a MXN 50 M.', 5, 5, 3),
(6, '5 años', 'Diseño de arquitectura de microservicios cloud-native sobre AWS; reducción de latencia 60%.', 6, 10, 13),
(7, '4 años', 'Gestión de cartera de 120 clientes institucionales en la zona centro-sur del país.', 7, 8, 9),
(8, '1 año 8 meses', 'Apoyo en coordinación de agenda ejecutiva, control de viáticos y reportes operativos.', 8, 9, 7),
(9, '12 años', 'Dirección de la fuerza de ventas nacional, expansión a 5 nuevas regiones y crecimiento del 22% en ingresos.', 9, 2, 15),
(10, '3 años', 'Optimización de rutas de distribución en Zona Bajío; reducción de costos logísticos del 15%.', 10, 1, 10),
(11, '4 años 3 meses', 'Evaluación de portafolios de inversión y elaboración de reportes regulatorios para CNBV.', 11, 3, 11),
(12, '2 años', 'Reclutamiento masivo para centros de distribución; implementación de onboarding digital.', 12, 13, 12),
(13, '7 años', 'Implementación de SOC, gestión de vulnerabilidades y respuesta a incidentes SIEM/SOAR.', 13, 14, 14),
(14, '5 años', 'Auditoría financiera de empresas del sector retail; preparación de estados financieros IFRS.', 14, 11, 5),
(15, '3 años', 'Soporte de infraestructura crítica bancaria, administración de Active Directory y Cisco switches.', 15, 12, 8),
(16, '6 años', 'Coordinación de proyectos de mejora continua bajo metodología Lean Manufacturing en planta Aguascalientes.', 16, 15, 3),
(17, '5 años', 'Construcción de APIs REST en Node.js, integración con Salesforce y AWS Lambda.', 17, 4, 2),
(18, '3 años', 'Modelado de datos en Snowflake y automatización de reportes con Python y Airflow.', 18, 2, 1),
(19, '11 años', 'Dirección estratégica de la red de distribución en el noroeste; negociación con cadenas de autoservicio.', 19, 1, 15),
(20, '1 año 4 meses', 'Investigación de usuarios, wireframing y diseño de flujos para el portal de autogestión de clientes.', 20, 10, 4),
(21, '6 años', 'Estrategia de contenidos y pauta digital para marcas de entretenimiento; manejo de presupuesto de MXN 8 M anuales.', 21, 9, 6),
(22, '2 años', 'Venta consultiva en el departamento de hogar; cierre de ventas corporativas y crédito Liverpool.', 22, 6, 9),
(23, '7 años', 'Coordinación de flota de 80 unidades y gestión de inventario de materiales para proyectos de infraestructura.', 23, 5, 10),
(24, '2 años', 'Analista Jr. de datos de consumidor en campañas de lealtad usando SQL y Tableau.', 1, 6, 1),
(25, '1 año 6 meses', 'Soporte en diseño de interfaces para sistema interno de facturación.', 2, 11, 4),
(26, '3 años', 'Desarrollo y mantenimiento de sistemas ERP en plataforma .NET para área de finanzas.', 3, 12, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipio`
--

CREATE TABLE `municipio` (
  `id_municipio` int(11) NOT NULL,
  `nombre_municipio` varchar(100) NOT NULL,
  `id_ciudad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `municipio`
--

INSERT INTO `municipio` (`id_municipio`, `nombre_municipio`, `id_ciudad`) VALUES
(1, 'Cuauhtémoc', 1),
(2, 'Benito Juárez', 1),
(3, 'Tlaquepaque', 2),
(4, 'Zapopan', 2),
(5, 'San Pedro Garza García', 3),
(6, 'Monterrey Centro', 3),
(7, 'Puebla Centro', 4),
(8, 'San Andrés Cholula', 4),
(9, 'Tijuana Centro', 5),
(10, 'Playas de Tijuana', 5),
(11, 'León Centro', 6),
(12, 'Santa Catarina', 6),
(13, 'Mérida Centro', 7),
(14, 'Caucel', 7),
(15, 'Querétaro Centro', 8),
(16, 'El Marqués', 8),
(17, 'SLP Centro', 9),
(18, 'Soledad de Graciano', 9),
(19, 'Hermosillo Centro', 10),
(20, 'Bahía de Kino', 10),
(21, 'Cuauhtémoc', 1),
(22, 'Benito Juárez', 1),
(23, 'Tlaquepaque', 2),
(24, 'Zapopan', 2),
(25, 'San Pedro Garza García', 3),
(26, 'Monterrey Centro', 3),
(27, 'Puebla Centro', 4),
(28, 'San Andrés Cholula', 4),
(29, 'Tijuana Centro', 5),
(30, 'Playas de Tijuana', 5),
(31, 'León Centro', 6),
(32, 'Santa Catarina', 6),
(33, 'Mérida Centro', 7),
(34, 'Caucel', 7),
(35, 'Querétaro Centro', 8),
(36, 'El Marqués', 8),
(37, 'SLP Centro', 9),
(38, 'Soledad de Graciano', 9),
(39, 'Hermosillo Centro', 10),
(40, 'Bahía de Kino', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preparacion`
--

CREATE TABLE `preparacion` (
  `id_preparacion` int(11) NOT NULL,
  `nivel_estudios` varchar(100) NOT NULL,
  `institucion` varchar(150) NOT NULL,
  `area_carrera` varchar(150) NOT NULL,
  `anio_graduacion` int(11) NOT NULL,
  `id_aspirante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `preparacion`
--

INSERT INTO `preparacion` (`id_preparacion`, `nivel_estudios`, `institucion`, `area_carrera`, `anio_graduacion`, `id_aspirante`) VALUES
(1, 'Licenciatura', 'UNAM', 'Ingeniería en Computación', 2014, 1),
(2, 'Maestría', 'ITESM Campus Guadalajara', 'Diseño de Interacción Digital', 2019, 2),
(3, 'Licenciatura', 'ITESM Campus Monterrey', 'Ingeniería en Sistemas', 2013, 3),
(4, 'Licenciatura', 'Universidad Iberoamericana Puebla', 'Mercadotecnia', 2018, 4),
(5, 'Maestría', 'UNAM', 'Administración de Empresas (MBA)', 2013, 5),
(6, 'Licenciatura', 'ITESM Campus Ciudad de México', 'Ingeniería en Tecnologías de Información', 2016, 6),
(7, 'Licenciatura', 'Universidad de Guadalajara', 'Licenciatura en Administración', 2015, 7),
(8, 'Licenciatura', 'BUAP', 'Administración de Empresas', 2019, 8),
(9, 'Maestría', 'IPADE Business School', 'Dirección de Empresas', 2012, 9),
(10, 'Licenciatura', 'Universidad de Guanajuato', 'Ingeniería Industrial', 2017, 10),
(11, 'Licenciatura', 'ITESM Campus Monterrey', 'Ingeniería Financiera', 2016, 11),
(12, 'Licenciatura', 'Universidad Anáhuac Norte', 'Psicología Organizacional', 2020, 12),
(13, 'Maestría', 'UNAM', 'Seguridad Informática', 2014, 13),
(14, 'Licenciatura', 'ITAM', 'Contaduría Pública', 2018, 14),
(15, 'Licenciatura', 'ITESM Campus Monterrey', 'Ingeniería en Telecomunicaciones', 2018, 15),
(16, 'Maestría', 'Universidad Panamericana', 'Gestión de la Innovación', 2018, 16),
(17, 'Licenciatura', 'Universidad Autónoma de SLP', 'Ingeniería en Software', 2014, 17),
(18, 'Licenciatura', 'UNAM', 'Actuaría', 2017, 18),
(19, 'Licenciatura', 'ITESM Campus Monterrey', 'Ingeniería en Negocios', 2011, 19),
(20, 'Licenciatura', 'Universidad Autónoma de Yucatán', 'Diseño Gráfico', 2021, 20),
(21, 'Maestría', 'Universidad Iberoamericana CDMX', 'Comunicación y Mercadotecnia', 2018, 21),
(22, 'Licenciatura', 'ITESM Campus Guadalajara', 'Administración de Empresas', 2018, 22),
(23, 'Maestría', 'UANL', 'Logística y Cadena de Suministro', 2015, 23),
(24, 'Especialidad', 'Instituto Politécnico Nacional', 'Ciencia de Datos y Machine Learning', 2017, 1),
(25, 'Diplomado', 'UNAM', 'Finanzas Corporativas', 2016, 5),
(26, 'Certificación', 'AWS Training & Certification', 'Solutions Architect Associate', 2021, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puesto`
--

CREATE TABLE `puesto` (
  `id_puesto` int(11) NOT NULL,
  `nombre_puesto` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `puesto`
--

INSERT INTO `puesto` (`id_puesto`, `nombre_puesto`) VALUES
(1, 'Analista de Datos'),
(11, 'Analista Financiero'),
(13, 'Arquitecto de Software'),
(7, 'Auxiliar Administrativo'),
(5, 'Contador General'),
(10, 'Coordinador de Logística'),
(2, 'Desarrollador Backend'),
(15, 'Director Comercial'),
(4, 'Diseñador UX/UI'),
(9, 'Ejecutivo de Ventas'),
(14, 'Especialista en Ciberseguridad'),
(6, 'Especialista en Marketing'),
(3, 'Gerente de Proyectos'),
(8, 'Ingeniero de Soporte TI'),
(12, 'Recursos Humanos');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aspirante`
--
ALTER TABLE `aspirante`
  ADD PRIMARY KEY (`id_aspirante`),
  ADD UNIQUE KEY `curp` (`curp`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD KEY `fk_asp_direccion` (`id_direccion`);

--
-- Indices de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`id_ciudad`);

--
-- Indices de la tabla `codigo_postal`
--
ALTER TABLE `codigo_postal`
  ADD PRIMARY KEY (`id_cp`),
  ADD UNIQUE KEY `numero_cp` (`numero_cp`);

--
-- Indices de la tabla `colonia`
--
ALTER TABLE `colonia`
  ADD PRIMARY KEY (`id_colonia`),
  ADD KEY `fk_col_cp` (`id_cp`),
  ADD KEY `fk_col_mun` (`id_municipio`);

--
-- Indices de la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD PRIMARY KEY (`id_direccion`),
  ADD KEY `fk_dir_colonia` (`id_colonia`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id_empresa`),
  ADD UNIQUE KEY `nombre_empresa` (`nombre_empresa`);

--
-- Indices de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  ADD PRIMARY KEY (`id_experiencia`),
  ADD KEY `fk_exp_aspirante` (`id_aspirante`),
  ADD KEY `fk_exp_empresa` (`id_empresa`),
  ADD KEY `fk_exp_puesto` (`id_puesto`);

--
-- Indices de la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD PRIMARY KEY (`id_municipio`),
  ADD KEY `fk_mun_ciudad` (`id_ciudad`);

--
-- Indices de la tabla `preparacion`
--
ALTER TABLE `preparacion`
  ADD PRIMARY KEY (`id_preparacion`),
  ADD KEY `fk_prep_aspirante` (`id_aspirante`);

--
-- Indices de la tabla `puesto`
--
ALTER TABLE `puesto`
  ADD PRIMARY KEY (`id_puesto`),
  ADD UNIQUE KEY `nombre_puesto` (`nombre_puesto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aspirante`
--
ALTER TABLE `aspirante`
  MODIFY `id_aspirante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  MODIFY `id_ciudad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `codigo_postal`
--
ALTER TABLE `codigo_postal`
  MODIFY `id_cp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `colonia`
--
ALTER TABLE `colonia`
  MODIFY `id_colonia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `direccion`
--
ALTER TABLE `direccion`
  MODIFY `id_direccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id_empresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  MODIFY `id_experiencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `municipio`
--
ALTER TABLE `municipio`
  MODIFY `id_municipio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `preparacion`
--
ALTER TABLE `preparacion`
  MODIFY `id_preparacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `puesto`
--
ALTER TABLE `puesto`
  MODIFY `id_puesto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `aspirante`
--
ALTER TABLE `aspirante`
  ADD CONSTRAINT `fk_asp_direccion` FOREIGN KEY (`id_direccion`) REFERENCES `direccion` (`id_direccion`);

--
-- Filtros para la tabla `colonia`
--
ALTER TABLE `colonia`
  ADD CONSTRAINT `fk_col_cp` FOREIGN KEY (`id_cp`) REFERENCES `codigo_postal` (`id_cp`),
  ADD CONSTRAINT `fk_col_mun` FOREIGN KEY (`id_municipio`) REFERENCES `municipio` (`id_municipio`);

--
-- Filtros para la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD CONSTRAINT `fk_dir_colonia` FOREIGN KEY (`id_colonia`) REFERENCES `colonia` (`id_colonia`);

--
-- Filtros para la tabla `experiencia`
--
ALTER TABLE `experiencia`
  ADD CONSTRAINT `fk_exp_aspirante` FOREIGN KEY (`id_aspirante`) REFERENCES `aspirante` (`id_aspirante`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_exp_empresa` FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`id_empresa`),
  ADD CONSTRAINT `fk_exp_puesto` FOREIGN KEY (`id_puesto`) REFERENCES `puesto` (`id_puesto`);

--
-- Filtros para la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD CONSTRAINT `fk_mun_ciudad` FOREIGN KEY (`id_ciudad`) REFERENCES `ciudad` (`id_ciudad`);

--
-- Filtros para la tabla `preparacion`
--
ALTER TABLE `preparacion`
  ADD CONSTRAINT `fk_prep_aspirante` FOREIGN KEY (`id_aspirante`) REFERENCES `aspirante` (`id_aspirante`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
