USE tembeaAfrica;

CREATE OR ALTER PROCEDURE getTours

AS
BEGIN 
SELECT * FROM tours WHERE isDeleted=0
END;

GO;