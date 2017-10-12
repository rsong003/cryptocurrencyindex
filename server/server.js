const express = require('express');
const parser = require('body-parser');
const PORT = process.env.PORT || 3030;

const app = express()
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .listen(PORT, err => err ? console.log(`Err in connecting to server: ${err}`) : console.log(`Successfully connected on PORT: ${PORT}`));