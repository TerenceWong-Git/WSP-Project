import express from "express";
import {client} from "../app";

export async function getDataToShoppingCart(req: express.Request, res: express.Response){

let queryResult= await client.query(`
SELECT * FROM decision INNER JOIN products ON product_id = products.id `)


// console.log(queryResult.rows, "from getDataToShopping")
res.status(201).json(queryResult.rows)

}