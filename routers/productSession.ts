import express from "express";
import { client } from "../app";
import type {Productrecords} from "../models";


export async function productSession(req:express.Request, res:express.Response){
    const id=req.body.id;
    const products = await client.query<Productrecords>(/*sql */`SELECT id, name from products`)
   
    for (const product of products.rows){
    if (id==product.id){
        req.session.productRecords = { id: product.id};
        console.log(`succeed to record this product ${id} session, productSesssion.ts line14`)
        console.log(req.session.productRecords, "productSession.ts line15");
        console.log(req.session, "productSession.ts line16");
        res.status(201).json(req.session.productRecords);
      
        
        return;
    }
}
}


