USE tembeaAfrica;

CREATE OR ALTER PROCEDURE addHotel(
    @id VARCHAR(255),
    @h_name VARCHAR(255),
    @h_image_url VARCHAR(255),
    @h_rating INT,
    @h_price INT,
    @h_description VARCHAR(MAX),
    @h_location VARCHAR(255)
)
AS
BEGIN 
INSERT INTO hotels(id,h_name,h_image_url,h_rating,h_price,h_description,h_location)
VALUES (@id,@h_name,@h_image_url,@h_rating,@h_price, @h_description,@h_location)
END;