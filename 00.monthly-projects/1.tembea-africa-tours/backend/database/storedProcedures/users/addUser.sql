USE tembeaAfrica;

CREATE OR ALTER PROCEDURE addUser(
    @id VARCHAR(255),
    @u_name VARCHAR(255),
    @u_email VARCHAR(255),
    @u_password VARCHAR(255)
)
AS
BEGIN 
INSERT INTO users(id,u_name,u_email,u_password)
VALUES (@id,@u_name,@u_email,@u_password)
END;

GO;