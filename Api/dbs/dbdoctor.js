// Importaciones
var config = require("../dbconfig");
const sql = require('mssql');

// Funcion para Regresar TODOS los Doctores
async function getDoctor(){
    try{
        let pool = await sql.connect(config);
        let Doctores = await pool.request().query("SELECT * FROM Doctor");
        return Doctores.recordsets;
    } catch(error) {
        console.log(error);
    }
}

// Funcion para buscar existencia de Doctores
async function existeDoctor(user, password){
    try{
        let pool = await sql.connect(config);
        let existDoc = await pool.request()
            .input('Usuario',       sql.VarChar, user)
            .input('Contraseña',    sql.VarChar, password)
            .execute("InicioSesionDoctor")
        return existDoc.recordsets;
    } catch(error) {
        console.log(error);
    }
}

async function getPacienteDoc_x_id(pacientes){
    try{
        let pool = await sql.connect(config);
        let selePac = await pool.request()
            .input('IDDoctor', sql.Int, pacientes)
            .execute("DoctorPaciente")
        return selePac.recordsets;
    } catch(error) {
        console.log(error);
    }
}


// Funcion para Regresar los Doctores por buqueda de ID
async function getDoctor_x_id(IDDoctor){
    try{
        let pool = await sql.connect(config);
        let Doctores = await pool.request()
        .input('input_parameter', sql.Int, IDDoctor)
        .query("SELECT * FROM Doctor where IDDoctor= @input_parameter");
        return Doctores.recordsets;
    } catch(error) {
        console.log(error);
    }
}

// Funcion para Borrar los Doctores por buqueda de ID
async function deleteDoctor_x_id(IDDoctor){
    try{
        let pool = await sql.connect(config);
        let Doctores = await pool.request()
        .input('input_parameter', sql.Int, IDDoctor)
        .query("DELETE FROM Doctor where IDDoctor= @input_parameter");
        return Doctores.recordsets;
    } catch(error) {
        console.log(error);
    }
}

// Funcion para Agregar Doctores
async function insertDoctor(doctor, response){
    try{
        let pool = await sql.connect(config);
        let InsertDoc = await pool.request()
            .input('Nombre',            sql.VarChar, doctor.Nombres)
            .input('ApellidoP',         sql.VarChar, doctor.ApellidoP)
            .input('ApellidoM',         sql.VarChar, doctor.ApellidoM)
            .input('Fecha',             sql.Date,    doctor.FechaDeNacimiento)
            .input('Edad',              sql.Int,     doctor.Edad)
            .input('Direccion',         sql.VarChar, doctor.Direccion)
            .input('Sexo',              sql.Char,    doctor.Sexo)
            .input('Expecializacion',   sql.VarChar, doctor.Expecializacion)
            .input('Exp',               sql.Int,     doctor.Experiencia)
            .input('Usuario',           sql.VarChar, doctor.Usuario)
            .input('Contraseña',        sql.VarChar, doctor.Contraseña)
            .execute("InsertDoctor")
            response.status(200).send('<script>window.location.replace("http://127.0.0.1:5500/html/regAproved.html");</script>');
        return InsertDoc.recordsets;
    } catch(error) {
        console.log(error);
    }
}

// Funcion para Update a algun doctor
async function updateDoctor(doctor){
    try{
        let pool = await sql.connect(config);
        let UpdateDoc = await pool.request()
            .input('IDDoctor',          sql.VarChar, doctor.IDDoctor)
            .input('Nombres',           sql.VarChar, doctor.Nombres)
            .input('ApellidoP',         sql.VarChar, doctor.ApellidoP)
            .input('ApellidoM',         sql.VarChar, doctor.ApellidoM)
            .input('FechaDeNacimiento', sql.Date,    doctor.FechaDeNacimiento)
            .input('Edad',              sql.Int,     doctor.Edad)
            .input('Direccion',         sql.VarChar, doctor.Direccion)
            .input('Sexo',              sql.Char,    doctor.Sexo)
            .input('Expecializacion',   sql.VarChar, doctor.Expecializacion)
            .input('Experiencia',       sql.Int,     doctor.Experiencia)
            .input('Usuario',           sql.VarChar, doctor.Usuario)
            .input('Contraseña',        sql.VarChar, doctor.Contra)
            .execute("SP_U_Doctor_01")
        return UpdateDoc.recordsets;
    } catch(error) {
        console.log(error);
    }
}

// Utilizar las funciones en otros archivos
module.exports = {
    getDoctor : getDoctor,
    getDoctor_x_id : getDoctor_x_id,
    deleteDoctor_x_id : deleteDoctor_x_id,
    insertDoctor : insertDoctor,
    updateDoctor : updateDoctor,
    existeDoctor : existeDoctor,
    getPacienteDoc_x_id : getPacienteDoc_x_id
}