create proc PacienteFormulario
@ID int
AS
BEGIN
select P.Nombres, P.ApellidoP, P.ApellidoM, C.comida, C.MLAgua, E.TipoEjercicio, E.CantidadTiempo, S.TotalSueño, M.ConfirmacionDosis from [dbo].[Paciente] P
Inner Join [dbo].[Sueno] S On P.IDPaciente = S.IDPaciente
Inner Join [dbo].[Comida] C On P.IDPaciente = C.IDPaciente and C.IDFormularioComida = S.IDFormularioSueño
Inner Join [dbo].[Medicamentos] M On P.IDPaciente = M.IDPaciente and C.IDFormularioComida = M.IDFormularioMedicamentos
Inner Join [dbo].[Ejercicio] E On P.IDPaciente = E.IDPaciente and C.IDFormularioComida = E.IDFormularioEjercicio
END

exec PacienteFormulario 2;



-- DROP proc PacienteFormulario
