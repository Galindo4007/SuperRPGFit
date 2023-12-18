create proc InsertPaciente
@Nombre varchar(35),
@ApellidoP varchar(25),
@ApellidoM varchar(25),
@Edad int,
@Fecha date,
@Direccion varchar(25),
@Sexo char(1),
@Enfermedad varchar(15),
@IDdoctor int,
@Usuario varchar(75),
@Contraseña varchar(50)
AS
Begin
insert into Paciente Values(@Nombre, @ApellidoP, @ApellidoM, @Edad, @Fecha, @Direccion, @Sexo, @Enfermedad, @IDdoctor, @Usuario, @Contraseña)
End

