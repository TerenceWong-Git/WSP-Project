import express from "express";

import { client } from "../app";

export async function minusQuantity(req: express.Request, res: express.Response) {
    const { quantity1, productId } = req.body;

    console.log(quantity1, productId, "from minusQuantity.ts")
    await client.query(
        `UPDATE decision SET quantity=${quantity1} where product_id=${productId}`
    )

    let queryResult1 = await client.query(`
SELECT * FROM products where products.id=${productId}`);

let totalPrice= quantity1*(queryResult1.rows[0].price);

await client.query(
    `UPDATE decision SET total_price_per_product= ${totalPrice} where product_id=${productId}  `)


let updateTotalPrice= await client.query(
    `SELECT total_price_per_product FROM decision where product_id=${productId}`
)
// console.log(updateTotalPrice.rows[0].total_price_per_product, "line 34")

res.json({message:updateTotalPrice.rows[0].total_price_per_product})

   

}