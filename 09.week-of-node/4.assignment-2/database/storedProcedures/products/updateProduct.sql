USE experimental;

CREATE OR ALTER PROCEDURE updateProduct(
    @id VARCHAR(255),
    @p_name VARCHAR(255),
    @price INT,
    @category_id VARCHAR(255)
)
AS
BEGIN
UPDATE products SET p_name=@p_name, price=@price, category_id=@category_id
WHERE id=@id
END
GO