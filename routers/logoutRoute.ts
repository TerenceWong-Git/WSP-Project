import express from "express";

export const logoutRoutes = express.Router();

logoutRoutes.get("/logout", getLogoutRoutes);

function getLogoutRoutes(req: express.Request, res: express.Response) {
  req.session.user = false;
  res.status(200).json({ message: "signed out" });
}
