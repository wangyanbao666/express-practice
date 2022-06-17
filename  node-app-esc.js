const http = require("http");
const fs = require("fs");
const path = require("path")
var express = require('express');
var app = express();


app.use(express.static("images"));
app.use(express.static("css"));
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.get("*",(req,res)=>{
    res.render("error");
})

app.listen(5000)
// const homepage = fs.readFileSync("templates/index.html")
// const about = fs.readFileSync("templates/about.html")
// const error = fs.readFileSync("templates/error.html")



// const server = http.createServer((req,res) => {
//     res.writeHead(200, {"Content-Type":"text/html"})


//     if (req.url === "/"){
//         res.end(homepage)
//     }
//     else if (req.url === "/about"){
//         res.end(about)
//     }
//     // if (req.url == '/contact') {

//     // }

//     else {
//         res.write(error)
//         res.end()
//     }
// },app)

// server.listen(5000)