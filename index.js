
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const handlebarsExpress = require("express-handlebars");
const fs = require('fs');
var todo = [];
var doneList = [];

app.engine('handlebars', handlebarsExpress());
app.set('views', './view');
app.set('view engine', 'handlebars');

app.use(express.static("style"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));




app.get("/", function (req, res){
  res.render("home", {
    todos: todo,
    doneList: doneList
  })
})


app.get("/complete/:index", function (req, res) {
    let done = todo.splice(req.params.index,1);
    console.log(done);
    doneList.push(done);
    res.redirect("/")

})


app.post("/", function (req, res) {
  let todoList = req.body.input;
  todo.push(todoList);
  res.render('thanks');
  console.log(todo)
});







app.listen(3000);
