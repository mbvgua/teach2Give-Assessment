USE tembeaAfrica;

CREATE OR ALTER PROCEDURE updateTour(
    @id VARCHAR(255),
    @t_name VARCHAR(255),
    @t_image_url VARCHAR(255),
    @t_rating INT,
    @t_price INT,
    @t_description VARCHAR(MAX),
    @t_location VARCHAR(255)
)
AS
BEGIN
UPDATE tours SET t_name=@t_name,t_image_url=@t_image_url,t_rating=@t_rating,t_price=@t_price,t_description=@t_description,t_location=@t_location
WHERE id=@id
END;

GO;