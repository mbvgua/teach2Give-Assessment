USE tembeaAfrica;

CREATE OR ALTER PROCEDURE getNewBooking

AS
BEGIN 
SELECT * FROM bookings WHERE dbo.users.isEmailSent=0
END;

GO;

