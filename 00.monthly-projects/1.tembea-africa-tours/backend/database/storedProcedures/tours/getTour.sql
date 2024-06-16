USE tembeaAfrica;

CREATE OR ALTER PROCEDURE getTour(
    @id VARCHAR(255)
)
AS
BEGIN 
SELECT * FROM tours WHERE id=@id
END;

GO;