// Conexiones y Requerimientos del node js
const dbodoctor = require('./dbs/dbdoctor');
const dbopaciente = require('./dbs/dbpaciente');
const dbocomida = require('./dbs/dbcomida');
const dbomedicamento = require('./dbs/dbmedicamento');
const dbosueno = require('./dbs/dbsueno');
const dboejercicio = require('./dbs/dbejercicio');
const dbopuntaje = require('./dbs/dbpuntaje');

var Doctor = require('./Clases/doctor');
var Paciente = require('./Clases/paciente');
var Comida = require('./Clases/comida');
var Medicamento = require('./Clases/medicamento');
var Sueno = require('./Clases/sueno');
var Ejercicio = require('./Clases/ejercicio');
var Puntaje = require('./Clases/puntaje');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

// Regresar todos los Doctores
router.route('/doctor').get((request, response) =>{
    dbodoctor.getDoctor().then(result =>{
        response.json(result[0]);
    })
})

// Regresar Doctores por ID
router.route('/doctor/:id').get((request, response) =>{
    dbodoctor.getDoctor_x_id(request.params.id).then(result =>{ 
        response.json(result[0]); 
    })  
})

// Verificar existencia de Doctores
router.route('/doctor/verificar/:user/:password').get((request, response) =>{
    const user = request.params.user;
    const password = request.params.password;
    dbodoctor.existeDoctor(user, password).then(result =>{ 
        response.json(result[0]); 
    })
})


// Borrar Doctores por ID
router.route('/doctor/borrar/:id').get((request, response) =>{
    dbodoctor.deleteDoctor_x_id(request.params.id).then(result =>{ 
        response.json(result[0]); 
    })
})


// Insertar Doctores en la tabla Doctores
router.route('/doctor/guardar').post((request, response)=>{
    let doctor = {...request.body}
    dbodoctor.insertDoctor(doctor, response).then(result => {
    })
})

// Update Doctores en la tabla Doctores
router.route('/doctor/actualizar').post((request, response)=>{
    let doctor = {...request.body}
    dbodoctor.updateDoctor(doctor).then(result => {
        response.json(result[0]);
    })
})

// Regresar todos los Pacientes
router.route('/paciente').get((request, response) =>{
    dbopaciente.getPaciente().then(result =>{
        response.json(result[0]);
    })
})

// Regresar Pacientes por ID de Doctor
router.route('/paciente/doctor/:id').get((request, response) =>{
    dbopaciente.getPacienteDoc_x_id(request.params.id).then(result =>{ 
        response.json(result[0]); 
    })
})

// Regresar Pacientes por ID
router.route('/paciente/salud/:id').get((request, response) =>{
    dbopaciente.saludPaciente(request.params.id).then(result =>{ 
        response.json(result[0]); 
    })
})

// Regresar Pacientes por ID
router.route('/paciente/:id').get((request, response) =>{
    dbopaciente.getPaciente_x_id(request.params.id).then(result =>{ 
        response.json(result[0]); 
    })
})
router.route('/paciente/puntaje/:id').get((request, response) =>{
    dbopaciente.getPacientePuntaje(request.params.id).then(result =>{ 
        response.json(result[0]); 
    })
})


// Verificar existencia de Pacientes
router.route('/paciente/verificar/:user/:password').get((request, response) =>{
    const user = request.params.user;
    const password = request.params.password;
    dbopaciente.existePaciente(user, password).then(result =>{ 
        response.json(result[0]); 
    })
})

// Borrar Pacientes por ID
router.route('/paciente/borrar/:id').get((request, response) =>{
    dbopaciente.deleteDoctor_x_id(request.params.id).then(result =>{ 
        response.json(result[0]); 
    })
})


// Insertar Pacientes en la tabla Pacientes
router.route('/paciente/guardar').post((request, response)=>{
    let paciente = {...request.body}
    dbopaciente.insertPaciente(paciente, response).then(result => {
    })
})



// Update Pacientes en la tabla Pacientes
router.route('/paciente/actualizar').post((request, response)=>{
    let paciente = {...request.body}
    dbopaciente.updatePaciente(paciente).then(result => {
        response.json(result[0]);
    })
})

// Insertar Formularios en la tabla Formularios
router.route('/comida/guardar').post((request, response)=>{
    let comida = {...request.body}
    dbocomida.InsertComida(comida).then(result => {
        response.json(result[0]);
    })
})

// Insertar Formularios en la tabla Formularios
router.route('/sueno/guardar').post((request, response)=>{
    let sueno = {...request.body}
    dbosueno.InsertSueno(sueno).then(result => {
        response.json(result[0]);
    })
})

// Insertar Formularios en la tabla Formularios
router.route('/ejercicio/guardar').post((request, response)=>{
    let ejercicio = {...request.body}
    dboejercicio.InsertEjercicio(ejercicio).then(result => {
        response.json(result[0]);
    })
})

// Insertar Formularios en la tabla Formularios
router.route('/medicamento/guardar').post((request, response)=>{
    let medicamento = {...request.body}
    dbomedicamento.insertMedicamento(medicamento).then(result => {
        response.json(result[0]);
    })
})

// Insertar Formularios en la tabla Formularios
router.route('/puntaje/guardar').post((request, response)=>{
    let puntaje = {...request.body}
    dbopuntaje.InsertPuntaje(puntaje).then(result => {
        response.json(result[0]);
    })
})


// Puerto y Verificar que funcione el Node js
var port = process.env.PORT || 5500;
app.listen(port);
console.log('Doctor API Iniciando en el puerto : ' + port);