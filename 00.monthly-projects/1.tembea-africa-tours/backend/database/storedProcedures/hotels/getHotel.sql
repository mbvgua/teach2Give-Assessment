USE tembeaAfrica;

CREATE OR ALTER PROCEDURE getHotel(
    @id VARCHAR(255)
)
AS
BEGIN 
SELECT * FROM hotels WHERE id=@id
END;

GO;