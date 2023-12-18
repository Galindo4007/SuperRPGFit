var paginaInicial;
function cerrarSes(){
    paginaInicial = document.getElementById("cerrar").innerHTML;
    document.getElementById("cerrar").innerHTML =
    "<div class='cont' style='width: fit-content;display:block;margin:20px auto;'>" +
        "<h1>¿Seguro que quiere cerrar sesion?</h1>" +
        "<div class'cont' style='width: fit-content;display:block;margin:15px auto;'>" +
            "<a href='index.html'><button class='btn1' style='margin-right:50px;'>Si</button></a>" +
            "<button class='btn1' onclick='regresarInicial()'>No</button>" +
        "</div>" +
    "</div>";
}
function regresarInicial(){
    document.getElementById("cerrar").innerHTML = paginaInicial;
}