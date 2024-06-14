USE experimental;


CREATE OR ALTER PROCEDURE addProductProxy (
    @id VARCHAR(255),
    @p_name VARCHAR(255),
    @price INT
)

AS 
BEGIN 
INSERT INTO productsProxy(id, p_name,price)
VALUES (@id, @p_name,@price)
END;

GO;
