USE tembeaAfrica;

CREATE OR ALTER PROCEDURE deleteTour(
    @id VARCHAR(255)
)
AS
BEGIN
DELETE FROM tours WHERE id=@id
END;

GO;