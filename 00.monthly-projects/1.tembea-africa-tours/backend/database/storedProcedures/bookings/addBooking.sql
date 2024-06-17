USE tembeaAfrica;

CREATE OR ALTER PROCEDURE addBooking(
    @id VARCHAR(255),
    @user_id VARCHAR(255),
    @tour_id VARCHAR(255),
    @hotel_id VARCHAR(255)
)
AS
BEGIN
    INSERT INTO bookings(id,user_id, tour_id, hotel_id)
    VALUES (@id, @user_id, @tour_id, @hotel_id)    
END;
