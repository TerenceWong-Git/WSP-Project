import express from "express";
import {client} from "../app";
import type { Request, Response } from "express";
import { Products } from "../models";

export const paymentRoute = express.Router();

// Section 1 - Define endpoints (Method, Path = "/memos")
paymentRoute.get("/create-checkout-session", getpaymentRoute);

// Section 2 - Define Route Handler
async function getpaymentRoute(req: Request, res: Response) {
  const queryResult = await client.query<Products>(
    "SELECT quantity, total_price_per_product, product_id, name FROM decision INNER JOIN products ON product_id = products.id;"
  );
  res.json(queryResult.rows);
}