-- USE experimental;

-- CREATE OR ALTER PROCEDURE updateProduct(
--     @id VARCHAR(255),
--     @p_name VARCHAR(255),
--     @price INT,
--     @category_id VARCHAR(255)
-- )
-- AS
-- BEGIN
-- UPDATE products SET p_name=@p_name, price=@price, category_id=@category_id
-- WHERE id=@id
-- END
-- GO

-- updated due to foreign key constraint
USE experimental;

CREATE OR ALTER PROCEDURE updateProduct(
    @id VARCHAR(255),
    @p_name VARCHAR(255),
    @price INT
)
AS
BEGIN
UPDATE products SET p_name=@p_name, price=@price
WHERE id=@id
END
GO