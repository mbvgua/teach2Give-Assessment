USE tembeaAfrica;

CREATE OR ALTER PROCEDURE cancelBooking(
    @id VARCHAR(255)
)
AS
BEGIN
UPDATE bookings SET isActive=1 
WHERE id=@id
END;

GO;