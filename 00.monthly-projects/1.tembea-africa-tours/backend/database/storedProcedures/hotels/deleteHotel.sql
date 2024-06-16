USE tembeaAfrica;

CREATE OR ALTER PROCEDURE deleteHotel(
    @id VARCHAR(255)
)
AS
BEGIN
DELETE FROM hotels WHERE id=@id
END;

GO;