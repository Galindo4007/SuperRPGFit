// Importaciones
var config = require("../dbconfig");
const sql = require('mssql');

// Funcion para Regresar TODOS los Paciente
async function getPaciente(){
    try{
        let pool = await sql.connect(config);
        let Pacientes = await pool.request().query("SELECT * FROM Paciente");
        return Pacientes.recordsets;
    } catch(error) {
        console.log(error);
    }
}

// Funcion para buscar existencia de Doctores
async function existePaciente(user, password){
    try{
        let pool = await sql.connect(config);
        let existPac = await pool.request()
            .input('Usuario',       sql.VarChar, user)
            .input('Contraseña',    sql.VarChar, password)
            .execute("InicioSesionPaciente")
        return existPac.recordsets;
    } catch(error) {
        console.log(error);
    }
}

// Funcion para buscar existencia de Doctores
async function saludPaciente(IDPaciente){
    try{
        let pool = await sql.connect(config);
        let saludPac = await pool.request()
            .input('ID',    sql.VarChar, IDPaciente)
            .execute("PacienteFormulario")
        return saludPac.recordsets;
    } catch(error) {
        console.log(error);
    }
}

async function getPacientePuntaje(IDPaciente){
    try{
        let pool = await sql.connect(config);
        let puntajePac = await pool.request()
            .input('ID',    sql.VarChar, IDPaciente)
            .execute("SelectPuntaje")
        return puntajePac.recordsets;
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
async function getPaciente_x_id(IDPaciente){
    try{
        let pool = await sql.connect(config);
        let Pacientes = await pool.request()
        .input('input', sql.Int, IDPaciente)
        .query("SELECT * FROM Paciente where IDPaciente = @input");
        return Pacientes.recordsets;
    } catch(error) {
        console.log(error);
    }
}


// Funcion para Borrar los Doctores por buqueda de ID
async function deletePaciente_x_id(IDPaciente){
    try{
        let pool = await sql.connect(config);
        let Pacientes = await pool.request()
        .input('input_parameter', sql.Int, IDPaciente)
        .query("DELETE FROM Paciente where IDPaciente = @input_parameter");
        return Pacientes.recordsets;
    } catch(error) {
        console.log(error);
    }
}


// Funcion para Agregar Doctores
async function insertPaciente(paciente, response){
    try{
        let pool = await sql.connect(config);
        let InsertPac = await pool.request()
            .input('Nombre',            sql.VarChar, paciente.Nombres)
            .input('ApellidoP',         sql.VarChar, paciente.ApellidoP)
            .input('ApellidoM',         sql.VarChar, paciente.ApellidoM)
            .input('Edad',              sql.Int,     paciente.Edad)
            .input('Fecha',             sql.Date,    paciente.FechaDeNacimiento)
            .input('Direccion',         sql.VarChar, paciente.Direccion)
            .input('Sexo',              sql.Char,    paciente.Sexo)
            .input('Enfermedad',        sql.VarChar, paciente.Enfermedad)
            .input('IDdoctor',          sql.Int,     paciente.IDDoctor)
            .input('Usuario',           sql.VarChar, paciente.NombreDeUsuario)
            .input('Contraseña',        sql.VarChar, paciente.Contraseña)
            .execute("InsertPaciente")
            response.status(200).send('<script>window.location.replace("http://127.0.0.1:5500/html/regAproved.html");</script>');
        return InsertPac.recordsets;
    } catch(error) {
        console.log(error);
    }
}

// Funcion para Update a algun doctor
async function updatePaciente(paciente){
    try{
        let pool = await sql.connect(config);
        let UpdatePac = await pool.request()
            .input('IDPaciente',        sql.VarChar, paciente.IDPaciente)
            .input('Nombres',           sql.VarChar, paciente.Nombres)
            .input('ApellidoP',         sql.VarChar, paciente.ApellidoP)
            .input('ApellidoM',         sql.VarChar, paciente.ApellidoM)
            .input('Edad',              sql.Int,     paciente.Edad)
            .input('FechaDeNacimiento', sql.Date,    paciente.FechaDeNacimiento)
            .input('Direccion',         sql.VarChar, paciente.Direccion)
            .input('Sexo',              sql.Char,    paciente.Sexo)
            .input('Enfermedad',        sql.VarChar, paciente.Enfermedad)
            .input('IDDoctor',          sql.Int,     paciente.IDDoctor)
            .input('Usuario',           sql.VarChar, paciente.Usuario)
            .input('Contraseña',        sql.VarChar, paciente.Contra)
            .execute("SP_U_Paciente_01")
        return UpdatePac.recordsets;
    } catch(error) {
        console.log(error);
    }
}

// Utilizar las funciones en otros archivos
module.exports = {
    getPaciente : getPaciente,
    getPaciente_x_id : getPaciente_x_id,
    deletePaciente_x_id : deletePaciente_x_id,
    insertPaciente : insertPaciente,
    updatePaciente : updatePaciente,
    getPacienteDoc_x_id : getPacienteDoc_x_id,
    existePaciente : existePaciente,
    saludPaciente : saludPaciente,
    getPacientePuntaje : getPacientePuntaje
}