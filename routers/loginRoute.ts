import express from "express";
import { client } from "../app";
import { checkPassword } from "../bcrypt";
import type { Login } from "../models";

export const loginRoutes = express.Router();

loginRoutes.get("/", getLoginRoutes);

async function getLoginRoutes(req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log(req.body);
  const { email, password } = req.body;
  const users = await client.query<Login>(/* sql */ `SELECT email, password from users`);
  console.log(users.rows);
  const foundUser = users.rows.find(async (data) => data.email === email && (await checkPassword(password, data.password)));
  if (foundUser) {
    console.log("Found User");
    res.json({ message: "ok" });
  } else {
    res.json({ message: "not ok" });
  }
}
