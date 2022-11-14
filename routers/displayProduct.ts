import express from "express";
import {client} from "../app";

export async function displayProduct(req:express.Request,res:express.Response){


    let queryResult= await client.query(
    `SELECT * FROM products where id='4'`
)
console.log(queryResult.rows)
res.status(201).json(queryResult.rows)

}