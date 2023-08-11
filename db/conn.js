const pgp = require('pg-promise')();

const cn = 'postgresql://postgres:Septiembre13$@localhost:5432/tablaSql';

const db = pgp(cn);

db.connect().then( () => {

    console.log("Conexion exitosa con Postgres");

})
.catch((error) => {

    console.log(error);

})

module.exports = db;