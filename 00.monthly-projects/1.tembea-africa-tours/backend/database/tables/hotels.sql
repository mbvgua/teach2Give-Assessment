USE tembeaAfrica;

CREATE TABLE hotels (
    id VARCHAR(255) PRIMARY KEY,
    h_name VARCHAR(255) NOT NULL,
    h_image_url VARCHAR(255) NOT NULL,
    h_rating INT DEFAULT 0,
    h_price INT NOT NULL,
    isDeleted INT DEFAULT 0
)

GO;