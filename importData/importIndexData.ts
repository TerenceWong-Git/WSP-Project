import dotenv from "dotenv";
import pg from "pg";
// import { hashPassword } from "./hash";

dotenv.config();

console.log('db: ', process.env.DB_NAME)
console.log('USER: ', process.env.DB_USER)
console.log('PAWS: ', process.env.DB_PASS)

async function importData() {
  const client = new pg.Client({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });
  await client.connect();

  // DELETE FROM tables
  await client.query("DELETE FROM products");

  // // Insert dummy data
  const products = [
    { product_name: "Coke", image: "./productImages/COKE.jpg", product_price: "28" },
    { product_name: "Coke Zero", image: "./productImages/COKE_PLUS.jpg", product_price: "37" },
    { product_name: "Vita Tea", image: "./productImages/OOHA_LYCHEE_LACTIC.jpg", product_price: "42" },
    { product_name: "Vita Soy", image: "./productImages/OOHA_PEACH_OOLONG_TEA.jpg", product_price: "66" },
  ];
  for (const product of products) {
    await client.query("INSERT INTO products (product_name, image, product_price) VALUES ($1, $2, $3)", [
      product.product_name,
      product.image,
      product.product_price,
    ]);
  }

  await client.end();
}

importData();