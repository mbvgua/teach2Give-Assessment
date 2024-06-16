USE tembeaAfrica;

CREATE OR ALTER PROCEDURE updateUser(
    @id VARCHAR(255),
    @u_name VARCHAR(255),
    @u_email VARCHAR(255),
    @u_password VARCHAR(255)
)
AS
BEGIN
UPDATE users SET u_name=@u_name, u_email=@u_email, u_password=@u_password
WHERE id=@id
END;

GO;