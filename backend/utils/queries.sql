CREATE TABLE Categoria (
    id SERIAL PRIMARY KEY,
    bienestar_mental VARCHAR(255),
    relaciones_interpersonales VARCHAR(255),
    desarrollo_personal VARCHAR(255),
    infantil VARCHAR(255),
    herramientas_recursos VARCHAR(255),
    salud_emocional VARCHAR(255)
);

CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    contrasena_hash TEXT NOT NULL,
    rol VARCHAR(50) NOT NULL CHECK (rol IN ('admin', 'user'))
);

CREATE TABLE Cita (
    id SERIAL PRIMARY KEY,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    usuario_id INT NOT NULL,
    notas TEXT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

CREATE TABLE Blog (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULL,
    fecha_publicacion DATE NOT NULL,
    link_publicacion TEXT,
    categoria_id INT,
    usuario_id INT NOT NULL,
    link_foto TEXT,
    FOREIGN KEY (categoria_id) REFERENCES Categoria(id),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);
