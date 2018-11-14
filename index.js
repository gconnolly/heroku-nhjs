const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/blue', function(req,res){
  res.send('blue')
});

app.get('/green', function(req,res){
  res.send('green')
});

app.get('/red', function(req,res){
  res.send('red')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))