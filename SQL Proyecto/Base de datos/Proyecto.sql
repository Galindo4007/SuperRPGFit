create database Proyecto
use Proyecto

create table Doctor(
IDDoctor int primary key identity,
Nombres varchar(35),
ApellidoP varchar(25),
ApellidoM varchar(25),
FechaDeNacimiento date,
Edad int, 
Direccion varchar(50),
Sexo char(1),
Expecializacion varchar(15),
Experiencia int
)

Alter table Doctor
add NombreDeUsuario varchar(75) not null,
Contraseña varchar(50) not null;


create table Paciente (
IDPaciente int primary key identity,
Nombres varchar(35),
ApellidoP varchar(25),
ApellidoM varchar(25),
Edad int, 
FechaDeNacimiento date,
Direccion varchar(50),
Sexo char(1),
Enfermedad varchar(15),
IDDoctor int
)

Alter table Paciente
add NombreDeUsuario varchar(75) not null,
Contraseña varchar(50) not null;


alter table Paciente
add foreign key (IDDoctor) References Doctor(IDDoctor)

create table Comida (
IDFormularioComida int primary key identity,
comida varchar(65),
ingrediente1 varchar(50),
ingrediente2 varchar(50),
ingrediente3 varchar(50),
ingrediente4 varchar(50),
MLAgua int,
IDPaciente int
)

alter table Comida
add foreign key (IDPaciente) References Paciente(IDPaciente);

create table Sueno (
IDFormularioSueño int primary key identity,
InicioSueño varchar(25),
FinSueño varchar(25),
TotalSueño varchar(25),
CalidadSueño varchar(15),
IDPaciente int
)

alter table Sueno
add foreign key (IDPaciente) References Paciente(IDPaciente);

Create table Medicamentos (
IDFormularioMedicamentos int primary key identity,
NombreMedicamento varchar(50),
Dosis int,
Hora1Dosis varchar(50),
Hora2Dosis varchar(50),
Hora3Dosis varchar(50),
ConfirmacionDosis varchar(5),
FalloMedicamento varchar(50),
FalloHora varchar(50),
IDPaciente int
)

alter table Medicamentos
add foreign key (IDPaciente) References Paciente(IDPaciente);

Create table Ejercicio(
IDFormularioEjercicio int primary key identity,
TipoEjercicio varchar(50),
CantidadTiempo varchar(25),
Dia date,
IDPaciente int
)

alter table Ejercicio
add foreign key (IDPaciente) References Paciente(IDPaciente);

Create table Puntaje(
IDPuntaje int primary key identity,
Puntaje int,
Hora date,
categoria varchar(25), 
IDPaciente int
)

alter table Puntaje
add foreign key (IDPaciente) References Paciente(IDPaciente);


--Por si alguna tabla no se cargo bien:
-- drop table Puntaje






