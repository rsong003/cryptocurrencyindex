const express = require('express');
const parser = require('body-parser');
const PORT = process.env.PORT || 3030;
const path = require('path');

const app = express()
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use(express.static('public'))
  .listen(PORT, err => err ? console.log(`Err in connecting to server: ${err}`) : console.log(`Successfully connected on PORT: ${PORT}`));

  // app.get('/', (req, res) => {
  //   res.sendFile(path.resove(__dirname + '/public') + '/public/index.html')
  // })