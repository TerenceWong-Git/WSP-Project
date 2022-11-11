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
import { hashPassword } from "./bcrypt";

declare module "express-session" {
  interface Session {
    user: boolean;
  }
}

const app = express();
const server = new http.Server(app); 
// const io = new SocketIO(server);
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

//////////////////////////////////   END OF CONFIGURATION PART ////////////////////////////////////////////////

app.get('/', function(req, res, next) {
  let views = req.session["views"]
  if(!req.session["views"]){
    req.session["views"] = 1
  } else{
    req.session["views"] ++
    
}
console.log(views)
}
)

// app.use("/forum", forumRoutes);
// app.use(datingRoutes);
app.use("/login", loginRoutes);

/////////////////  for testing database connection  //////////////////////
/* async function testConnection() {
  await client.connect()
const usertable_result= await client.query(`SELECT *
FROM users;`)
console.log(usertable_result.rows)
await client.end();
}
testConnection() */
// db function
////////////////////database connection testing ends /////////////////////



app.use(express.static("public"));

//////////////////  registration route handler START   ////////////////////////////////////////
app.post("/userData", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  const date = req.body.date;
  const checkbox = req.body.checkbox;

  if (!username || !email || !password || !phone || !date) {
    res.status(400).json({ message: "missing username,email,password, phone number or birthday ! " });
    return;
  }

  let tableUserName = await client.query(`SELECT username from users`);
  const b = tableUserName.rows;
  // console.log(b);

  let tableEmail = await client.query(`SELECT email from users`);
  const c = tableEmail.rows;

  const hashedPassword = await hashPassword(password); 

  let x = b.find((data) => username === data.username); //find whether there is a value of username in data.username
  let y = c.find((data) => email === data.email); // find whether there is a value of username in data.email
  if (x && !y) {
    res.status(202).json({ message: "Sorry...username already taken, please try again" });
    // console.log(x);
    return;
  }
  if (!x && y) {
    res.status(202).json({ message: "Sorry...email already taken, please try again" });
    // console.log(y);
    return;
  }
  if (x && y) {
    res.status(202).json({ message: "Sorry...username and email already taken, please try again" });
    // console.log(y);
    return;
  }

  await client.query(
    `INSERT INTO users (username, email,password, birthday, mobile, subscription) 
  VALUES ($1, $2, $3, $4, $5, $6)`,
    [username, email, hashedPassword, date, phone, checkbox]
  );
  res.status(201).json({ message: "register successfully" });
  console.log(".ts ok");
});


//////////////////////  registration route handler END ////////////////////////////////

app.use(express.static("public"));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

server.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
