const express = require('express');
const app = express();
const db = require('./db/conn');

app.use(express.json());

//Para poder meter datos en la tabla de la base de datos
app.post('/api/usuario', (req, res) => {

    const parametro = [
        req.body.Nombre_Primero,  
        req.body.Apellido_Primero,
        req.body.Edad,
        req.body.Genero
    ];

    let sql = `insert into tbl_usuario
                (Nombre_Primero, Apellido_Primero, Edad, Genero)
                values
                (?) returning id`;
    
    db.one(sql, parametro, e => e.id)
    .then( data => {

        const objetocreado = {
            id : data,
            Apellido_Primero: req.body.Apellido_Primero,
            Edad: req.body.Edad,
            Genero: req.body.Genero
        }
        res.json(objetocreado);
    })
    .catch((error) => {
        res.status(500).json(error);
    });

});

//Para poder actualizar un dato en la tabla de base de datos
app.put('/api/usuario/:id', (req, res) => {
    
    const parametro = [
        
        req.body.Nombre_Primero,  
        req.body.Apellido_Primero,
        req.body.Edad,
        req.params.id
    ];

    let sql = ` update tbl_usuario set
                Nombre_Primero = $1, Apellido_Primero = $2, Edad = $3 
                where id = $4 `;
    
    db.one(sql, parametro, e => e.id)
    .then( data => {

        const objeto_actualizado = {
            id : data,
            Apellido_Primero: req.body.Apellido_Primero,
            Edad: req.body.Edad,
            Genero: req.body.Genero
        }
        res.json(objeto_actualizado);
    })
    .catch((error) => {
        res.status(500).json(error);
    });

});


app.listen(3000);