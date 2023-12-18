function swDoc(){
    var user = document.getElementById("usuario").value;
    var password = document.getElementById("contrasena");
    var dbase;
    var dbParse;
    var dbLength;

    const url='http://localhost:5500/api/doctor/verificar/' + user + "/" + password.value;
    const Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.onreadystatechange = (e) => {
    //Entre esta funcion y los ifs se confirma que haya funcionado correctamente, el else hace return si es que hay algun error en la conexion
        if (Http.readyState === XMLHttpRequest.DONE) {
            if (Http.status === 200) {
                // Se convierte de JSON a vector
                dbase = Http.responseText;
                dbParse = JSON.parse(dbase);
                dbLength = dbParse.length;
                var Doctor = dbParse[0];
                if(dbLength > 0){
                    document.cookie = 'usuario=' + Doctor['IDDoctor'];
                    document.location.href = "sesDoc.html";
                } else {
                    console.error('Error al obtener los datos de la API. Estado: ' + Http.status);
                }
            } else {
                console.error('Error al obtener los datos de la API. Estado: ' + Http.status);
            }
        }
        document.getElementById("sesionDoc").innerHTML = "Error, intente de nuevo";
    }
    Http.send();
    
}
function swPac(){
    var user = document.getElementById("usuario").value;
    var password = document.getElementById("contrasena");
    var dbase;
    var dbParse;
    var dbLength;

    const url='http://localhost:5500/api/paciente/verificar/' + user + "/" + password.value;
    const Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.onreadystatechange = (e) => {
    //Entre esta funcion y los ifs se confirma que haya funcionado correctamente, el else hace return si es que hay algun error en la conexion
        if (Http.readyState === XMLHttpRequest.DONE) {
            if (Http.status === 200) {
                // Se convierte de JSON a vector
                dbase = Http.responseText;
                dbParse = JSON.parse(dbase);
                dbLength = dbParse.length;
                var Paciente = dbParse[0];
                if(dbLength > 0){
                    document.cookie = 'usuario=' + Paciente['IDPaciente'];
                    document.location.href = "sesPac.html";
                } else {
                    console.error('Error al obtener los datos de la API. Estado: ' + Http.status);
                }
            } else {
                console.error('Error al obtener los datos de la API. Estado: ' + Http.status);
            }
        }
        document.getElementById("sesionPac").innerHTML = "Error, intente de nuevo";
    }
    Http.send();
}
function crearSesDoc(){
    document.location.href ="newSesDoc.html";
}
function crearSesPac(){
    document.location.href ="newSesPac.html";
}