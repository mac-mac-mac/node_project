var express = require('express');
var axios = require('axios');
var app = express();

app.use('/static', express.static("public"));
app.set("view engine", "ejs");

app.get('/', function(req, res){
    let randNum = Math.floor(Math.random() * 2682) + 1;
    let url = 'https://xkcd.com/' + randNum + '/info.0.json';
    axios.get(url).then((response) => {
        res.render('home.ejs', {comicData: response.data})
    }).catch((error) => {
        res.json({"Error: ": error})
    })
})

app.listen(3000, function(){
    console.log('App listening on port 3000');
})