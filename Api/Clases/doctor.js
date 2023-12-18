// Definir la Clase Doctor donde debe de utilizar todos los parametros necesarios que se utilizan en la base de datos
class Doctor{
    constructor(IDDoctor, Nombres, ApellidoP, ApellidoM, FechaDeNacimiento, Edad, Direccion, Sexo, Expecializacion, Experiencia, Usuario, Contra){
        this.IDDoctor           = IDDoctor;
        this.Nombres            = Nombres;
        this.ApellidoP          = ApellidoP;
        this.ApellidoM          = ApellidoM;
        this.FechaDeNacimiento  = FechaDeNacimiento;
        this.Edad               = Edad;
        this.Direccion          = Direccion;
        this.Sexo               = Sexo;
        this.Expecializacion    = Expecializacion;
        this.Experiencia        = Experiencia;  
        this.Usuario            = Usuario;
        this.Contra             = Contra; 
    }
}

module.exports = Doctor;