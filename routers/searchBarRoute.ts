import { client } from "../app";
import { Router, Request, Response } from "express";
import { ProductPage } from "../models";

export const searchBarRoutes = Router();
searchBarRoutes.post("/", postProductInfo);
searchBarRoutes.post("/product", postProductPage);
// searchBarRoutes.get("/", getProductPage);

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

async function postProductPage(req: Request, res: Response) {
  console.log("into product page");
  const searchProductName = req.body.name;
  console.log(searchProductName);
  const data = (await client.query<ProductPage>(/* sql */ `SELECT id, name, image, description, price, stock, sales_quantity as quantity from products WHERE name = '${searchProductName}'`)).rows[0];
  req.session.searchProduct = data;
  console.log(req.session.searchProduct);
  res.status(200).json(data);
}

// async function getProductPage(req: Request, res: Response) {
//   res.status(200).json(req.session.searchProduct);
//   // req.session.searchProduct = false;
//   console.log(req.session.searchProduct);
// }
