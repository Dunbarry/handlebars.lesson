var hbs = require('hbs');
const express = require('express');
const locals=require('./locals.js');
let app = express();

app.set('view engine', 'hbs');
hbs.localsAsTemplateData(app);

locals(app);

app.get('/', function (req, res){
  res.render('home',{
    // cohortName:'Drone',
    foods:[
      'chalupa',
      'Ceviche',
      'Candy sprinkles'
    ]
  });
});

app.get('/page2', function (req, res){
  res.render('page2')
})

app.listen(3000, function (){
  console.log('Server running on port 3000');
})
