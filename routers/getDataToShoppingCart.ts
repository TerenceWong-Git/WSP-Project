import express from "express";
import {client} from "../app";

export async function getDataToShoppingCart(req: express.Request, res: express.Response){

    if (req.session.user) {

        let users= await client.query(
            `SELECT * FROM users`
        )

        console.log(users)
for (let user of users.rows){
    if (req.session.user.id==user.id){


        
let queryResult= await client.query(`
SELECT * FROM decision INNER JOIN products ON product_id = products.id WHERE users_id=${req.session.user.id}  `)


console.log(queryResult.rows, "from getData line22")
// console.log(queryResult.rows, "from getDataToShopping")
res.status(201).json(queryResult.rows);
return;
    }
}
         


       
    }





}