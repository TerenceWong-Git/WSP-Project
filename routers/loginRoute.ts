import express from "express";
import { client } from "../app";
import { checkPassword } from "../bcrypt";
import type { Login } from "../models";

export const loginRoutes = express.Router(); //export to app.ts

loginRoutes.post("/login", postLoginRoutes);

async function postLoginRoutes(req: express.Request, res: express.Response, next: express.NextFunction) {
  const { email, password } = req.body;
  const users = await client.query<Login>(/* sql */ `SELECT id, username, email, password from users`);

  for (const user of users.rows) {
    if (email === user.email) {
      let result = await checkPassword(password, user.password);
      if (result) {
        req.session.user = { id: user.id, username: user.username, email: user.email };
        res.status(200).json({ message: "ok" });
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

////////////  from WSP011 Local Login and Bcrypt.js  Local Route part   ////////////////////////////////
