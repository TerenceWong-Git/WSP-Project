import express from "express";
import { client, stripe } from "../app";
// import type { Request, Response } from "express";
import console from "console";

export const paymentRoute = express.Router();
// let cartItemList;

// // Section 1 - Define endpoints (Method, Path = "/memos")
// paymentRoute.get("/checkout", getpaymentRoute); //create-checkout-session

// // Section 2 - Define Route Handler
// async function getpaymentRoute(req: Request, res: Response) {
//   const queryResult = await client.query(
//     "SELECT quantity, total_price_per_product, product_id, name, users_id, username FROM decision INNER JOIN products ON product_id = products.id INNER JOIN users on users_id = users.id;"
//   );
//   res.json(queryResult.rows);
// }

paymentRoute.post("/create-checkout-session", async (req, res) => {
  const queryResult = await client.query(
    "SELECT quantity, total_price_per_product, product_id, name, users_id, username FROM decision INNER JOIN products ON product_id = products.id INNER JOIN users on users_id = users.id;"
  );

  // 1. 將database data塞入stripe要求既format
  let lineitems = [];
  for (let product of queryResult.rows) {
    let productDetails = {
      price_data: {
        currency: "hkd",
        product_data: {
          name: product.name,
        },
        unit_amount: (product.total_price_per_product * 100) / product.quantity,
      },
      quantity: product.quantity,
    };
    lineitems.push(productDetails);
  }

  // 2. 將資料俾stripe
  try{
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: lineitems,
    success_url: `http://localhost:8080/success.html`,
    cancel_url: `http://localhost:8080/cancel.html`,
  });

  // try-> 轉去俾錢page

    console.log("pay here");
    console.log(session.url)
    // res.redirect(`${session.url}`);
    // res.redirect("http://localhost:8080/")
    res.status(200).json(session.url);
  }
  // catch -> 出cannot
  catch (e) {
    console.log("catch here");
    res.status(500).json({ error: "cannnot" });
  }
});
