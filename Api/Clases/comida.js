class Comida{
    constructor(IDFormulario, comida, ingrediente1, ingrediente2, ingrediente3, ingrediente4, MLAgua, IDpaciente)
    {
        this.IDFormulario           = IDFormulario;
        this.comida                 = comida;
        this.ingrediente1           = ingrediente1;
        this.ingrediente2           = ingrediente2;
        this.ingrediente3           = ingrediente3;
        this.ingrediente4           = ingrediente4;
        this.MLAgua                 = MLAgua;
        this.IDpaciente             = IDpaciente;
    }
}

module.exports = Comida;