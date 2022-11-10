import express from "express";
import { client } from "../app";
import { checkPassword } from "../bcrypt";
import type { Login } from "../models";

export const loginRoutes = express.Router();

loginRoutes.post("/", postLoginRoutes);

async function postLoginRoutes(req: express.Request, res: express.Response, next: express.NextFunction) {
  const { email, password } = req.body;
  const users = await client.query<Login>(/* sql */ `SELECT email, password from users`);

  let result = undefined;
  for (const user of users.rows) {
    if (email === user.email) {
      result = await checkPassword(password, user.password);
      if (result) {
        req.session.user = true;
        res.status(201).json({ message: "ok" });
        console.log(req.session.user);
        return;
      }
    }
  }
  req.session.user = false;
  console.log(req.session.user);
  res.status(400).json({ message: "unsuccessful login" });
  return;
}
