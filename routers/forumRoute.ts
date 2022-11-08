import express from "express";
import { client } from "../app";
import { Post } from "../models";

export const forumRoutes = express.Router();
forumRoutes.get("/", getForumRoute);
forumRoutes.post("/", postForumRoute);
forumRoutes.put("/:fid", putForumRoute);
forumRoutes.delete("/:fid", deleteForumRoute);

async function getForumRoute(req: express.Request, res: express.Response, next: express.NextFunction) {
  const data = await client.query<Post>(/* sql */ `SELECT * FROM posts`);
}

function postForumRoute(req: express.Request, res: express.Response, next: express.NextFunction) {}

function putForumRoute(req: express.Request, res: express.Response, next: express.NextFunction) {}

function deleteForumRoute(req: express.Request, res: express.Response, next: express.NextFunction) {}
