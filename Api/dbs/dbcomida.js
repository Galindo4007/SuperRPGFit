var config = require("../dbconfig");
const sql = require('mssql');

async function InsertComida(Comida){
    try{
        let pool = await sql.connect(config);
        let InsComida = await pool.request()
            .input('Comida',                      sql.VarChar,  Comida.Comida)
            .input('Ingrediente1',                sql.VarChar,  Comida.Ingrediente1)
            .input('Ingrediente2',                sql.VarChar,  Comida.Ingrediente2)
            .input('Ingrediente3',                sql.VarChar,  Comida.Ingrediente3)
            .input('Ingrediente4',                sql.VarChar,  Comida.Ingrediente4)
            .input('Agua',                        sql.Int,      Comida.Agua)
            .input('IDPaciente',                  sql.Int,      Comida.IDPaciente)
            .execute("InsertComida")
        return InsComida.recordsets;
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    InsertComida : InsertComida
}