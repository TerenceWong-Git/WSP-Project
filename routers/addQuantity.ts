import express from "express";

import {client} from "../app";

export async function addQuantity1(req:express.Request,res:express.Response){
    const{quantity1,productId }=req.body;
    
    // console.log(quantity1, productId, "from minusQuantity.ts")
    await client.query(
        `UPDATE decision SET quantity=${quantity1} where product_id=${productId}`
    )

    let queryResult= await client.query(
        `SELECT quantity, created_date, users_id,product_id,name, price FROM decision inner join products on product_id=products.id WHERE product_id=${productId}  `
    )
    console.log(queryResult.rows, "from addQuantity1.ts")
    let unitPrice=queryResult.rows[0].price;
    let totalPrice=unitPrice*quantity1;
    console.log(totalPrice, "line 19");
    // console.log("from minusQuantity.ts")
    res.json({message:totalPrice})

}