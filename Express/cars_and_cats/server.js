var express = require("express");

var app = express();
app.use(express.static(__dirname + "/static"));

// app.get("/cars", function (request, response){ response.render('cars.html'); })
// app.get("/cats", function (request, response){ response.render('cats'); })
// app.get("/form", function (request, response){ response.render('form'); })
// app.get('/',     function (request, response){ response.render('index'); })

app.listen(8000, function() { console.log("listening on port 8000"); })