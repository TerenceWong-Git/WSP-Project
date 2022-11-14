DROP TABLE IF EXISTS products_rates_map;
DROP TABLE IF EXISTS purchase_record_products_map;
DROP TABLE IF EXISTS shopping_cart;
DROP TABLE IF EXISTS purchase_record;
DROP TABLE IF EXISTS rates;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS origin;
DROP TABLE IF EXISTS brands;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  mobile INT NOT NULL,
  birthday DATE NOT NULL,
  subscription BOOLEAN
);
DROP TABLE IF EXISTS brands;
CREATE TABLE brands (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  decription VARCHAR(255)
);
CREATE TABLE origin (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price decimal NOT NULL,
  stock integer NOT NULL,
  updated_at date NOT NULL,
  sales_quantity integer NOT NULL,
  origin_id integer,
  brands_id integer,
  category_id integer,
  FOREIGN KEY (origin_id) REFERENCES origin(id),
  FOREIGN KEY (brands_id) REFERENCES brands(id),
  FOREIGN KEY (category_id) REFERENCES category(id)
);
CREATE TABLE shopping_cart (
  id SERIAL PRIMARY KEY,
  total_price decimal NOT NULL,
  create_date date NOT NULL,
  quantity int NOT NULL,
  users_id integer,
  products_id int,
  FOREIGN KEY (users_id) REFERENCES users(id),
  FOREIGN KEY (products_id) REFERENCES products(id)
);
CREATE TABLE purchase_record (
  id SERIAL PRIMARY KEY,
  total_price decimal NOT NULL,
  create_date date NOT NULL,
  delivery_status VARCHAR(255) NOT NULL,
  comment VARCHAR(255),
  products_id int,
  users_id integer,
  FOREIGN KEY (products_id) REFERENCES products(id),
  FOREIGN KEY (users_id) REFERENCES users(id)
);
CREATE TABLE rates (id SERIAL PRIMARY KEY, score int NOT NULL);
CREATE TABLE purchase_record_products_map (
  id SERIAL PRIMARY KEY,
  purchase_record_id integer,
  product_id INTEGER,
  FOREIGN KEY (purchase_record_id) REFERENCES purchase_record(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
CREATE TABLE products_rates_map (
  id SERIAL PRIMARY KEY,
  products_id integer,
  rates_id integer,
  FOREIGN KEY (products_id) REFERENCES products(id),
  FOREIGN KEY (rates_id) REFERENCES rates(id),
)
/* ............. build users table ................................. */
SELECT *
FROM users;
INSERT INTO users (
    username,
    email,
    password,
    subscription,
    birthday,
    mobile
  )
VALUES (
    'kennethccw',
    'kennethccw1998@gmail.com',
    '1234',
    true,
    '1998-10-17',
    92153298
  ),
  (
    'abc',
    'abc@gmail.com',
    '2345',
    true,
    '2000-10-18',
    12345678
  ),
  (
    'bcd',
    'bcd@gmail.com',
    '3456',
    true,
    '2000-11-18',
    87654321
  );
/* ...............build brands table............................... */
SELECT *
FROM brands;
INSERT INTO brands (name, decription)
VALUES ('ichiran', 'since 1990'),
  ('NISSIN', 'since 1800'),
  ('NONG-SHIM_SHIN', 'since 1700')
  /* ................. build orderPerTime table .................................... */
SELECT *
FROM orderPerTime;
INSERT INTO orderPerTime (
    total_price,
    create_date,
    delivery_status,
    comment,
    users_id
  )
VALUES (
    '123.3',
    '2020-01-01',
    1,
    'very good',
    1
  ),
  (
    '200',
    '2021-02-01',
    0,
    'ok',
    2
  ),
  (
    '350',
    '2022-03-01',
    0,
    'nice',
    3
  )
  /* .................build products table .................... */
SELECT *
FROM products;
INSERT INTO products (
    name,
    image,
    description,
    price,
    stock,
    updated_at,
    sales_quantity,
    origin_id,
    brands_id,
    category_id
  )
VALUES (
    'ichiranTonkotsu noodles',
    'ichiranTonkotsu.jpg',
    'a nice noodles',
    20.1,
    300,
    '2022-11-01',
    300000,
    1,
    1,
    1
  ),
  (
    'NISSIN_NOODLE_SEAFOOD noodles',
    'NISSHIN_NOODLE_SEAFOOD.jpg',
    'a BAD noodles',
    203.1,
    300,
    '2022-10-01',
    60000,
    2,
    2,
    1
  ),
  (
    'NONG_SHIM_SHIN_RAMEN',
    'NONG_SHIM_SHIN_RAMEN.jpg',
    'a PERFECT noodles',
    50.1,
    300,
    '2022-09-01',
    300000000,
    3,
    3,
    1
  )
  /* .......... build origin table...... */
SELECT *
FROM origin;
INSERT INTO origin (name)
VALUES ('japan'),
  ('china'),
  ('usa')
  /* ........... build category table .... */
SELECT *
FROM category;
INSERT INTO category (name)
VALUES ('cupNoodles'),
  ('drinks'),
  ('snacks')
  /* .......... build rates table .....*/
SELECT *
FROM rates;
INSERT INTO rates (score)
VALUES (1),
  (2),
  (3),
  (4),
  (5)