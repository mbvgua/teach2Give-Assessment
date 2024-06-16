USE tembeaAfrica;

CREATE OR ALTER PROCEDURE deleteHotel(
    @id VARCHAR(255)
)
AS
BEGIN
UPDATE hotels SET isDeleted=1 
WHERE id=@id
END;

GO;