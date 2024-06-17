USE tembeaAfrica;

CREATE OR ALTER PROCEDURE getUserName(
    @id VARCHAR(255)
)
AS
BEGIN 
SELECT u_name,u_email FROM users WHERE id=@id
END;

GO;
