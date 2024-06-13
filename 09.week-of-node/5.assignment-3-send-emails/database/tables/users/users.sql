USE experimental;

CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    u_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    u_password VARCHAR(255) NOT NULL,
    isDeleted INT DEFAULT 0,
    isEmailSent INT DEFAULT 0
)