import express from "express";
import {client} from "../app";



export async function addToCar(req:express.Request,res:express.Response){
    console.log(req.session, "from addToCar.ts");
    if (req.session.user && req.session.productRecords){
            const created_date=req.body.createdDate;
            const eachProductQuantity= req.body.quantity;
            console.log(created_date,eachProductQuantity );


         await client.query(
            `INSERT INTO decision (users_id, product_id, quantity, created_date) VALUES ($1, $2, $3, $4)`,
            [req.session.user.id, req.session.productRecords.id,eachProductQuantity, created_date ]
        )

       


        res.status(201).json({message:"added successfully!"});
        return;
    }
    else{ 
        res.status(202).json({message:"please first login to your account!"})}
}