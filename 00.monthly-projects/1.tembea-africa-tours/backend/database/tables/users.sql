USE tembeaAfrica;

CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    u_name VARCHAR(255) NOT NULL,
    U_email VARCHAR(255) NOT NULL UNIQUE,
    u_password VARCHAR(255) NOT NULL,
    bookingsMade INT DEFAULT 0,
    isEmailSent INT DEFAULT 0,
    isDeleted INT DEFAULT 0
)

GO;