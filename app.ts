import dotenv from "dotenv";
dotenv.config();

import pg from "pg";
export const client = new pg.Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

import express from "express";
import http from "http";
import { Server as SocketIO } from "socket.io";
import expressSession from "express-session";
import path from "path";
import { forumRoutes } from "./routers/forumRoute";
import { datingRoutes } from "./routers/datingRoute";

const app = express();
const server = new http.Server(app);
const io = new SocketIO(server);
const PORT = 8080;

app.use(
  expressSession({
    secret: Math.random().toString(32).slice(2),
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(express.urlencoded());

app.use("/forum", forumRoutes);
app.use(datingRoutes);

app.use(express.static("public"));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

server.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
