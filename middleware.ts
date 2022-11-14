import type { Request, Response, NextFunction } from "express";
export function userLogin(req: Request, res: Response, next: NextFunction) {
  if (req.session.user) {
    console.log("you are user now!");
    next();
  } else {
    console.log("not login yet, ", "user=>",req.session.user);
    res.status(400).json({ message: "you are not user" });
  }
}
