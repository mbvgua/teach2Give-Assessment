USE tembeaAfrica;

CREATE OR ALTER PROCEDURE updateBooking(
    @id VARCHAR(255),
    @user_id VARCHAR(255),
    @tour_id VARCHAR(255),
    @hotel_id VARCHAR(255)
)
AS
BEGIN
UPDATE bookings SET user_id=@user_id, tour_id=@tour_id, hotel_id=@hotel_id
WHERE id=@id
    
END;
