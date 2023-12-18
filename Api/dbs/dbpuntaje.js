var config = require("../dbconfig");
const sql = require('mssql');

async function InsertPuntaje(Puntaje){
    try{
        let pool = await sql.connect(config);
        let InsPuntaje = await pool.request()
            .input('ID Formulario Puntaje',       sql.Int,       Puntaje.IDFormulario)
            .input('Puntaje',                     sql.VarChar,   Puntaje.Tipo)
            .input('Dia',                         sql.Date,      Puntaje.Dia)
            .input('ID Paciente',                 sql.Int,       Puntaje.IDpaciente)
            .execute("InsertPuntaje")
        return InsPuntaje.recordsets;
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    InsertPuntaje : InsertPuntaje
}