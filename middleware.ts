import type { Request, Response, NextFunction } from "express";
export function userLogin(req: Request, res: Response, next: NextFunction) {
  if (req.session.user) {
    console.log("here", req.session.user);
    next();
  } else {
    console.log("there", req.session.user);
    res.status(400).json({ message: "you are not user" });
  }
}
