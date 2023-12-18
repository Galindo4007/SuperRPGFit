const Http = new XMLHttpRequest();
var cookies = document.cookie.split(';');
var IDPac;
cookies.forEach(function(cookie){
    if (cookie.trim().startsWith('usuario=')){
        IDPac = cookie.trim().substring('usuario='.length);
    }
});
console.log(IDPac);
const url='http://localhost:5500/api/paciente/salud/' + IDPac;
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
            var Paciente = dbParse[0];
            console.table(dbParse[0]);
            document.getElementById("nomCompleto").innerHTML = Paciente['Nombres'] + " " + Paciente['ApellidoP'] + " "  + Paciente['ApellidoM'];3
            document.getElementById("comida").innerHTML = Paciente['comida'];
            document.getElementById("agua").innerHTML = Paciente['MLAgua'];
            document.getElementById("sueno").innerHTML = Paciente['TotalSueño'];
            document.getElementById("med").innerHTML = Paciente['ConfirmacionDosis'];
            document.getElementById("ej").innerHTML = Paciente['TipoEjercicio'];
        } else {
            console.error('Error al obtener los datos de la API. Estado: ' + Http.status);
        }
    }
}
Http.send();


const HttpDos = new XMLHttpRequest();
const urlDos='http://localhost:5500/api/paciente/puntaje/' + IDPac;
var dbaseDos;
var dbParseDos;
var dbLengthDos;
HttpDos.open("GET", urlDos);
HttpDos.onreadystatechange = (e) => {
    //Entre esta funcion y los ifs se confirma que haya funcionado correctamente, el else hace return si es que hay algun error en la conexion
    if (HttpDos.readyState === XMLHttpRequest.DONE) {
        if (HttpDos.status === 200) {
            // Se convierte de JSON a vector
            dbaseDos = HttpDos.responseText;
            dbParseDos = JSON.parse(dbaseDos);
            var PacienteDos = dbParseDos;
            var progressBarComida = document.getElementById("progress-comida");
            var progressBarEjercicio = document.getElementById("progress-ejercicio");
            var progressBarMedicamento = document.getElementById("progress-medicamento");
            var progressBarSueno = document.getElementById("progress-sueno");
            var puntajeComida = PacienteDos[0]['SumatoriaTotal'];
            var puntajeEjer = PacienteDos[1]['SumatoriaTotal'];
            var puntajeMedi = PacienteDos[2]['SumatoriaTotal'];
            var puntajeSueno = PacienteDos[3]['SumatoriaTotal'];
            progressBarComida.style.width = puntajeComida + "%";
            progressBarEjercicio.style.width = puntajeEjer + "%";
            progressBarMedicamento.style.width = puntajeMedi + "%";
            progressBarSueno.style.width = puntajeSueno + "%";
            document.getElementById("puntajeComida").innerHTML = progressBarComida.style.PacienteDos[0]['SumatoriaTotal'] = PacienteDos[0]['SumatoriaTotal'] + "%";;
            document.getElementById("puntajeEjer").innerHTML = PacienteDos[1]['SumatoriaTotal'];
            document.getElementById("puntajeMedi").innerHTML = PacienteDos[2]['SumatoriaTotal'];
            document.getElementById("puntajeSueno").innerHTML = PacienteDos[3]['SumatoriaTotal'];
        } else {
            console.error('Error al obtener los datos de la API. Estado: ' + HttpDos.status);
        }
    }
}
HttpDos.send();


function startProgressBar() {
    var progressBar = document.getElementById("progress");
    var width = 0;
    var intervalId = setInterval(increaseWidth, 10);
  
    function increaseWidth() {
      if (width >= 100) {
        clearInterval(intervalId);
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }
}
  