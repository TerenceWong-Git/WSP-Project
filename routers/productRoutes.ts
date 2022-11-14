import { Router, Request, Response } from "express";
import { client } from "../app";

export const productRoutes = Router();

productRoutes.get("/:pid", getProduct);

async function getProduct(req: Request, res: Response) {}
