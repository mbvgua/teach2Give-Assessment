USE tembeaAfrica;

CREATE TABLE tours (
    id VARCHAR(255) PRIMARY KEY,
    t_name VARCHAR(255) NOT NULL,
    t_location VARCHAR NOT NULL,
    t_image_url VARCHAR(255) NOT NULL,
    t_rating INT DEFAULT 0,
    t_description VARCHAR(MAX),
    h_price INT NOT NULL,
    isDeleted INT DEFAULT 0
)

GO;