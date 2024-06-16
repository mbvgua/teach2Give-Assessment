USE tembeaAfrica;

CREATE OR ALTER PROCEDURE getHotels

AS
BEGIN 
SELECT * FROM hotels WHERE isDeleted=0
END;

GO;