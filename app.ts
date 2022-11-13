import dotenv from "dotenv";
dotenv.config();

import pg from "pg";
export const client = new pg.Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

client.connect();
import express from "express";
import http from "http";
// import { Server as SocketIO } from "socket.io";
import expressSession from "express-session";
import path from "path";
// import { forumRoutes } from "./routers/forumRoute";
import { loginRoutes } from "./routers/loginRoute";
// import { hashPassword } from "./bcrypt";
import { User } from "./models";
import { userLogin } from "./middleware";
import { logoutRoutes } from "./routers/logoutRoute";
import { registerRoutes } from "./routers/registerRoute";
import { indexRoute } from "./routers/indexRoute";
import { allCategoryRoute } from "./routers/allCategoryRoute";

declare module "express-session" {
  interface Session {
    user: User | false;
    // grant: { response: { access_token: string | null } };
  }
}

const app = express();
const server = new http.Server(app);
// const io = new SocketIO(server);
const PORT = 8080;

import grant from "grant";


const grantExpress = grant.express({
  defaults: {
    origin: "http://localhost:8080",
    transport: "session",
    state: true,
  },
  google: {
    key: process.env.GOOGLE_CLIENT_ID || "",
    secret: process.env.GOOGLE_CLIENT_SECRET || "",
    scope: ["profile", "email"],
    callback: "/login/google",
  },
});

app.use(
  expressSession({
    secret: Math.random().toString(32).slice(2),
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(express.urlencoded());

//////////////////////////////////   END OF CONFIGURATION PART ////////////////////////////////////////////////
app.use(grantExpress as express.RequestHandler);

// app.use("/forum", forumRoutes);
// app.use(datingRoutes);
app.use(loginRoutes); // request received from login.js
app.use(logoutRoutes); // request received from login.js
app.use(indexRoute); // request received from index.js
app.use(allCategoryRoute); // request received from allCategory.js


/////////////////  for testing database connection  //////////////////////
/* async function testConnection() {
  await client.connect()
const usertable_result= await client.query(`SELECT *
FROM users;`)
console.log(usertable_result.rows)s
await client.end();
}
testConnection() */
// db function
////////////////////database connection testing ends /////////////////////

app.use(registerRoutes);

//////////////////////  registration route handler END ////////////////////////////////////////////////////////////////////////

app.use(express.static("public"));
app.use("/user", userLogin, express.static("user"));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

server.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
