USE tembeaAfrica;

CREATE OR ALTER PROCEDURE updateHotel(
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
UPDATE hotels SET h_name=@h_name,h_image_url=@h_image_url,h_rating=@h_rating,h_price=@h_price,h_description=@h_description,h_location=@h_location
WHERE id=@id
END;

GO;