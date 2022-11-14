import express from "express";
import { client } from "../app";
import type {Productrecords} from "../models";

export async function productSession(req:express.Request, res:express.Response){
    const id=req.body.id;
    const products = await client.query<Productrecords>(/*sql */`SELECT id, name from products`)
    // console.log(id);
    console.log(products);
    for (const product of products.rows){
    if (id==product.id){
        req.session.productRecords = { id: product.id};
        res.status(201).json({message:`succeed to save product ${id} session`});
        console.log(`succeed to record this product ${id} session`)
        console.log(req.session.productRecords);
        console.log(req.session);
        
        return;}
    if (!id){
        req.session.productRecords=false;
        console.log(req.session.productRecords);
        console.log(`already remove the product ${id}session`)
        res.status(202).json({messagee:`already removed the product ${id} session`})
        return;
    }
}
}