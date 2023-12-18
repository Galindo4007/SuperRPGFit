// Hacer Web Request para la api + algunas inicializaciones de variables
const Http = new XMLHttpRequest();
var cookies = document.cookie.split(';');
var IDDoc;
cookies.forEach(function(cookie){
    if (cookie.trim().startsWith('usuario=')){
        IDDoc = cookie.trim().substring('usuario='.length);
    }
});
const url='http://localhost:5500/api/paciente/doctor/' + IDDoc;
var dbase;
var dbParse;
var dbLength;
Http.open("GET", url);
Http.onreadystatechange = (e) => {
    //Entre esta funcion y los ifs se confirma que haya funcionado correctamente, el else hace return si es que hay algun error en la conexion
    if (Http.readyState === XMLHttpRequest.DONE) {
        if (Http.status === 200) {
            // Se convierte de JSON a vector
            dbase = Http.responseText;
            dbParse = JSON.parse(dbase);
            dbLength = dbParse.length;  
            // Se generan las opciones que se utilizan en el mostrar Pacientes por Doctor ID
            var opciones = "<option value='-1' selected>Seleccionar Paciente: </option>";
            var i = 0;
            
            while (i < dbLength){
                var Pacientes = dbParse[i];
                
                opciones += "<option value='" + i + "'>" +  Pacientes['Nombres'] + " " + Pacientes['ApellidoP'] + "</option>";
                i++;
            }
            document.getElementById("celdaPac").innerHTML = opciones;
        } else {
            console.error('Error al obtener los datos de la API. Estado: ' + Http.status);
        }
    }
}
Http.send();

function getPac(){
    // Mostrar los datos del paciente en el HTML
    var PacSeleccionado = document.getElementById("celdaPac").value;
    var Pacientes = dbParse[PacSeleccionado];
    const urlDos='http://localhost:5500/api/paciente/salud/' + Pacientes['IDPaciente'];
    console.log(urlDos);
    var dbaseDos;
    var dbParseDos;
    const HttpDos = new XMLHttpRequest();
    HttpDos.open("GET", urlDos);
    HttpDos.onreadystatechange = (e) => {
        //Entre esta funcion y los ifs se confirma que haya funcionado correctamente, el else hace return si es que hay algun error en la conexion
        if (HttpDos.readyState === XMLHttpRequest.DONE) {
            if (HttpDos.status === 200) {
                // Se convierte de JSON a vector
                dbaseDos = HttpDos.responseText;
                dbParseDos = JSON.parse(dbaseDos);
                console.log("hola")
                console.log(dbParseDos[0]);
                var PacientesDos = dbParseDos[0];
                if (PacSeleccionado !== -1){
                    document.getElementById("nomCompleto").innerHTML = Pacientes['Nombres'] + " " + Pacientes['ApellidoP'] + " "  + Pacientes['ApellidoM'];
                    document.getElementById("edad").innerHTML = Pacientes['Edad'];
                    document.getElementById("enfermedad").innerHTML = Pacientes['Enfermedad'];
                    document.getElementById("comida").innerHTML = PacientesDos['comida'];
                    document.getElementById("agua").innerHTML = PacientesDos['MLAgua'];
                    document.getElementById("sueno").innerHTML = PacientesDos['TotalSueño'];
                    document.getElementById("med").innerHTML = PacientesDos['ConfirmacionDosis'];
                    document.getElementById("ej").innerHTML = PacientesDos['TipoEjercicio'];
                }
            } else {
                console.error('Error al obtener los datos de la API. Estado: ' + HttpDos.status);
            }
        }
    }
    HttpDos.send();
    
}