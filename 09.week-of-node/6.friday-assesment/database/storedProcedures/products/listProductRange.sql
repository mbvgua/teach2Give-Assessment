USE experimental;

CREATE PROCEDURE productsPagination
    @pageNumber INT,
    @pageSize INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DECLARE @StartRow INT = (@PageNumber - 1) * @PageSize;

    SELECT id, p_name, price
    FROM productsProxy
    ORDER BY id
    OFFSET @StartRow ROWS
    FETCH NEXT @PageSize ROWS ONLY;
END


GO;