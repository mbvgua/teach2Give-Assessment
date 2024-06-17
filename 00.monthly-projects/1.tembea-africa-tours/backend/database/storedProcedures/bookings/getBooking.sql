USE tembeaAfrica;


CREATE OR ALTER PROCEDURE getBooking(
    @id VARCHAR(255)
)
AS
BEGIN 
SELECT * FROM bookings WHERE id=@id
END

GO;