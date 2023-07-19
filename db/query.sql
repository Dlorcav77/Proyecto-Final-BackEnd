CREATE DATABASE dotStudent;

DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS sales_detail;
DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(20) NOT NULL, 
  lastName VARCHAR(20) NOT NULL, 
  email VARCHAR(50) NOT NULL UNIQUE, 
  password VARCHAR(100) NOT NULL,
  img_avatar VARCHAR(200) 
);

CREATE TABLE classes (
  id SERIAL PRIMARY KEY, 
  subject VARCHAR(20) NOT NULL,
  name VARCHAR(50) NOT NULL, 
  description VARCHAR(150) NOT NULL, 
  level VARCHAR(30) NOT NULL,
  schedule VARCHAR(20) NOT NULL, 
  price INT NOT NULL,
  img VARCHAR(200) NOT NULL,  
  id_user INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY, 
  id_user INT REFERENCES users(id) ON DELETE CASCADE NOT NULL, 
  id_classes INT REFERENCES classes(id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY, 
  id_user INT REFERENCES users(id)  ON DELETE CASCADE NOT NULL, 
  id_classes INT REFERENCES classes(id)  ON DELETE CASCADE NOT NULL,
  rating INT NOT NULL, 
  date DATE NOT NULL DEFAULT CURRENT DATE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY, 
  id_user INT REFERENCES users(id)  ON DELETE CASCADE NOT NULL, 
  id_classes INT REFERENCES classes(id) ON DELETE CASCADE NOT NULL,
  comment VARCHAR(100) NOT NULL, 
  date DATE NOT NULL DEFAULT CURRENT DATE
);

CREATE TABLE sales (
  id SERIAL PRIMARY KEY, 
  id_user INT REFERENCES users(id) ON DELETE CASCADE NOT NULL , 
  total INT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT DATE
);

CREATE TABLE sales_detail (
  id SERIAL PRIMARY KEY, 
  id_classes INT REFERENCES classes(id) ON DELETE CASCADE NOT NULL,
  id_sales INT REFERENCES sales(id) ON DELETE CASCADE NOT NULL,
  amount INT NOT NULL,
  price INT NOT NULL
);


-- Need to add img avatars
INSERT INTO users (id, name, lastname, email, password) VALUES
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

INSERT INTO classes (id, subject, name, description, level, schedule, price,img, id_user) VALUES
(1, 'matematicas', 'clases de matematicas calculo', 'clases de matematicas 10 horas todo nivel especialidad calculo, se imparten en clases de 1 hora semanal', 'basica/media', 'semana', 100000,'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', 1),
(2, 'ingles', 'clases de ingles basica/media/universitaria', 'clases de ingles 4 horas todo nivel , se imparten en clases de 1 hora semanal durante 1 mes', 'basica/media/universitaria', 'fin de semana', 40000,'https://images.unsplash.com/photo-1465433045946-ba6506ce5a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 2),
(3, 'lenguaje', 'clases de lenguaje y comunicación', 'Clases de lenguaje y comunicación para reforzar habilidades de lectura, escritura y comprensión textual', 'media', 'tarde', 80000, 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',3),
(4, 'historia', 'clases de historia universal', 'Clases de historia universal para abordar temas clave de la historia mundial', 'media', 'mañana', 60000,'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', 4),
(5, 'ciencias', 'clases de ciencias naturales', 'Clases de ciencias naturales para aprender sobre biología, química y física', 'media', 'tarde', 70000,'https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', 5),
(6, 'física', 'clases de física', 'Clases de física para reforzar los conceptos y principios fundamentales', 'media', 'tarde', 75000, 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',1),
(7, 'química', 'clases de química', 'Clases de química para comprender los elementos, compuestos y reacciones químicas', 'media', 'tarde', 70000,'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 2),
(8, 'biología', 'clases de biología', 'Clases de biología para aprender sobre la vida, organismos y procesos biológicos', 'media', 'mañana', 70000, 'https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',3),
(9, 'geografía', 'clases de geografía', 'Clases de geografía para estudiar los diferentes aspectos geográficos del mundo', 'media', 'tarde', 60000, 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',4),
(10, 'educación física', 'clases de educación física', 'Clases de educación física para promover el ejercicio y la actividad física', 'media', 'tarde', 50000, 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxlY3R1cmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',5),
(11, 'arte', 'clases de arte', 'Clases de arte para explorar la creatividad y aprender sobre diferentes expresiones artísticas', 'media', 'mañana', 60000, 'https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXN0dWRpYW5kb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',1),
(12, 'tecnología', 'clases de tecnología', 'Clases de tecnología para adquirir habilidades en el uso de herramientas tecnológicas', 'media', 'tarde', 65000, 'https://images.unsplash.com/photo-1453906971074-ce568cccbc63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',2),
(13, 'matematicas', 'clases de matematicas algebra', 'Clases de matematicas 10 horas todo nivel especialidad algebra, se imparten en clases de 1 hora semanal', 'media', 'tarde', 90000, 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',6),
(14, 'química', 'clases de química orgánica', 'Clases de química orgánica para comprender los compuestos y reacciones químicas orgánicas', 'media', 'tarde', 80000, 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVkdWNhY2klQzMlQjNufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',7),
(15, 'lenguaje', 'clases de redacción', 'Clases de redacción para mejorar las habilidades de escritura y composición de textos', 'media', 'tarde', 75000,'https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 8),
(16, 'historia', 'clases de historia de Chile', 'Clases de historia de Chile para estudiar los sucesos históricos del país', 'media', 'tarde', 65000, 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',9),
(17, 'ciencias', 'clases de ciencias sociales', 'Clases de ciencias sociales para aprender sobre historia, geografía y educación cívica', 'media', 'tarde', 70000, 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',10),
(18, 'física', 'clases de física mecánica', 'Clases de física mecánica para entender los principios de la mecánica clásica', 'media', 'tarde', 75000, 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXByZW5kaXphamV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',11),
(19, 'biología', 'clases de biología celular', 'Clases de biología celular para estudiar las estructuras y funciones de las células', 'media', 'tarde', 70000,'https://images.unsplash.com/photo-1599008633840-052c7f756385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcmVuZGl6YWplfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 12),
(20, 'educación física', 'clases de deportes', 'Clases de deportes para practicar diferentes disciplinas deportivas', 'media', 'tarde', 50000, 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXByZW5kZXIlMjBlbiUyMGwlQzMlQURuZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',13);

INSERT INTO favorites (id, id_user, id_classes) VALUES
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

INSERT INTO ratings (id, id_user, id_classes, rating) VALUES
(1, 3, 3, 9),
(2, 4, 4, 8),
(3, 5, 5, 10),
(4, 6, 6, 9),
(5, 7, 7, 8),
(6, 8, 8, 10),
(7, 9, 9, 9),
(8, 10, 10, 8),
(9, 11, 11, 10),
(10, 12, 12, 9),
(11, 13, 13, 8),
(12, 14, 14, 10),
(13, 15, 15, 9),
(14, 1, 1, 8),
(15, 2, 2, 10);

INSERT INTO comments (id, id_user, id_classes, comment) VALUES
(1, 3, 3, 'Excelente profesor y método de enseñanza'),
(2, 4, 4, 'Muy buena clase, aprendí mucho'),
(3, 5, 5, 'Recomiendo estas clases, son muy interesantes'),
(4, 6, 6, 'El profesor explica de manera clara y concisa'),
(5, 7, 7, 'Buen material de apoyo y explicaciones detalladas'),
(6, 8, 8, 'Me gustó mucho el enfoque de las clases'),
(7, 9, 9, 'El profesor es muy ameno y tiene buena didáctica'),
(8, 10, 10, 'Las clases son entretenidas y dinámicas'),
(9, 11, 11, 'Excelente conocimiento y pasión por el arte'),
(10, 12, 12, 'Aprendí mucho sobre programación gracias a estas clases'),
(11, 13, 13, 'El profesor es muy comprometido y tiene paciencia'),
(12, 14, 14, 'Me encantaron las técnicas enseñadas en estas clases'),
(13, 15, 15, 'Recomiendo estas clases de tecnología, son muy útiles'),
(14, 1, 1, 'Muy buen profesor, explica de forma clara y sencilla'),
(15, 2, 2, 'Las clases de inglés son muy interactivas y dinámicas');

INSERT INTO sales (id, id_user, total) VALUES
(1, 1, 100000),
(2, 1, 200000),
(3, 2, 40000);

INSERT INTO sales_detail (id, id_classes, id_sales, amount, price) VALUES
(1, 1, 1, 1, 100000),
(2, 1, 2, 2, 100000),
(3, 2, 3, 1, 40000);




