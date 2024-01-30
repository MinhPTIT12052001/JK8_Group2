CREATE DATABASE Book_Store_Angular;
Use Book_Store_Angular;

CREATE TABLE users(
id INT PRIMARY KEY AUTO_INCREMENT,
full_name VARCHAR(100) DEFAULT '',
phone_number VARCHAR(11) NOT NULL,
address VARCHAR(200) DEFAULT '',
user_name VARCHAR(30) NOT NULL,
pass_word VARCHAR(100) NOT NULL DEFAULT '',
create_at DATETIME,
update_at DATETIME,
is_active TINYINT(1) DEFAULT 1,
date_of_birth DATE,
facebook_account_id INT DEFAULT 0,
google_account_id INT DEFAULT 0
);

ALTER TABLE users ADD COLUMN role_id INT;
ALTER TABLE users ADD COLUMN email VARCHAR(30);

CREATE TABLE roles(
id INT PRIMARY KEY,
name VARCHAR(20) NOT NULL
);

ALTER TABLE users ADD FOREIGN KEY (role_id) REFERENCES roles(id);

CREATE TABLE tokens(
id INT PRIMARY KEY AUTO_INCREMENT,
token VARCHAR(255) UNIQUE NOT NULL,
token_type VARCHAR(50) NOT NULL,
expiration_date DATETIME,
revoked TINYINT(1) NOT NULL,
expired TINYINT(1) NOT NULL,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id)
);

--Hỗ trợ đăng nhập từ Facebook và Google
CREATE TABLE social_accounts(
id INT PRIMARY KEY AUTO_INCREMENT,
provider VARCHAR(20) NOT NULL,
provider_id VARCHAR(50) NOT NULL,
email VARCHAR(150) NOT NULL,
name VARCHAR(100) NOT NULL,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE categories(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL DEFAULT ''
);

CREATE TABLE products(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(300) NOT NULL DEFAULT '',
price FLOAT NOT NULL CHECK(price >=0),
thumbnail VARCHAR(300),
description LONGTEXT,
create_at DATETIME,
update_at DATETIME,
category_id INT,
FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE orders(
id INT PRIMARY KEY AUTO_INCREMENT,
user_id int,
FOREIGN KEY (user_id) REFERENCES users(id),
email VARCHAR(100) DEFAULT '',
phone_number VARCHAR(20) NOT NULL,
address VARCHAR(200) NOT NULL,
note VARCHAR(200) DEFAULT '',
order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
status VARCHAR(20),
total_money FLOAT CHECK(total_money >= 0)
);

ALTER TABLE orders ADD COLUMN `shipping_method` VARCHAR(100);
ALTER TABLE orders ADD COLUMN `shipping_address` VARCHAR(200);
ALTER TABLE orders ADD COLUMN `shipping_date` DATE;
ALTER TABLE orders ADD COLUMN `tracking_number` VARCHAR(100);
ALTER TABLE orders ADD COLUMN `payment_method` VARCHAR(100);

ALTER TABLE orders ADD COLUMN active TINYINT(1);
ALTER TABLE orders
MODIFY COLUMN status ENUM('pending','processing','shipped','delivered','cancelled');

CREATE TABLE order_details(
id INT PRIMARY KEY AUTO_INCREMENT,
order_id INT,
FOREIGN KEY (order_id) REFERENCES orders(id),
product_id INT,
FOREIGN KEY (product_id) REFERENCES products(id),
price FLOAT CHECK(price >=0),
number_of_products INT CHECK(number_of_products > 0),
total_money FLOAT CHECK(total_money >= 0)

);

CREATE TABLE product_images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    image_url VARCHAR(300)
);
ALTER TABLE `book_store_angular`.`orders`
CHANGE COLUMN `shipping_address` `shipping_address` VARCHAR(200) NOT NULL ;

