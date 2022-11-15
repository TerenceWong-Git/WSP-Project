import { Request, Response, Router } from "express";
import { client } from "../app";

export const profileRoutes = Router();
profileRoutes.get("/", getProfile);

async function getProfile(req: Request, res: Response) {
  if (req.session.user) {
    const userId = req.session.user.id;
    console.log("hi!!!!");
    const data = (await client.query(/* sql */ `SELECT email, username, mobile, birthday, subscription FROM users WHERE id = ${userId}`)).rows;
    res.status(200).json(data);
  }
}
