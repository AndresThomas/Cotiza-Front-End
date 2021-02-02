const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname+'/dist/cotizaApp'));

app.get('/*', function(req, res){
    res.sendFile(__dirname+'/dist/cotizaApp/index.html');
});

app.listen(process.env.PORT || 8080);