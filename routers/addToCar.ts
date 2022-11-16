import express from "express";
import { client } from "../app";
// import type { Request, Response } from "express";

export const addCartRoute = express.Router();

// Section 1 - Define endpoints (Method, Path = "/memos")
addCartRoute.post("/add", addToCar);



export async function addToCar(req: express.Request, res: express.Response) {
    // console.log(req.session, "from addToCar.ts");
    // let addtoCartValue = req.body.createdDate
    // console.log(addtoCartValue);
   
    // console.log(createdDate, quantity)
    // console.log("backend addtocart", req.body)
    if (req.session.user && req.session.productRecords) {

        const created_date = req.body.createdDate;
        const eachProductQuantity = req.body.quantity;
        
        console.log(created_date);
        console.log(eachProductQuantity);

        
    
        
        await client.query(
            `INSERT INTO decision (users_id, product_id, quantity, created_date) VALUES ($1, $2, $3, $4)`,
            [req.session.user.id, req.session.productRecords.id, eachProductQuantity, created_date]
        )




        res.status(201).json({ message: "added successfully!" });
        return;
    }
    else {
        res.status(202).json({ message: "please first login to your account!" })
    }
}