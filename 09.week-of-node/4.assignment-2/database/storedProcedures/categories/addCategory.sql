USE experimental;

CREATE OR ALTER PROCEDURE addCategory (
@id VARCHAR(255),
@c_name VARCHAR(255))

AS 
BEGIN 
INSERT INTO categories(id, c_name)
VALUES (@id, @c_name)
END