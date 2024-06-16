USE tembeaAfrica;

CREATE OR ALTER PROCEDURE deleteTour(
    @id VARCHAR(255)
)
AS
BEGIN
UPDATE tours SET isDeleted=1 
WHERE id=@id
END;

GO;