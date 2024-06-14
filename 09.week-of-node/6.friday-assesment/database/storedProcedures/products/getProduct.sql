USE experimental;

CREATE OR ALTER PROCEDURE getProductProxy(
    @id VARCHAR(255)
)
AS 
BEGIN
SELECT * FROM productsProxy WHERE id=@id
END;

GO;