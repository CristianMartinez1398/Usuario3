const express = require('express');
const app = express();
const db = require('./db/conn');

app.use(express.json());


app.post('/api/usuario', (req, res) => {

    const parametro = [
        req.body.Nombre_Primero, Apellido_Primero, Edad, Genero
    ];

    let sql = `insert into tbl_usuario
                (Nombre_Primero, Apellido_Primero, Edad, Genero)
                values
                (?) returning id`;

});


app.listen(3000);