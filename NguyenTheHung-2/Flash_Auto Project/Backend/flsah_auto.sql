DROP DATABASE IF EXISTS flash_auto;
CREATE DATABASE IF NOT EXISTS flash_auto;

USE flash_auto;

DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    fullname VARCHAR(100) DEFAULT '',
    email VARCHAR(50) NOT NULL UNIQUE CHECK (LENGTH(`email`) >= 6 AND LENGTH(`email`) <= 50),
    phone_number VARCHAR(10) NOT NULL,
    address VARCHAR(200),
    username	VARCHAR(30) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    is_active TINYINT(1) DEFAULT 1,
    date_of_birth DATE,
    roles ENUM('ADMIN', 'QL1', 'QL2', 'QL3', 'STAFF', 'USER')
);

INSERT INTO users (fullname, email, phone_number, address, username, `password`, date_of_birth, roles)
VALUES
  ('Nguyễn Văn A', 'nguyenvana@gmail.com', '0912345678', 'Hà Nội', 'nguyenvana', '123456', '1990-01-01', 'ADMIN'),
  ('Trần Thị B', 'tranthib@gmail.com', '0987654321', 'Hồ Chí Minh', 'tranthib', '123456', '1995-02-15', 'QL1'),
  ('Lê Văn C', 'levenc@gmail.com', '0123456789', 'Đà Nẵng', 'levenc', '123456', '1985-03-20', 'STAFF'),
  ('Hoàng Thị D', 'hoangthid@gmail.com', '0901234567', 'Hải Phòng', 'hoangthid', '123456', '2000-04-25', 'USER'),
  ('Phạm Văn E', 'phamvane@gmail.com', '0898765432', 'Cần Thơ', 'phamvane', '123456', '1998-05-30', 'QL2');



DROP TABLE IF EXISTS branches;
CREATE TABLE IF NOT EXISTS branches(
    id int PRIMARY KEY AUTO_INCREMENT,
    `address`	VARCHAR(100)	NOT NULL	UNIQUE,
    staff_number	INT
);

INSERT INTO branches (`address`, staff_number)
VALUES
  ('Cầu Giấy - Hà Nội', 5),
  ('Đống Đa - Hà Nội', 5),
  ('Hà Đông - Hà Nội', 5);

DROP TABLE IF EXISTS branch_managers;
CREATE TABLE IF NOT EXISTS branch_managers(
  branch_id INT,
  manager_id INT,
  PRIMARY KEY (branch_id, manager_id),
  FOREIGN KEY (branch_id) REFERENCES branches(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (manager_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS car_model;
CREATE TABLE IF NOT EXISTS car_model(
	id	INT	PRIMARY KEY AUTO_INCREMENT,
	`name`	VARCHAR(50)		NOT NULL
);

INSERT INTO car_model (`name`)
VALUES
  ('Toyota Vios'),
  ('Honda City'),
  ('Hyundai Accent');



DROP TABLE IF EXISTS car;
CREATE TABLE IF NOT EXISTS car (
	id	INT	PRIMARY KEY AUTO_INCREMENT,
	car_code	VARCHAR(20)		NOT NULL	UNIQUE,
	`name`		VARCHAR(100)	NOT NULL,
    price		LONG			NOT NULL,
    sku_code	VARCHAR(20)		NOT NULL,
    car_model_id	INT,
    capacity		INT,
    acceleration	FLOAT,
    distance_traveled	FLOAT,
    air_bag_number		INT,
    warranty_period		FLOAT,
    seating_number		INT,
    date_added			date,
    quantity			INT,
    branches_id			INT,
    staff_id			INT,
    FOREIGN KEY (branches_id) REFERENCES branches (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (staff_id) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (car_model_id) REFERENCES car_model(id)	ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO car (car_code, `name`, price, sku_code, car_model_id, capacity, acceleration, distance_traveled, air_bag_number, warranty_period, seating_number, date_added, quantity, branches_id, staff_id)
VALUES
  ('CAR001', 'Toyota Vios 1.5G CVT', 581000000, 'SKU001', 1, 5, 10.5, 0, 7, 36, 5, '2023-01-25', 10, 1, 2),
  ('CAR002', 'Honda City RS', 599000000, 'SKU002', 2, 5, 9.4, 0, 6, 36, 5, '2023-01-24', 8, 2, 3),
  ('CAR003', 'Hyundai Accent 1.4 AT Đặc biệt', 501000000, 'SKU003', 3, 5, 10.4, 0, 6, 36, 5, '2023-01-23', 5, 3, 4),
  ('CAR004', 'Mazda 2 Sport Luxury', 509000000, 'SKU004', 1, 5, 9.6, 0, 4, 36, 5, '2023-01-22', 12, 1, 1),
  ('CAR005', 'Kia K3 Premium', 659000000, 'SKU005', 2, 5, 9.2, 0, 6, 36, 5, '2023-01-21', 7, 2, 5);


DROP TABLE IF EXISTS car_images;
CREATE TABLE IF NOT EXISTS car_images(
	id		INT	PRIMARY KEY AUTO_INCREMENT,
    car_id	INT,
    image_url	VARCHAR(500),
    FOREIGN KEY (car_id) REFERENCES car (id) ON UPDATE CASCADE ON DELETE CASCADE
);


DROP TABLE IF EXISTS orders;
CREATE TABLE IF NOT EXISTS orders(
    id INT PRIMARY KEY AUTO_INCREMENT,
	user_id int,
    FOREIGN KEY (user_id) REFERENCES users(id),
    car_id INT,
    FOREIGN KEY (car_id) REFERENCES car (id),
    order_date DATETIME,
    `status` VARCHAR(20),
    total_money FLOAT CHECK(total_money >= 0),
    branches_id	INT,
    FOREIGN KEY (branches_id) REFERENCES branches (id)
);


DROP TABLE IF EXISTS tokens;
CREATE TABLE IF NOT EXISTS tokens(
    id int PRIMARY KEY AUTO_INCREMENT,
    token varchar(255) UNIQUE NOT NULL,
    expiration_date DATETIME,
    user_id int
);

DROP TABLE IF EXISTS 	Reset_Password_Token;
CREATE TABLE IF NOT EXISTS Reset_Password_Token (
	id 				INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	token	 		CHAR(36) NOT NULL UNIQUE,
	user_id 		SMALLINT UNSIGNED NOT NULL,
	expiryDate	 	DATETIME NOT NULL
);