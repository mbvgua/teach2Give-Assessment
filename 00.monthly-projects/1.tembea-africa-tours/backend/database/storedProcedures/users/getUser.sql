USE tembeaAfrica;

CREATE OR ALTER PROCEDURE getUser(
    @id VARCHAR(255)
)
AS
BEGIN 
SELECT * FROM users WHERE id=@id
END;

GO;