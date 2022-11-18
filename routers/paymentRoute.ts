import express from "express";
import {client, stripe} from "../app";
import type { Request, Response } from "express";


export const paymentRoute = express.Router();


// Section 1 - Define endpoints (Method, Path = "/memos")
paymentRoute.get("/checkout", getpaymentRoute);   //create-checkout-session
paymentRoute.post("/create-checkout-session", async (req, res) => {
  console.log(req.body);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: req.body[0].productPrice,
          quantity: req.body[0].productQuantity,
        },
      ],
      success_url: `http://localhost:8080/success.html`,
      cancel_url: `http://localhost:8080/cancel.html`,
    });
    res.status(200).json({ url: session.url});
  } catch (e) {
    res.status(500).json({ error: "cannnot"});
  }
});


// Section 2 - Define Route Handler
async function getpaymentRoute(req: Request, res: Response) {
  const queryResult = await client.query(
    "SELECT quantity, total_price_per_product, product_id, name, users_id, username FROM decision INNER JOIN products ON product_id = products.id INNER JOIN users on users_id = users.id;"
  );
  res.json(queryResult.rows);
}