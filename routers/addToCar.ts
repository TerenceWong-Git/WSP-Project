import express from "express";


export function addToCar(req:express.Request,res:express.Response){
    console.log(req.session);
    if (req.session.user){
        res.status(201).json({message:"added successfully!"});
        return;
    }
    else{res.status(202).json({message:"please first login to your account!"})}
}