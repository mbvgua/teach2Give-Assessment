USE tembeaAfrica;

CREATE OR ALTER PROCEDURE getUserByEmail(
    @u_email VARCHAR(255)
)
AS
BEGIN 
SELECT * FROM users WHERE u_email=@u_email
END;

GO;