USE tembeaAfrica;

CREATE TABLE tours (
    id VARCHAR(255) PRIMARY KEY,
    t_name VARCHAR(255) NOT NULL,
    t_image_url VARCHAR(255) NOT NULL,
    t_rating INT DEFAULT 0,
    h_price INT NOT NULL,
    isDeleted INT DEFAULT 0
)

GO;