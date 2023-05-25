import express from "express";
import mysql from "mysql2";
import cors from "cors";

// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  //enter the password before run the app  n******r
  password: "",
  database: "demoapp",
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const mobile = req.body.mobile;

  db.query(
    "INSERT INTO demoapp.employeetable (name,age,country,mobile) VALUES (? ,? ,? ,?)",
    [name, age, country, mobile],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send("value inserted");
      }
    }
  );
});

// app.get("/", (req, res) => {
//   const sql = "SELECT * FROM userform.registration";
//   db.query(sql, (err, result) => {
//     if (err) return res.json({ Message: "Error  from server" });
//     return response.json(result);
//   });
// });

app.listen(8080, () => {
  console.log("server is running on 8080");
});
