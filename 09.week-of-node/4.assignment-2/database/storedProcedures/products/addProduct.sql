-- USE experimental;


-- CREATE OR ALTER PROCEDURE addProduct (
--     @id VARCHAR(255),
--     @p_name VARCHAR(255),
--     @price INT,
--     @category_id VARCHAR(255)
-- )

-- AS 
-- BEGIN 
-- INSERT INTO products(id, p_name,price,category_id)
-- VALUES (@id, @p_name,@price,@category_id)
-- END


-- tried inputing a product without the foreign category id
USE experimental;


CREATE OR ALTER PROCEDURE addProduct (
    @id VARCHAR(255),
    @p_name VARCHAR(255),
    @price INT
)

AS 
BEGIN 
INSERT INTO products(id, p_name,price)
VALUES (@id, @p_name,@price)
END