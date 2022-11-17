import express from "express";

import {client} from "../app";

export async function minusQuantity(req:express.Request,res:express.Response){
    const{quantity1,productId }=req.body;
    
    console.log(quantity1, productId)
    await client.query(
        `UPDATE decision SET quantity=${quantity1} where product_id=${productId}`
    )
    console.log("from minusQuantity.ts")
    res.json({message:"succeed to update the product quantity in database, by minus"})

}