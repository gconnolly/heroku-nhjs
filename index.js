const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use(cors())

app.get('/blue', function(req,res){
  res.send('blue')
});

app.get('/green', function(req,res){
    res.send('green')
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))