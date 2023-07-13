CREATE DATABASE dotStudent;

DROP TABLE IF EXISTS ejem;

CREATE TABLE users (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(20), 
  lastName VARCHAR(20), 
  email VARCHAR(50) UNIQUE, 
  password VARCHAR(100)
);

CREATE TABLE classes (
  id SERIAL PRIMARY KEY, 
  subject VARCHAR(20),
  name VARCHAR(50), 
  description VARCHAR(150), 
  level VARCHAR(30),
  schedule VARCHAR(20), 
  price INT,
  img VARCHAR(200),  
  id_user INT REFERENCES users(id)
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY, 
  id_user INT REFERENCES users(id), 
  id_classes INT REFERENCES classes(id) 
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY, 
  id_user INT REFERENCES users(id), 
  id_classes INT REFERENCES classes(id),
  rating INT, 
  date DATE 
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY, 
  id_user INT REFERENCES users(id), 
  id_classes INT REFERENCES classes(id),
  comment VARCHAR(100), 
  date DATE 
);

CREATE TABLE sales (
  id SERIAL PRIMARY KEY, 
  id_user INT REFERENCES users(id), 
  date DATE,
  total INT 
);

CREATE TABLE sales_detail (
  id SERIAL PRIMARY KEY, 
  id_classes INT REFERENCES classes(id),
  id_sales INT REFERENCES sales(id),
  amount INT,
  price INT 
);


INSERT INTO usuarios (id, nombre, apellido, correo, pass) VALUES
(1, 'diego', 'lorca', 'diegolorca@correo.cl', '123'),
(2, 'mariana', 'veliz', 'marianaveliz@correo.cl', '123'),
(3, 'juan', 'perez', 'jp@correo.cl', '123'),
(4, 'valentina', 'rodriguez', 'vr@correo.cl', '123'),
(5, 'rodrigo', 'gonzalez', 'rg@correo.cl', '123'),
(6, 'Laura', 'García', 'lauragarcia@correo.cl', '123'),
(7, 'Pedro', 'Soto', 'pedrosoto@correo.cl', '123'),
(8, 'Camila', 'Morales', 'camilamorales@correo.cl', '123'),
(9, 'Andrés', 'López', 'andreslopez@correo.cl', '123'),
(10, 'Marcela', 'Vega', 'marcelavega@correo.cl', '123'),
(11, 'Roberto', 'González', 'robertogonzalez@correo.cl', '123'),
(12, 'Carolina', 'Herrera', 'carolinaherrera@correo.cl', '123'),
(13, 'Javier', 'Fuentes', 'javierfuentes@correo.cl', '123'),
(14, 'Isabel', 'Silva', 'isabelsilva@correo.cl', '123'),
(15, 'Diego', 'Mora', 'diegomora@correo.cl', '123'),
(16, 'Mariana', 'Gómez', 'marianagomez@correo.cl', '123'),
(17, 'Luis', 'Cabrera', 'luiscabrera@correo.cl', '123'),
(18, 'Daniela', 'Valenzuela', 'danielavalenzuela@correo.cl', '123'),
(19, 'Sebastián', 'Rojas', 'sebastianrojas@correo.cl', '123'),
(20, 'Claudia', 'Araya', 'claudiaaraya@correo.cl', '123');

INSERT INTO clases (id, asignatura, nombre, descripcion, nivel, horario, precio, id_usuarios) VALUES
(1, 'matematicas', 'clases de matematicas calculo', 'clases de matematicas 10 horas todo nivel especialidad calculo, se imparten en clases de 1 hora semanal', 'basica/media', 'semana', 100000, 1),
(2, 'ingles', 'clases de ingles basica/media/universitaria', 'clases de ingles 4 horas todo nivel , se imparten en clases de 1 hora semanal durante 1 mes', 'basica/media/universitaria', 'fin de semana', 40000, 2),
(3, 'lenguaje', 'clases de lenguaje y comunicación', 'Clases de lenguaje y comunicación para reforzar habilidades de lectura, escritura y comprensión textual', 'media', 'tarde', 80000, 3),
(4, 'historia', 'clases de historia universal', 'Clases de historia universal para abordar temas clave de la historia mundial', 'media', 'mañana', 60000, 4),
(5, 'ciencias', 'clases de ciencias naturales', 'Clases de ciencias naturales para aprender sobre biología, química y física', 'media', 'tarde', 70000, 5),
(6, 'física', 'clases de física', 'Clases de física para reforzar los conceptos y principios fundamentales', 'media', 'tarde', 75000, 1),
(7, 'química', 'clases de química', 'Clases de química para comprender los elementos, compuestos y reacciones químicas', 'media', 'tarde', 70000, 2),
(8, 'biología', 'clases de biología', 'Clases de biología para aprender sobre la vida, organismos y procesos biológicos', 'media', 'mañana', 70000, 3),
(9, 'geografía', 'clases de geografía', 'Clases de geografía para estudiar los diferentes aspectos geográficos del mundo', 'media', 'tarde', 60000, 4),
(10, 'educación física', 'clases de educación física', 'Clases de educación física para promover el ejercicio y la actividad física', 'media', 'tarde', 50000, 5),
(11, 'arte', 'clases de arte', 'Clases de arte para explorar la creatividad y aprender sobre diferentes expresiones artísticas', 'media', 'mañana', 60000, 1),
(12, 'tecnología', 'clases de tecnología', 'Clases de tecnología para adquirir habilidades en el uso de herramientas tecnológicas', 'media', 'tarde', 65000, 2),
(13, 'matematicas', 'clases de matematicas algebra', 'Clases de matematicas 10 horas todo nivel especialidad algebra, se imparten en clases de 1 hora semanal', 'media', 'tarde', 90000, 6),
(14, 'química', 'clases de química orgánica', 'Clases de química orgánica para comprender los compuestos y reacciones químicas orgánicas', 'media', 'tarde', 80000, 7),
(15, 'lenguaje', 'clases de redacción', 'Clases de redacción para mejorar las habilidades de escritura y composición de textos', 'media', 'tarde', 75000, 8),
(16, 'historia', 'clases de historia de Chile', 'Clases de historia de Chile para estudiar los sucesos históricos del país', 'media', 'tarde', 65000, 9),
(17, 'ciencias', 'clases de ciencias sociales', 'Clases de ciencias sociales para aprender sobre historia, geografía y educación cívica', 'media', 'tarde', 70000, 10),
(18, 'física', 'clases de física mecánica', 'Clases de física mecánica para entender los principios de la mecánica clásica', 'media', 'tarde', 75000, 11),
(19, 'biología', 'clases de biología celular', 'Clases de biología celular para estudiar las estructuras y funciones de las células', 'media', 'tarde', 70000, 12),
(20, 'educación física', 'clases de deportes', 'Clases de deportes para practicar diferentes disciplinas deportivas', 'media', 'tarde', 50000, 13);

INSERT INTO favoritos (id, id_usuarios, id_clases) VALUES
(1, 1, 3),
(2, 2, 4),
(3, 3, 5),
(4, 4, 6),
(5, 5, 7),
(6, 6, 8),
(7, 7, 9),
(8, 8, 10),
(9, 9, 11),
(10, 10, 12),
(11, 11, 13),
(12, 12, 14),
(13, 13, 15),
(14, 14, 1),
(15, 15, 2);

INSERT INTO valoraciones (id, id_usuarios, id_clases, valor, fecha) VALUES
(1, 3, 3, 9, '2023-07-11'),
(2, 4, 4, 8, '2023-07-11'),
(3, 5, 5, 10, '2023-07-11'),
(4, 6, 6, 9, '2023-07-11'),
(5, 7, 7, 8, '2023-07-11'),
(6, 8, 8, 10, '2023-07-11'),
(7, 9, 9, 9, '2023-07-11'),
(8, 10, 10, 8, '2023-07-11'),
(9, 11, 11, 10, '2023-07-11'),
(10, 12, 12, 9, '2023-07-11'),
(11, 13, 13, 8, '2023-07-11'),
(12, 14, 14, 10, '2023-07-11'),
(13, 15, 15, 9, '2023-07-11'),
(14, 1, 1, 8, '2023-07-11'),
(15, 2, 2, 10, '2023-07-11');

INSERT INTO comentarios (id, id_usuarios, id_clases, comentarios, fecha) VALUES
(1, 3, 3, 'Excelente profesor y método de enseñanza', '2023-07-11'),
(2, 4, 4, 'Muy buena clase, aprendí mucho', '2023-07-11'),
(3, 5, 5, 'Recomiendo estas clases, son muy interesantes', '2023-07-11'),
(4, 6, 6, 'El profesor explica de manera clara y concisa', '2023-07-11'),
(5, 7, 7, 'Buen material de apoyo y explicaciones detalladas', '2023-07-11'),
(6, 8, 8, 'Me gustó mucho el enfoque de las clases', '2023-07-11'),
(7, 9, 9, 'El profesor es muy ameno y tiene buena didáctica', '2023-07-11'),
(8, 10, 10, 'Las clases son entretenidas y dinámicas', '2023-07-11'),
(9, 11, 11, 'Excelente conocimiento y pasión por el arte', '2023-07-11'),
(10, 12, 12, 'Aprendí mucho sobre programación gracias a estas clases', '2023-07-11'),
(11, 13, 13, 'El profesor es muy comprometido y tiene paciencia', '2023-07-11'),
(12, 14, 14, 'Me encantaron las técnicas enseñadas en estas clases', '2023-07-11'),
(13, 15, 15, 'Recomiendo estas clases de tecnología, son muy útiles', '2023-07-11'),
(14, 1, 1, 'Muy buen profesor, explica de forma clara y sencilla', '2023-07-11'),
(15, 2, 2, 'Las clases de inglés son muy interactivas y dinámicas', '2023-07-11');

INSERT INTO ventas (id, id_usuarios, fecha, total) VALUES
(1, 1, '2023-06-02', 100000),
(2, 1, '2023-06-05', 200000),
(3, 2, '2023-06-08', 40000);

INSERT INTO detalle_ventas (id, id_clases, id_ventas, cantidad, precio) VALUES
(1, 1, 1, 1, 100000),
(2, 1, 2, 2, 100000),
(3, 2, 3, 1, 40000);




