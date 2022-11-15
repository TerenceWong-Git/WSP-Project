// import { Request, Response, Router } from "express";
// import { client } from "../app";
// import { checkPassword } from "../bcrypt";

// export const profileRoutes = Router();
// profileRoutes.get("/", getProfile);

// async function getProfile(req: Request, res: Response) {
//   if (req.session.user) {
//     const userId = req.session.user.id;
//     console.log("hi!!!!");
//     const data = (await client.query(/* sql */ `SELECT email, username, mobile, birthday, subscription FROM users WHERE id = ${userId}`)).rows;
//     res.status(200).json(data);
//   }
// }

// async function putProfile(req: Request, res: Response) {
//   if (req.session.user) {
//     const { email, username, mobile, birthday, subsrciption, password } = req.body;
//     const userId = req.session.user.id;
//     console.log("hi!!!!");
//     const correctPassword = await checkPassword(password, req.session.user.password);
//     if (correctPassword) {
//       const data = (await client.query(/* sql */ `UPDATE users SET email = $1, username = $2, mobile = $3, birthday = $4, subscription = $5 WHERE id = ${userId}`),
//       [email, username, mobile, birthday, subsrciption]).rows;
//       res.status(200).json(data);
//     }
//   }
// }
