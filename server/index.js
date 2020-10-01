var express = require('express')
var path = require('path')
var fetch = require('node-fetch')
var app = express()
require('dotenv/config')


app.use(express.static(path.join(__dirname, '../public')))

app.listen(process.env.PORT, () => {
  console.log('Listening on port ' + process.env.PORT)
})
