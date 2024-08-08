const express = require('express');

const app = express();

app.get('/', function (req, res){
    res.send("This is jagadeesh");
});

app.listen(80);
