USE experimental;

CREATE OR ALTER PROCEDURE getCategory(
    @id VARCHAR(255)
)
AS 
BEGIN
SELECT * FROM categories WHERE id = @id
END
GO