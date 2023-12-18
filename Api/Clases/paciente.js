// Definir la Clase Paciente donde debe de utilizar todos los parametros necesarios que se utilizan en la base de datos
class Paciente{
    constructor(IDPaciente, Nombres, ApellidoP, ApellidoM, Edad, FechaDeNacimiento, Direccion, Sexo, Enfermedad, IDDoctor, Usuario, Contra){
        this.IDPaciente         = IDPaciente;
        this.Nombres            = Nombres;
        this.ApellidoP          = ApellidoP;
        this.ApellidoM          = ApellidoM;
        this.Edad               = Edad;
        this.FechaDeNacimiento  = FechaDeNacimiento;
        this.Direccion          = Direccion;
        this.Sexo               = Sexo;
        this.Enfermedad         = Enfermedad;
        this.IDDoctor           = IDDoctor; 
        this.Usuario            = Usuario;
        this.Contra             = Contra;  
    }
}

module.exports = Paciente;