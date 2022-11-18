import express from "express";
import {client, stripe} from "../app";
import type { Request, Response } from "express";
import console from "console";


export const paymentRoute = express.Router();
// let cartItemList;

// Section 1 - Define endpoints (Method, Path = "/memos")
paymentRoute.get("/checkout", getpaymentRoute);   //create-checkout-session

// Section 2 - Define Route Handler
async function getpaymentRoute(req: Request, res: Response) {
  const queryResult = await client.query(
    "SELECT quantity, total_price_per_product, product_id, name, users_id, username FROM decision INNER JOIN products ON product_id = products.id INNER JOIN users on users_id = users.id;"
  );

  let dataArray = [];
  
  for (let data of queryResult.rows) {
    dataArray.push(data);
  }

  // let cartItemList = queryResult.rows
  res.json(queryResult.rows);
}

paymentRoute.post("/post-checkout",async(req,res)=>{
  // const cartItemList = req.body
  // console.log("15 cartObj",cartItemList)
  // res.json({data: cartItemList})
  try {
  const queryResult = await client.query(
    "SELECT quantity, total_price_per_product, product_id, name, users_id, username FROM decision INNER JOIN products ON product_id = products.id INNER JOIN users on users_id = users.id;"
  );

  let dataInfo = [];
  
  for (let data of queryResult.rows) {
    dataInfo.push(data);
  }

  let lineitems = [];
  for (let product of dataInfo) {
    console.log(product)
    let productDetails = {
      price_data:{
        currency: "hkd",
        product_data: {
          name: product['name']
        },unit_amount: parseInt(product.price)*100
      },
      quantity: parseInt(product)
    }
    lineitems.push(productDetails);
  }

  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineitems,
      success_url: `http://localhost:8080/success.html`,
      cancel_url: `http://localhost:8080/cancel.html`,
    });
    console.log("pay here")
    res.status(200).json({ url: session.url});
  } 
  catch (e) {
    console.log("catch here")
    res.status(500).json({ error: "cannnot"});
  }
})

// paymentRoute.post("/create-checkout-session", async (req, res) => {
//   console.log(req.body);
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: [
//         {
//           price: req.body[0].productPrice,
//           quantity: req.body[0].productQuantity,
//         },
//       ],
//       success_url: `http://localhost:8080/success.html`,
//       cancel_url: `http://localhost:8080/cancel.html`,
//     });
//     res.status(200).json({ url: session.url});
//   } catch (e) {
//     res.status(500).json({ error: "cannnot"});
//   }
// });
