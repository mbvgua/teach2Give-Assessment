USE experimental;

CREATE OR ALTER PROCEDURE deleteUser(
    @id VARCHAR(255)
)
AS
BEGIN
DELETE FROM users WHERE id=@id
END 
GO