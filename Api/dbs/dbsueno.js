var config = require("../dbconfig");
const sql = require('mssql');

async function InsertSueno(Sueno){
    try{
        let pool = await sql.connect(config);
        let InsSueno = await pool.request()
            //.input('ID Formulario Sueno',          sql.Int,      Sueno.IDFormulario)
            .input('Inicio',                       sql.VarChar,  Sueno.Inicio)
            .input('Fin',                          sql.VarChar,  Sueno.Fin)
            .input('Total',                        sql.VarChar,  Sueno.Total)
            .input('Calidad',                      sql.VarChar,  Sueno.Calidad)
            .input('IDPaciente',                   sql.Int,      Sueno.IDPaciente)
            .execute("InsertSueno")
        return InsSueno.recordsets;
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    InsertSueno : InsertSueno
}