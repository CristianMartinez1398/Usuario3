CREATE DATABASE usuario;
-- Active: 1691553523754@@127.0.0.1@5432@usuario@public
CREATE TABLE tbl_usuario (
    id SERIAL PRIMARY KEY,
    Nombre_Primero VARCHAR(20),
    Apellido_Primero VARCHAR(20),
    Edad INT,
    Genero VARCHAR(20)

);
