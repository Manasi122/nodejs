const express = require("express");

const app = express();

app.get("/", function(req, res){
    // console.log(req);
    res.send("<h1>Welcome to Express JS</h1>")
});

app.get("/contactus", function(req,res){
    res.send("<h1>Contact us page</h1>")
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});