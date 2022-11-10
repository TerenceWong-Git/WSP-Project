DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  subscription BOOLEAN,
  birthday DATE,
  mobile INT
);
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
  );
INSERT INTO users (
    username,
    email,
    password,
    subscription,
    birthday,
    mobile
  )
VALUES (
    'abc',
    'abc@gmail.com',
    '2345',
    true,
    '2000-10-18',
    12345678
  );
INSERT INTO users (
    username,
    email,
    password,
    subscription,
    birthday,
    mobile
  )
VALUES (
    'bcd',
    'bcd@gmail.com',
    '3456',
    true,
    '2000-11-18',
    87654321
  );