import express from "express";

import {client} from "../app";

export async function displayProduct(req:express.Request,res:express.Response){
    const id=req.body.id;
    // console.log(id);
  

    let queryResult= await client.query(
    `SELECT * FROM products where id='${id}'`
)
// console.log(queryResult.rows)
// res.status(201).json(queryResult.rows)
res.json(queryResult.rows)

}  