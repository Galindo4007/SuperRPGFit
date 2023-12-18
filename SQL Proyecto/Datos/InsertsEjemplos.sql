SET identity_insert Doctor OFF;
insert into Doctor(IDDoctor, Nombres, ApellidoP, ApellidoM, FechaDeNacimiento, Edad, Direccion, Expecializacion, Experiencia, NombreDeUsuario, Contraseña) 
Values(1, 'Andre Sebastian', 'Galindo', 'Posadas', '2002-08-20', 20, 'Garza sada 1892', 'M', 'Diabetes', 3, 'Asgalindo02@gmail.com', '123456')
select * from Doctor


delete from Doctor where Doctor.ApellidoP = 'Galindo';
truncate table Doctor;

insert into Doctor
Values('Andre Sebastian', 'Galindo', 'Posadas', '2002-08-20', 20, 'Garza sada 1892', 'M', 'Diabetes', 3, 'Asgalindo02@gmail.com', '123456')


Insert into Paciente Values ('Pablo','Bentivoglio', 'Padron', 23, GETDATE(), 'Aqui vive el paciente', 'M','Cancer',4, 'PablitoBenti', 'BentiDron')
Insert into Paciente Values ('MArio','Flores', 'Garza', 21, GETDATE(), 'Aqui vive el paciente', 'M','Cancer',4, 'MarianitoFlo', 'FloRza')
Insert into Paciente Values ('Maria','Catañeda', 'Garcia', 28, GETDATE(), 'Aqui vive el paciente', 'M','Cancer',4, 'MarianitaCata', 'CataRcia')

Select * from Paciente

exec DoctorPaciente 4;

exec InsertComida 'pizza', 'peperoni', 'queso', 'carne', 'tomates', 50, 2;
exec InsertEjercicio 'pesas', '2 horas', '2023-06-09', 2;
exec InsertMedicamentos 'Insulina', 50, '9 AM', '5 OM', null, 'No', 'Insulina', '10 PM', 2;
exec InsertSueno '12 AM', '10 AM', '10 Horas', 'Muy Buena', 2;
exec InsertPuntaje 10, '2023-06-09', 2;

Select * from Puntaje




