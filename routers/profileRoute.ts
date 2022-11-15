import { Request, Response, Router } from "express";
import { client } from "../app";
// import { checkPassword } from "../bcrypt";

export const profileRoutes = Router();
profileRoutes.get("/", getProfile);
profileRoutes.put("/", putProfile);

async function getProfile(req: Request, res: Response) {
  if (req.session.user) {
    const userId = req.session.user.id;
    console.log("hi!!!!");
    const data = (await client.query(/* sql */ `SELECT email, username, mobile, birthday, subscription FROM users WHERE id = ${userId}`)).rows;
    res.status(200).json(data);
  }
}

async function putProfile(req: Request, res: Response) {
  if (req.session.user) {
    const { username, mobile, birthday, subsrciption /* , password */ } = req.body;
    const userId = req.session.user.id;
    // const userId = 1;
    console.log("hi!!!!");
    await client.query(/* sql */ `UPDATE users SET username = $1, mobile = $2, birthday = $3, subscription = $4 WHERE id = ${userId}`, [username, mobile, birthday, subsrciption]);
    res.status(200).json({ message: "edited successfully" });
  }
}
