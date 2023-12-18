create proc InsertDoctor
@Nombre varchar(35),
@ApellidoP varchar(25),
@ApellidoM varchar(25),
@Fecha date,
@Edad int,
@Direccion varchar(25),
@Sexo char(1),
@Expecializacion varchar(15),
@Exp int,
@Usuario varchar(75),
@Contraseña varchar(50)
AS
Begin
insert into Doctor Values(@Nombre, @ApellidoP, @ApellidoM, @Fecha, @Edad, @Direccion, @Sexo, @Expecializacion, @Exp, @Usuario, @Contraseña)
End
