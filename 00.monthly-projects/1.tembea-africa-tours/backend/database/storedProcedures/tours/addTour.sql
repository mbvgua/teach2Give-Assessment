USE tembeaAfrica;

CREATE OR ALTER PROCEDURE addTour(
    @id VARCHAR(255),
    @t_name VARCHAR(255),
    @t_image_url VARCHAR(255),
    @t_rating INT,
    @t_price INT
)
AS
BEGIN 
INSERT INTO tours(id,t_name,t_image_url,t_rating,t_price)
VALUES (@id,@t_name,@t_image_url,@t_rating,@t_price)
END

END;