USE tembeaAfrica;

CREATE OR ALTER PROCEDURE getUser(
    @id VARCHAR(255)
)
AS
BEGIN 
SELECT * FROM users WHERE id=@id
END;

GO;


-- CREATE OR ALTER PROCEDURE getUser(
--     @u_email VARCHAR(255)
-- )
-- AS
-- BEGIN 
-- SELECT * FROM users WHERE u_email=@u_email
-- END;