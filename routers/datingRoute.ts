import express from "express";

export const datingRoutes = express.Router();
datingRoutes.get("/", getDatingRoute);
datingRoutes.post("/", postDatingRoute);
datingRoutes.put("/", putDatingRoute);
datingRoutes.delete("/", deleteDatingRoute);

function getDatingRoute(req: express.Request, res: express.Response, next: express.NextFunction) {}

function postDatingRoute(req: express.Request, res: express.Response, next: express.NextFunction) {}

function putDatingRoute(req: express.Request, res: express.Response, next: express.NextFunction) {}

function deleteDatingRoute(req: express.Request, res: express.Response, next: express.NextFunction) {}
