USE tembeaAfrica;


CREATE OR ALTER PROCEDURE getBookings
AS
BEGIN
SELECT * FROM bookings WHERE isDeleted = 0
END;

GO;