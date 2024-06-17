USE tembeaAfrica;

CREATE OR ALTER PROCEDURE getNewUser

AS
BEGIN 
SELECT * FROM users WHERE dbo.users.isEmailSent=0
END;

GO;

