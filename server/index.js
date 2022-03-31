const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors =require("cors")
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
    user: "root",
    host: "localhost",
    password: "password",
    database: "loginformwithdatainmysql",
  });

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query(
      "SELECT * FROM users WHERE username=? AND password=?",
      [username, password],
      (err, result) => {
        if(err){
            res.send({err:err})
        }
        if(result.length > 0){
            res.send(result)
        }
        else{
            res.send({message:"Wrong Username/Password"})
        }
      }
    );
  });
  app.listen(3003, () => {
    console.log("your server is running on port 3003");
  });