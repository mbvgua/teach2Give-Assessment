USE tembeaAfrica;

CREATE OR ALTER PROCEDURE deleteBooking(
    @id VARCHAR(255)
)
AS
BEGIN
UPDATE bookings SET isDeleted=1 
WHERE id=@id
END;

GO;