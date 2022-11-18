import { client } from "../app";
import { Router, Request, Response } from "express";

export const searchBarRoutes = Router();
searchBarRoutes.post("/", postProductInfo);

async function postProductInfo(req: Request, res: Response) {
  console.log("into post function");
  const searchProductName = req.body.name;
  const data = (await client.query(/* sql */ `SELECT name, image, price FROM products WHERE LOWER(name) LIKE LOWER($1)`, ["%" + searchProductName + "%"])).rows;
  console.log(data);
  console.log(JSON.stringify(data) === "[", "hi");
  if (JSON.stringify(data) === "[]" || !data) {
    res.status(400).json({ message: "NO RESULT" });
    return;
  }
  res.status(200).json(data);
}
