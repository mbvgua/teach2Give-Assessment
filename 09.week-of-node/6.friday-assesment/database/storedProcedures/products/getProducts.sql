USE experimental;

CREATE OR ALTER PROCEDURE getProductsProxy
AS 
BEGIN
SELECT * FROM productsProxy
END;

GO;