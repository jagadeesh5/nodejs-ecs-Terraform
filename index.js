const express = require('express');

const app = express();

app.get('/', function (req, res){
    res.send("Hello, Jagadeesh");
});

app.listen(80);
