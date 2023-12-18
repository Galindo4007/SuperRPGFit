// Importaciones
var config = require("../dbconfig");
const sql = require('mssql');

async function insertMedicamento(Medicamento){
    try{
        let pool = await sql.connect(config);
        let insMedicamento = await pool.request()
            //.input('ID Formulario Medicamento',      sql.Int,       Medicamento.IDFormulario)
            .input('Nombre',                        sql.VarChar,   Medicamento.Nombre)
            .input('Dosis',                         sql.Int,       Medicamento.Dosis)
            .input('Hora1',                         sql.VarChar,   Medicamento.Hora1)
            .input('Hora2',                         sql.VarChar,   Medicamento.Hora2)
            .input('Hora3',                         sql.VarChar,   Medicamento.Hora3)
            .input('Confirmacion',                  sql.VarChar,   Medicamento.Confirmacion)
            .input('FalloM',                        sql.VarChar,   Medicamento.FalloM)
            .input('FalloH',                        sql.VarChar,   Medicamento.FalloH)
            .input('IDPaciente',                    sql.Int,       Medicamento.IDPaciente)
            .execute("InsertMedicamentos")
        return insMedicamento.recordsets;
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    insertMedicamento : insertMedicamento
}