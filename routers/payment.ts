import express from "express";

const stripe = require('stripe')('sk_test_51M4eCpDnRCuvfoYDLCll51v1b5nLCemhdwcEGcUVO2JyNv66zAqcYP6Yy7rXfivgpMbkDmxQpKNQkBGL1ppiMji500maCUrUT2');

export async function payment(req:express.Request, res:express.Response){
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [{price: '{{PRICE_ID}}', quantity: 1}],
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}