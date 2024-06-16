USE tembeaAfrica;

CREATE TABLE bookings (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) FOREIGN KEY REFERENCES users(id) NOT NULL,
    hotel_id VARCHAR(255) FOREIGN KEY REFERENCES hotels(id),
    tour_id VARCHAR(255) FOREIGN KEY REFERENCES tours(id)
)

GO;