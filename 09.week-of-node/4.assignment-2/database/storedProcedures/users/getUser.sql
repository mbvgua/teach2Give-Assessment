USE experimental;

CREATE OR ALTER PROCEDURE getUser(
    @email VARCHAR(255)
)
AS
BEGIN 
SELECT * FROM users WHERE email=@email
END;
GO;