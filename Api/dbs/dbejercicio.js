var config = require("../dbconfig");
const sql = require('mssql');

async function InsertEjercicio(Ejercicio){
    try{
        let pool = await sql.connect(config);
        let InsEjercicio = await pool.request()
            .input('Ejercicio',             sql.VarChar,    Ejercicio.Ejercicio)
            .input('Tiempo',                sql.VarChar,    Ejercicio.Tiempo)
            .input('dia',                   sql.Date,       Ejercicio.dia)
            .input('IDPaciente',            sql.Int,        Ejercicio.IDPaciente)
            .execute("InsertEjercicio")
        return InsEjercicio.recordsets;
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    InsertEjercicio : InsertEjercicio
}