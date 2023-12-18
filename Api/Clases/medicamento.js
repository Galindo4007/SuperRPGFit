class Medicamento{
    constructor(IDFormulario, Nombre, Dosis, Hora1, Hora2, Hora3, Confirmacion, FalloM, FalloH, IDPaciente)
    {
        this.IDFormulario           = IDFormulario;
        this.Nombre                 = Nombre;
        this.Dosis                  = Dosis;
        this.Hora1                  = Hora1;
        this.Hora2                  = Hora2;
        this.Hora3                  = Hora3;
        this.Confirmacion           = Confirmacion;
        this.FalloM                 = FalloM;
        this.FalloH                 = FalloH;
        this.IDPaciente             = IDPaciente;
    }
}

module.exports = Medicamento;