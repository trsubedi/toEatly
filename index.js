// REQUIREMENTS //
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var views = path.join(process.cwd(), "views/");

// CONFIG //
// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// DATA //
var foods =[
  {id: 0, name: "Sushiritto", yumminess: "quite"},
  {id: 1, name: "Green Eggs & Ham", yumminess: "sure"},
  {id: 2, name: "Crayfish", yumminess: "depending"},
  {id: 3, name: "Foie Gras", yumminess: "omg"},
  {id: 4, name: "Kale", yumminess: "meh"}
];

// ROUTES //
//get to root should render index.html
app.get("/", function(req, res){
	res.sendFile(views + "index.html");
})

//start server on port 3000
app.listen(3000, function(){
	console.log("server running on port 3000");
})