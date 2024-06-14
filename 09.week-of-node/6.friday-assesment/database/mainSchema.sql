-- USE experimental;

-- CREATE TABLE  productsProxy(
--     id VARCHAR(255) PRIMARY KEY,
--     p_name VARCHAR(255) NOT NULL,
--     price  INT NOT NULL
-- )


-- --PRODUCTS STORED PROCEDURES
-- USE experimental;


-- -- addProduct
-- CREATE OR ALTER PROCEDURE addProductProxy (
--     @id VARCHAR(255),
--     @p_name VARCHAR(255),
--     @price INT
-- )

-- AS 
-- BEGIN 
-- INSERT INTO productsProxy(id, p_name,price)
-- VALUES (@id, @p_name,@price)
-- END;

-- deleteProduct
-- CREATE OR ALTER PROCEDURE deleteProductProxy(
--     @id VARCHAR(255)
-- )
-- AS
-- BEGIN
-- DELETE FROM productsProxy WHERE id=@id
-- END;


-- getProduct
-- CREATE OR ALTER PROCEDURE getProductProxy(
--     @id VARCHAR(255)
-- )
-- AS 
-- BEGIN
-- SELECT * FROM productsProxy WHERE id=@id
-- END;

-- getProducts
-- CREATE OR ALTER PROCEDURE getProductsProxy
-- AS 
-- BEGIN
-- SELECT * FROM productsProxy
-- END;

-- searchProducts




-- SELECT * FROM productsProxy;
-- CREATE OR ALTER PROCEDURE searchProductProxy (
--     @p_name VARCHAR(255)
-- )
-- AS 
-- BEGIN
-- SELECT * FROM productsProxy WHERE p_name = @p_name
-- END;

-- test it out
-- EXEC searchProductProxy @p_name = 'kitunguu';


-- filterProducts
-- CREATE PROCEDURE productsPagination
--     @pageNumber INT,
--     @pageSize INT
-- AS
-- BEGIN
--     SET NOCOUNT ON;

--     -- Calculate the starting row number
--     DECLARE @StartRow INT = (@PageNumber - 1) * @PageSize;

--     SELECT id, p_name, price
--     FROM productsProxy
--     ORDER BY id
--     OFFSET @StartRow ROWS
--     FETCH NEXT @PageSize ROWS ONLY;
-- END
-- GO

-- Get the first page with 5 products per page
EXEC productsPagination @PageNumber = 1, @PageSize = 3;

-- -- Get the second page with 5 products per page
-- EXEC productsPagination @PageNumber = 2, @PageSize = 5;

-- -- Get the first page with 10 products per page
-- EXEC productsPagination @PageNumber = 1, @PageSize = 10;

-- -- Get the second page with 10 products per page
-- EXEC productsPagination @PageNumber = 2, @PageSize = 10;

