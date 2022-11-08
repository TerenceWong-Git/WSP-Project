import express from "express";
import { client } from "../app";

client;
export const forumRoutes = express.Router();
forumRoutes.get("/", getForumRoute);
forumRoutes.post("/", postForumRoute);
forumRoutes.put("/:fid", putForumRoute);
forumRoutes.delete("/:fid", deleteForumRoute);

function getForumRoute(req: express.Request, res: express.Response, next: express.NextFunction) {
  const { title, content, userId, timeStamp } = req.body;
  title;
}

function postForumRoute(req: express.Request, res: express.Response, next: express.NextFunction) {}

function putForumRoute(req: express.Request, res: express.Response, next: express.NextFunction) {}

function deleteForumRoute(req: express.Request, res: express.Response, next: express.NextFunction) {}
