import dotenv from "dotenv";
import pg from "pg";
// import { hashPassword } from "./hash";

dotenv.config();

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
    { product_category: "drinks", image: "./productImages/drinks/COKE.jpg", product_name: "Coke", product_price: "28" },
    { product_category: "drinks", image: "./productImages/drinks/COKE_PLUS.jpg", product_name: "Coke Zero", product_price: "37" },
    { product_category: "drinks", image: "./productImages/drinks/OOHA_LYCHEE_LACTIC.jpg", product_name: "Vita Tea", product_price: "42" },
    { product_category: "drinks", image: "./productImages/drinks/OOHA_PEACH_OOLONG_TEA.jpg", product_name: "Vita Soy", product_price: "66" },

    { product_category: "snacks", image: "./productImages/snacks/calbeeHotAndSpicy.jpg", product_name: "Calbee", product_price: "13" },
    { product_category: "snacks", image: "./productImages/snacks/edoCracker.jpg", product_name: "Edo Cracker", product_price: "11" },
    { product_category: "snacks", image: "./productImages/snacks/pockyDefault.jpg", product_name: "Pocky", product_price: "11" },
    { product_category: "snacks", image: "./productImages/snacks/lotteLittleBear.jpg", product_name: "Lotte Little Bear", product_price: "12" },

    { product_category: "noodles", image: "./productImages/cupNoodles/ichiranTonkotsu.jpg", product_name: "Ichiran Tonkotsu", product_price: "66" },
    { product_category: "noodles", image: "./productImages/cupNoodles/NISSIN_NOODLE_SEAFOOD.jpg", product_name: "NISSIN SEAFOOD", product_price: "66" },
    { product_category: "noodles", image: "./productImages/cupNoodles/nissinYubaUdon.jpg", product_name: "Nissin Yuba Udon", product_price: "66" },
    { product_category: "noodles", image: "./productImages/cupNoodles/NONG_SHIM_SHIN_RAMEN.jpg", product_name: "NONG SHIM SHIN RAMEN", product_price: "66" },
  ];
  for (const product of products) {
    await client.query("INSERT INTO products (product_category, image, product_name, product_price) VALUES ($1, $2, $3, $4)", [
      product.product_category,
      product.image,
      product.product_name,
      product.product_price,
    ]);
  }
  
  await client.end();
}

importData();