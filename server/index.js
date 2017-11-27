const express = require('express');
const parser = require('body-parser');
const PORT = process.env.PORT || 3030;
const path = require('path');
const db = require('../database')
const table = require('../database/Users.js')
const routes = require('./routes')
const redisRouter = require('./routes/redisRouter.js')
// const redisRouter = express.Router()
const app = express()
const http = require('http')
const server = http.createServer(app)
const socketIO = require('socket.io')
const io = socketIO(server)
const axios = require('axios')


app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/api', routes)
app.use('/', redisRouter)

io.on('connection', socket => {
  console.log('client connected to socketIO!')
})

server.listen(PORT, (err)=>{
  if (err){
    console.log('there is an err')
  } else {
    console.log('the server is listening on port', PORT);
  }
})


