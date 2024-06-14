USE experimental;

CREATE OR ALTER PROCEDURE searchProductProxy (
    @p_name VARCHAR(255)
)
AS 
BEGIN
SELECT * FROM productsProxy WHERE p_name = @p_name
END;

GO;