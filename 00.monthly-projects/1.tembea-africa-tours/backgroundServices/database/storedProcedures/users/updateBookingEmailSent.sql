USE tembeaAfrica;

CREATE PROCEDURE updateBookingEmailSent(
    @id VARCHAR(255)
)

AS
BEGIN
    UPDATE bookings
    SET isEmailSent = 1
    WHERE id = @id;
END;

GO;