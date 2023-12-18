// Configuracion para accesar a la Base de Datos
const config = {
    user : 'sa',
    password : 'basedatos',
    server: 'localhost',
    database: 'Proyecto',
    options: {
        trustedconnection: false,
        enableArithAbort : true,
        encrypt:false
    }
}

module.exports = config;