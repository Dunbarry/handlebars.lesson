const express = require('express');

let app = express();

app.get('/', function (req, res){
  res.json({message: 'Hello from express!'})
});

app.get('/page2', function (req, res){
  res.json({message:'I am page 2 now!'})
})

app.listen(3000, function (){
  console.log('Server running on port 3000');
})
