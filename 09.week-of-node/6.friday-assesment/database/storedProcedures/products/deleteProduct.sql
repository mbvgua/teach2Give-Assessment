USE experimental;

CREATE OR ALTER PROCEDURE deleteProductProxy(
    @id VARCHAR(255)
)
AS
BEGIN
DELETE FROM productsProxy WHERE id=@id
END;


GO;