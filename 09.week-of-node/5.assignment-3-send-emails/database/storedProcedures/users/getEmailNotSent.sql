USE experimental;

CREATE OR ALTER PROCEDURE getEmailNotSent

AS
BEGIN 
SELECT * FROM users WHERE dbo.users.isEmailSent=0
END;
GO;

