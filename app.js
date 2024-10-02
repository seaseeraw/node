import express from "express";
import path from "path";
import fs from "fs";
import {home,login,register} from "./home.js";

const app = express();
const PORT = 3000;
const __dirname = path.resolve();

app.use("/public", express.static(path.join(__dirname, "static")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let htmlString = "<h1>HOME PAGE</h1>";
  // response.send(htmlString);

  res.sendFile(path.join(__dirname, "/file.json"));
});

// app.get("/", (req,res) => {
//   let htmlString = "<h1>HOME PAGE</h1>";
//   res.sendFile(path.join(__dirname, "/file.json"));
// });

app.get("/home",(req,res)=>{
  let htmlString = home();
  res.send(htmlString);
});

app.get("/login",(req,res)=>{
  let htmlString = login();
  console.log("LOGIN QUERY:", request.query);
  res.send(htmlString);
});

app.get("/register", (req, res) => {
  let htmlString = register();
  res.send(htmlString);
});

// app.listen(3000,()=>{

// });

app.listen(PORT, (error) => {
  error
    ? console.log("ERROR in serving")
    : console.log("http://localhost:" + PORT + " started");
});