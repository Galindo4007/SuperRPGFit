create proc InsertComida
@Comida varchar(65),
@Ingrediente1 varchar(50),
@Ingrediente2 varchar(50),
@Ingrediente3 varchar(50),
@Ingrediente4 varchar(50),
@Agua int,
@IDPaciente int
as
begin
insert into Comida(comida, ingrediente1, ingrediente2, ingrediente3, ingrediente4, MLAgua, IDPaciente)
Values(@Comida, @Ingrediente1, @Ingrediente2, @Ingrediente3,  @Ingrediente4, @Agua, @IDPaciente)

insert into Puntaje(Puntaje, Hora, categoria, IDPaciente) 
Values(5, GETDATE(),  'Comida', @IDPaciente)
end;

create proc InsertEjercicio
@Ejercicio varchar(50),
@Tiempo varchar(25),
@dia date,
@IDPaciente int
as
begin
insert into Ejercicio(TipoEjercicio, CantidadTiempo, Dia, IDPaciente)
Values (@Ejercicio, @Tiempo, @dia ,@IDPaciente)

insert into Puntaje(Puntaje, Hora, categoria, IDPaciente) 
Values(5, GETDATE(),  'Ejercicio', @IDPaciente)
end;

create proc InsertMedicamentos
@Nombre varchar(50),
@Dosis int,
@Hora1 varchar(50),
@Hora2 varchar(50),
@Hora3 varchar(50),
@Confirmacion varchar(5),
@FalloM varchar(50),
@FalloH varchar(50),
@IDPaciente int
as
begin
insert into Medicamentos(NombreMedicamento, Dosis, Hora1Dosis,  Hora2Dosis,  Hora3Dosis, ConfirmacionDosis, FalloMedicamento, FalloHora, IDPaciente)
Values(@Nombre, @Dosis, @Hora1, @Hora2, @Hora3, @Confirmacion, @FalloM, @FalloH ,@IDPaciente)

insert into Puntaje(Puntaje, Hora, categoria, IDPaciente) 
Values(5, GETDATE(),  'Medicamentos', @IDPaciente)
end;

create proc InsertSueno
@Inicio varchar(25),
@Fin varchar(25),
@Total varchar(25),
@Calidad varchar(15),
@IDPaciente int
as
begin
insert into Sueno(InicioSueño, FinSueño, TotalSueño, CalidadSueño, IDPaciente)
Values(@Inicio, @Fin, @Total, @Calidad ,@IDPaciente)

insert into Puntaje(Puntaje, Hora, categoria, IDPaciente) 
Values(5, GETDATE(),  'Sueño', @IDPaciente)
end;


create proc InsertPuntaje
@Puntaje int,
@Categoria varchar(25),
@IDPaciente int
as
begin
insert into Puntaje(Puntaje, Hora, categoria, IDPaciente)
Values(@Puntaje, GETDATE(), @Categoria, @IDPaciente)
end;

--drop proc InsertPuntaje;


