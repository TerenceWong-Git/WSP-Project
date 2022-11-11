DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id SERIAL primary key,
    product_category VARCHAR(255) not null,
    image VARCHAR(255) not null,
    product_name VARCHAR(255) not null,
    product_price VARCHAR(255) not null
);