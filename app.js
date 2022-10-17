var express = require('express');
var axios = require('axios');
var app = express();

app.use('/static', express.static("public"));
app.set("view engine", "ejs");

let randNum = Math.floor(Math.random() * 2682) + 1;
const url = 'https://xkcd.com/' + randNum + '/info.0.json';

app.get('/', function(req, res){
    console.log(url);
    axios.get(url).then((response) => {
        console.log(response.data)
        //res.render('home.ejs')
    }).catch((error) => {
        res.json({"Error: ": error})
    })
})

app.listen(3000, function(){
    console.log('App listening on port 3000');
})