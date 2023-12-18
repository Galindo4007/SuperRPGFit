Create proc SelectPuntaje
@ID int
as
BEGIN
	Select  P.categoria,  SUM(P.Puntaje) as SumatoriaTotal from Puntaje P 
	where P.IDPaciente = @ID 
	Group by P.categoria 
END

--DROP PROC SelectPuntaje;

